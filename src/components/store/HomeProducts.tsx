import Link from "next/link";

import { ProductCard } from "@/components/store/ProductCard";
import { getPublishedProducts } from "@/lib/store/products";

export async function HomeProducts() {
  const products = await getPublishedProducts();

  return (
    <section
      id="produtos"
      className="commerce-products"
    >
      <div className="container">

        <div className="commerce-section-header">
          <div>
            <span className="section-kicker">
              NOSSOS PRODUTOS
            </span>

            <h2>
              Produtos em destaque
            </h2>
          </div>

          <Link href="/produtos">
            Ver todos →
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="store-catalog-empty">
            <h2>
              Nenhum produto publicado
            </h2>

            <p>
              Cadastre e publique produtos pelo
              painel administrativo.
            </p>
          </div>
        ) : (
          <div className="commerce-product-grid">
            {products
              .slice(0, 6)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        )}

      </div>
    </section>
  );
}
