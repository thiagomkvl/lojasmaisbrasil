import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { requireAdmin } from "@/lib/admin/requireAdmin";

import {
  createProduct,
} from "../actions";

import {
  ProductForm,
} from "../ProductForm";

type NewProductPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function NewProductPage({
  searchParams,
}: NewProductPageProps) {
  const params =
    await searchParams;

  const {
    supabase,
  } = await requireAdmin();

  const {
    data: categories,
  } = await supabase
    .from("categories")
    .select("id, name")
    .eq("active", true)
    .order("sort_order")
    .order("name");

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
            Novo produto
          </h1>

          <p>
            Cadastre as informações
            comerciais e de catálogo.
          </p>
        </div>
      </div>

      {params.error && (
        <div className="admin-alert admin-alert--error">
          {params.error}
        </div>
      )}

      <ProductForm
        action={createProduct}
        categories={
          categories ?? []
        }
        submitLabel="Cadastrar produto"
      />
    </section>
  );
}
