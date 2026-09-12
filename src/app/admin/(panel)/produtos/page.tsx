import Link from "next/link";

import {
  Edit3,
  Package,
  Plus,
  Search,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/requireAdmin";

type ProductsPageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
    success?: string;
    error?: string;
  }>;
};

function successMessage(
  success?: string
) {
  switch (success) {
    case "created":
      return "Produto cadastrado com sucesso.";

    case "updated":
      return "Produto atualizado com sucesso.";

    case "deleted":
      return "Produto excluído com sucesso.";

    default:
      return null;
  }
}

function errorMessage(
  error?: string
) {
  if (error === "not-found") {
    return "Produto não encontrado.";
  }

  return null;
}

function formatMoney(
  value: number | string
) {
  return new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  ).format(Number(value));
}

function statusLabel(
  status: string
) {
  switch (status) {
    case "published":
      return "Publicado";

    case "archived":
      return "Arquivado";

    default:
      return "Rascunho";
  }
}

export default async function ProdutosPage({
  searchParams,
}: ProductsPageProps) {
  const params =
    await searchParams;

  const queryText =
    params.q?.trim() ?? "";

  const status =
    params.status ?? "";

  const {
    supabase,
  } = await requireAdmin();

  let query = supabase
    .from("products")
    .select(`
      id,
      name,
      slug,
      sku,
      brand,
      price,
      compare_at_price,
      stock,
      status,
      main_image_url,
      created_at,
      updated_at,
      categories (
        name
      )
    `)
    .order(
      "created_at",
      {
        ascending: false,
      }
    );

  if (queryText) {
    query = query.ilike(
      "name",
      `%${queryText}%`
    );
  }

  if (
    status === "draft" ||
    status === "published" ||
    status === "archived"
  ) {
    query = query.eq(
      "status",
      status
    );
  }

  const {
    data: products,
    error,
  } = await query;

  if (error) {
    console.error(
      "[ADMIN PRODUCTS LIST]",
      error
    );
  }

  const success =
    successMessage(
      params.success
    );

  const pageError =
    errorMessage(
      params.error
    );

  return (
    <section>
      <div className="admin-page-heading admin-page-heading--actions">
        <div>
          <span>CATÁLOGO</span>

          <h1>Produtos</h1>

          <p>
            Cadastre, edite e gerencie
            os produtos da sua loja.
          </p>
        </div>

        <Link
          href="/admin/produtos/novo"
          className="admin-button admin-button--primary"
        >
          <Plus size={16} />
          Novo produto
        </Link>
      </div>

      {success && (
        <div className="admin-alert admin-alert--success">
          {success}
        </div>
      )}

      {pageError && (
        <div className="admin-alert admin-alert--error">
          {pageError}
        </div>
      )}

      <form
        method="get"
        className="admin-toolbar"
      >
        <label className="admin-search">
          <Search size={17} />

          <input
            name="q"
            defaultValue={queryText}
            placeholder="Pesquisar por nome..."
          />
        </label>

        <select
          name="status"
          defaultValue={status}
        >
          <option value="">
            Todos os status
          </option>

          <option value="published">
            Publicados
          </option>

          <option value="draft">
            Rascunhos
          </option>

          <option value="archived">
            Arquivados
          </option>
        </select>

        <button
          type="submit"
          className="admin-button admin-button--secondary"
        >
          Filtrar
        </button>

        {(queryText || status) && (
          <Link
            href="/admin/produtos"
            className="admin-clear-filter"
          >
            Limpar filtros
          </Link>
        )}
      </form>

      {!products ||
      products.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-icon">
            <Package size={25} />
          </div>

          <h2>
            Nenhum produto cadastrado
          </h2>

          <p>
            Cadastre o primeiro produto
            da Lojas +Brasil para começar
            a montar seu catálogo.
          </p>

          <Link
            href="/admin/produtos/novo"
            className="admin-button admin-button--primary"
          >
            <Plus size={16} />
            Cadastrar produto
          </Link>
        </div>
      ) : (
        <div className="admin-table-card">
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>SKU</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {products.map(
                  (product) => {
                    const category =
                      Array.isArray(
                        product.categories
                      )
                        ? product
                            .categories[0]
                        : product.categories;

                    return (
                      <tr
                        key={
                          product.id
                        }
                      >
                        <td>
                          <div className="admin-product-cell">
                            <div className="admin-product-thumb">
                              {product.main_image_url ? (
                                <img
                                  src={
                                    product.main_image_url
                                  }
                                  alt=""
                                />
                              ) : (
                                <Package
                                  size={18}
                                />
                              )}
                            </div>

                            <div>
                              <strong>
                                {
                                  product.name
                                }
                              </strong>

                              <span>
                                /{
                                  product.slug
                                }
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          {category?.name ??
                            "—"}
                        </td>

                        <td>
                          {product.sku ??
                            "—"}
                        </td>

                        <td>
                          <strong>
                            {formatMoney(
                              product.price
                            )}
                          </strong>

                          {product.compare_at_price && (
                            <small className="admin-old-price">
                              {formatMoney(
                                product.compare_at_price
                              )}
                            </small>
                          )}
                        </td>

                        <td>
                          <span
                            className={
                              product.stock >
                              0
                                ? "admin-stock admin-stock--ok"
                                : "admin-stock admin-stock--empty"
                            }
                          >
                            {
                              product.stock
                            }
                          </span>
                        </td>

                        <td>
                          <span
                            className={`admin-status admin-status--${product.status}`}
                          >
                            {statusLabel(
                              product.status
                            )}
                          </span>
                        </td>

                        <td>
                          <Link
                            href={`/admin/produtos/${product.id}/editar`}
                            className="admin-icon-button"
                            title="Editar produto"
                          >
                            <Edit3
                              size={16}
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
