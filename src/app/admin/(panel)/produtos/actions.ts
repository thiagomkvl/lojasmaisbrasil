"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin/requireAdmin";

const moneyValue = (value: unknown) => {
  if (
    value === "" ||
    value === null ||
    typeof value === "undefined"
  ) {
    return null;
  }

  if (typeof value === "string") {
    return Number(
      value
        .replace(/\./g, "")
        .replace(",", ".")
    );
  }

  return value;
};

const numberValue = (value: unknown) => {
  if (
    value === "" ||
    value === null ||
    typeof value === "undefined"
  ) {
    return 0;
  }

  return Number(value);
};

const optionalText = z
  .string()
  .trim()
  .transform((value) =>
    value === "" ? null : value
  );

const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(120),

  slug: z
    .string()
    .trim()
    .max(140),

  sku: optionalText,

  ean: z
    .string()
    .trim()
    .transform((value) =>
      value === "" ? null : value
    )
    .refine(
      (value) =>
        value === null ||
        /^\d{8,14}$/.test(value),
      {
        message:
          "EAN deve possuir entre 8 e 14 números.",
      }
    ),

  brand: optionalText,

  category_id: z.preprocess(
    (value) =>
      value === "" ? null : value,
    z.string().uuid().nullable()
  ),

  short_description: optionalText,
  description: optionalText,

  price: z.preprocess(
    moneyValue,
    z.number().finite().min(0)
  ),

  compare_at_price: z.preprocess(
    moneyValue,
    z.number().finite().min(0).nullable()
  ),

  stock: z.preprocess(
    numberValue,
    z.number().int().min(0)
  ),

  status: z.enum([
    "draft",
    "published",
    "archived",
  ]),

  main_image_url: optionalText,
});

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseProductForm(
  formData: FormData
) {
  const raw = {
    name: String(
      formData.get("name") ?? ""
    ),

    slug: String(
      formData.get("slug") ?? ""
    ),

    sku: String(
      formData.get("sku") ?? ""
    ),

    ean: String(
      formData.get("ean") ?? ""
    ),

    brand: String(
      formData.get("brand") ?? ""
    ),

    category_id: String(
      formData.get("category_id") ?? ""
    ),

    short_description: String(
      formData.get(
        "short_description"
      ) ?? ""
    ),

    description: String(
      formData.get("description") ?? ""
    ),

    price:
      formData.get("price"),

    compare_at_price:
      formData.get(
        "compare_at_price"
      ),

    stock:
      formData.get("stock"),

    status: String(
      formData.get("status") ??
        "draft"
    ),

    main_image_url: String(
      formData.get(
        "main_image_url"
      ) ?? ""
    ),
  };

  const parsed =
    productSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false as const,
      error:
        parsed.error.issues[0]
          ?.message ??
        "Dados inválidos.",
    };
  }

  const slug =
    slugify(
      parsed.data.slug ||
        parsed.data.name
    );

  if (!slug) {
    return {
      success: false as const,
      error:
        "Informe um slug válido.",
    };
  }

  return {
    success: true as const,

    data: {
      ...parsed.data,
      slug,
    },
  };
}

function errorUrl(
  base: string,
  message: string
) {
  return `${base}?error=${encodeURIComponent(
    message
  )}`;
}

