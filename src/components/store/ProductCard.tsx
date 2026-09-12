import Link from "next/link";

import type { StoreProduct } from "@/lib/store/products";

type ProductCardProps = {
  product: StoreProduct;
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function getProductUrl(slug: string) {
  if (slug === "gs10" || slug === "gs10-mini") {
    return "/gs10";
  }

  return `/produto/${slug}`;
}

export function ProductCard({
  product,
}: ProductCardProps) {
  const url = getProductUrl(product.slug);

  return (
    <Link
      href={url}
      className="commerce-product-item"
    >
      <div className="commerce-product-image">
        {product.stock > 0 ? (
          <span className="commerce-product-badge">
            DISPONÍVEL
          </span>
        ) : (
          <span className="commerce-product-badge">
            ESGOTADO
          </span>
        )}

        {product.main_image_url ? (
          <img
            src={product.main_image_url}
            alt={product.name}
          />
        ) : (
          <div className="store-product-no-image">
            Sem imagem
          </div>
        )}
      </div>

      <div className="commerce-product-content">
        <span>
          {product.brand ?? "Lojas +Brasil"}
        </span>

        <h3>{product.name}</h3>

        <p>
          {product.short_description ??
            "Conheça este produto na Lojas +Brasil."}
        </p>

        <div className="commerce-product-bottom">
          <div>
            <small>A partir de</small>

            {product.compare_at_price && (
              <del className="store-product-old-price">
                {formatMoney(
                  Number(product.compare_at_price)
                )}
              </del>
            )}

            <strong>
              {formatMoney(Number(product.price))}
            </strong>
          </div>

          <span className="commerce-product-arrow">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
