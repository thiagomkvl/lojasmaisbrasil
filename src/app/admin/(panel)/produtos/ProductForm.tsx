type Category = {
  id: string;
  name: string;
};

type ProductData = {
  name?: string | null;
  slug?: string | null;
  sku?: string | null;
  ean?: string | null;
  brand?: string | null;
  category_id?: string | null;
  short_description?: string | null;
  description?: string | null;
  price?: number | string | null;
  compare_at_price?: number | string | null;
  stock?: number | null;
  status?: string | null;
  main_image_url?: string | null;
};

type ProductFormProps = {
  action: (
    formData: FormData
  ) => void | Promise<void>;

  categories: Category[];

  product?: ProductData;

  submitLabel: string;
};

export function ProductForm({
  action,
  categories,
  product,
  submitLabel,
}: ProductFormProps) {
  return (
    <form
      action={action}
      className="admin-form"
    >
      <div className="admin-form-grid">
        <section className="admin-form-card admin-form-card--wide">
          <div className="admin-form-card-heading">
            <div>
              <span>
                INFORMAÇÕES PRINCIPAIS
              </span>

              <h2>
                Dados do produto
              </h2>
            </div>
          </div>

          <div className="admin-fields-grid">
            <label className="admin-field admin-field--full">
              <span>
                Nome do produto *
              </span>

              <input
                name="name"
                defaultValue={
                  product?.name ?? ""
                }
                placeholder="Ex.: GS10 Mini"
                maxLength={120}
                required
              />
            </label>

            <label className="admin-field">
              <span>
                Slug
              </span>

              <input
                name="slug"
                defaultValue={
                  product?.slug ?? ""
                }
                placeholder="gs10-mini"
                maxLength={140}
              />

              <small>
                Se deixar vazio, será
                criado pelo nome.
              </small>
            </label>

            <label className="admin-field">
              <span>
                Marca
              </span>

              <input
                name="brand"
                defaultValue={
                  product?.brand ?? ""
                }
                placeholder="GS Fit"
              />
            </label>

            <label className="admin-field">
              <span>
                SKU
              </span>

              <input
                name="sku"
                defaultValue={
                  product?.sku ?? ""
                }
                placeholder="GS10-MINI"
              />
            </label>

            <label className="admin-field">
              <span>
                EAN
              </span>

              <input
                name="ean"
                inputMode="numeric"
                defaultValue={
                  product?.ean ?? ""
                }
                placeholder="7888927512287"
              />
            </label>

            <label className="admin-field admin-field--full">
              <span>
                Categoria
              </span>

              <select
                name="category_id"
                defaultValue={
                  product?.category_id ??
                  ""
                }
              >
                <option value="">
                  Sem categoria
                </option>

                {categories.map(
                  (category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  )
                )}
              </select>
            </label>

            <label className="admin-field admin-field--full">
              <span>
                Descrição curta
              </span>

              <textarea
                name="short_description"
                rows={3}
                defaultValue={
                  product
                    ?.short_description ??
                  ""
                }
                placeholder="Resumo exibido nos cards e na página do produto."
              />
            </label>

            <label className="admin-field admin-field--full">
              <span>
                Descrição completa
              </span>

              <textarea
                name="description"
                rows={7}
                defaultValue={
                  product
                    ?.description ?? ""
                }
                placeholder="Descrição completa do produto..."
              />
            </label>
          </div>
        </section>

        <div className="admin-form-side">
          <section className="admin-form-card">
            <div className="admin-form-card-heading">
              <div>
                <span>COMERCIAL</span>
                <h2>Preço e estoque</h2>
              </div>
            </div>

            <div className="admin-fields-grid admin-fields-grid--single">
              <label className="admin-field">
                <span>
                  Preço atual *
                </span>

                <div className="admin-money-input">
                  <b>R$</b>

                  <input
                    name="price"
                    inputMode="decimal"
                    defaultValue={
                      product?.price ?? ""
                    }
                    placeholder="299,90"
                    required
                  />
                </div>
              </label>

              <label className="admin-field">
                <span>
                  Preço anterior
                </span>

                <div className="admin-money-input">
                  <b>R$</b>

                  <input
                    name="compare_at_price"
                    inputMode="decimal"
                    defaultValue={
                      product
                        ?.compare_at_price ??
                      ""
                    }
                    placeholder="349,90"
                  />
                </div>

                <small>
                  Use para mostrar uma
                  oferta/de-por.
                </small>
              </label>

              <label className="admin-field">
                <span>
                  Estoque *
                </span>

                <input
                  name="stock"
                  type="number"
                  min="0"
                  step="1"
                  defaultValue={
                    product?.stock ?? 0
                  }
                  required
                />
              </label>

              <label className="admin-field">
                <span>
                  Status *
                </span>

                <select
                  name="status"
                  defaultValue={
                    product?.status ??
                    "draft"
                  }
                >
                  <option value="draft">
                    Rascunho
                  </option>

                  <option value="published">
                    Publicado
                  </option>

                  <option value="archived">
                    Arquivado
                  </option>
                </select>
              </label>
            </div>
          </section>

          <section className="admin-form-card">
            <div className="admin-form-card-heading">
              <div>
                <span>IMAGEM</span>
                <h2>
                  Imagem principal
                </h2>
              </div>
            </div>

            <label className="admin-field">
              <span>
                Caminho ou URL
              </span>

              <input
                name="main_image_url"
                defaultValue={
                  product
                    ?.main_image_url ?? ""
                }
                placeholder="/images/gs10-estelar.png"
              />

              <small>
                No próximo módulo vamos
                substituir isso por upload
                direto na biblioteca de mídia.
              </small>
            </label>
          </section>
        </div>
      </div>

      <div className="admin-form-actions">
        <a
          href="/admin/produtos"
          className="admin-button admin-button--secondary"
        >
          Cancelar
        </a>

        <button
          type="submit"
          className="admin-button admin-button--primary"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
