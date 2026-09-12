import Link from "next/link";
import {
  ArrowLeft,
  Trash2,
} from "lucide-react";
import { notFound } from "next/navigation";

import { requireAdmin } from "@/lib/admin/requireAdmin";

import {
  deleteProduct,
  updateProduct,
} from "../../actions";

import {
  ProductForm,
} from "../../ProductForm";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function EditProductPage({
  params,
  searchParams,
}: EditProductPageProps) {
  const {
    id,
  } = await params;

  const queryParams =
    await searchParams;

  const {
    supabase,
  } = await requireAdmin();

  const [
    productResult,
    categoriesResult,
  ] = await Promise.all([
    supabase
      .from("products")
      .select(`
        id,
        name,
        slug,
        sku,
        ean,
        brand,
        category_id,
        short_description,
        description,
        price,
        compare_at_price,
        stock,
        status,
        main_image_url
      `)
      .eq("id", id)
      .maybeSingle(),

    supabase
      .from("categories")
      .select("id, name")
      .eq("active", true)
      .order("sort_order")
      .order("name"),
  ]);

  if (
    productResult.error ||
    !productResult.data
  ) {
    notFound();
  }

  const updateAction =
    updateProduct.bind(
      null,
      id
    );

  const deleteAction =
    deleteProduct.bind(
      null,
      id
    );

  return (
    <section>
      <Link
        href="/admin/produtos"
        className="admin-back-link"
      >
        <ArrowLeft size={15} />
        Voltar para produtos
      </Link>

      <div className="admin-page-heading">
        <div>
          <span>CATÁLOGO</span>

          <h1>
            Editar produto
          </h1>

          <p>
            {productResult.data.name}
          </p>
        </div>
      </div>

      {queryParams.error && (
        <div className="admin-alert admin-alert--error">
          {queryParams.error}
        </div>
      )}

      <ProductForm
        action={updateAction}
        categories={
          categoriesResult.data ??
          []
        }
        product={
          productResult.data
        }
        submitLabel="Salvar alterações"
      />

      <section className="admin-danger-zone">
        <div>
          <span>
            ZONA DE PERIGO
          </span>

          <h2>
            Excluir produto
          </h2>

          <p>
            Essa ação remove o produto
            permanentemente do catálogo.
          </p>
        </div>

        <form
          action={deleteAction}
          className="admin-delete-form"
        >
          <label>
            <input
              type="checkbox"
              name="confirm_delete"
              value="yes"
              required
            />

            Confirmo que desejo excluir
            este produto.
          </label>

          <button
            type="submit"
            className="admin-button admin-button--danger"
          >
            <Trash2 size={15} />
            Excluir produto
          </button>
        </form>
      </section>
    </section>
  );
}