export async function createProduct(
  formData: FormData
) {
  const {
    supabase,
    userId,
  } = await requireAdmin();

  const parsed =
    parseProductForm(formData);

  if (!parsed.success) {
    redirect(
      errorUrl(
        "/admin/produtos/novo",
        parsed.error
      )
    );
  }

  const now =
    new Date().toISOString();

  const {
    data: product,
    error,
  } = await supabase
    .from("products")
    .insert({
      ...parsed.data,
      created_at: now,
      updated_at: now,
    })
    .select(
      "id, name, slug, price, stock, status"
    )
    .single();

  if (error) {
    if (error.code === "23505") {
      redirect(
        errorUrl(
          "/admin/produtos/novo",
          "Já existe um produto com esse slug ou SKU."
        )
      );
    }

    console.error(
      "[ADMIN PRODUCT CREATE]",
      error
    );

    redirect(
      errorUrl(
        "/admin/produtos/novo",
        "Não foi possível cadastrar o produto."
      )
    );
  }

  await supabase
    .from("audit_logs")
    .insert({
      user_id: userId,
      action: "product.create",
      entity: "product",
      entity_id: product.id,
      details: {
        name: product.name,
        slug: product.slug,
        price: product.price,
        stock: product.stock,
        status: product.status,
      },
    });

  revalidatePath(
    "/admin/produtos"
  );

  redirect(
    "/admin/produtos?success=created"
  );
}

export async function updateProduct(
  id: string,
  formData: FormData
) {
  const {
    supabase,
    userId,
  } = await requireAdmin();

  const parsed =
    parseProductForm(formData);

  if (!parsed.success) {
    redirect(
      errorUrl(
        `/admin/produtos/${id}/editar`,
        parsed.error
      )
    );
  }

  const {
    data: before,
    error: beforeError,
  } = await supabase
    .from("products")
    .select(
      "id, name, slug, price, compare_at_price, stock, status"
    )
    .eq("id", id)
    .maybeSingle();

  if (
    beforeError ||
    !before
  ) {
    redirect(
      "/admin/produtos?error=not-found"
    );
  }

  const {
    data: updated,
    error,
  } = await supabase
    .from("products")
    .update({
      ...parsed.data,
      updated_at:
        new Date().toISOString(),
    })
    .eq("id", id)
    .select(
      "id, name, slug, price, compare_at_price, stock, status"
    )
    .single();

  if (error) {
    if (error.code === "23505") {
      redirect(
        errorUrl(
          `/admin/produtos/${id}/editar`,
          "Já existe outro produto com esse slug ou SKU."
        )
      );
    }

    console.error(
      "[ADMIN PRODUCT UPDATE]",
      error
    );

    redirect(
      errorUrl(
        `/admin/produtos/${id}/editar`,
        "Não foi possível atualizar o produto."
      )
    );
  }

  await supabase
    .from("audit_logs")
    .insert({
      user_id: userId,
      action: "product.update",
      entity: "product",
      entity_id: id,
      details: {
        before,
        after: updated,
      },
    });

  revalidatePath(
    "/admin/produtos"
  );

  revalidatePath(
    `/admin/produtos/${id}/editar`
  );

  redirect(
    "/admin/produtos?success=updated"
  );
}

export async function deleteProduct(
  id: string,
  formData: FormData
) {
  const {
    supabase,
    userId,
  } = await requireAdmin();

  const confirmation =
    String(
      formData.get(
        "confirm_delete"
      ) ?? ""
    );

  if (
    confirmation !== "yes"
  ) {
    redirect(
      errorUrl(
        `/admin/produtos/${id}/editar`,
        "Confirme a exclusão antes de continuar."
      )
    );
  }

  const {
    data: product,
    error: productError,
  } = await supabase
    .from("products")
    .select(
      "id, name, slug, sku"
    )
    .eq("id", id)
    .maybeSingle();

  if (
    productError ||
    !product
  ) {
    redirect(
      "/admin/produtos?error=not-found"
    );
  }

  const { error } =
    await supabase
      .from("products")
      .delete()
      .eq("id", id);

  if (error) {
    console.error(
      "[ADMIN PRODUCT DELETE]",
      error
    );

    redirect(
      errorUrl(
        `/admin/produtos/${id}/editar`,
        "Não foi possível excluir o produto."
      )
    );
  }

  await supabase
    .from("audit_logs")
    .insert({
      user_id: userId,
      action: "product.delete",
      entity: "product",
      entity_id: id,
      details: product,
    });

  revalidatePath(
    "/admin/produtos"
  );

  redirect(
    "/admin/produtos?success=deleted"
  );
}
