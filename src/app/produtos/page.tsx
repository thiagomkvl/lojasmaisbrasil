import type { Metadata } from "next";
import Link from "next/link";

import { Brand } from "@/components/Brand";
import { ProductCard } from "@/components/store/ProductCard";
import { getPublishedProducts } from "@/lib/store/products";

export const metadata: Metadata = {
  title: "Produtos | Lojas +Brasil",
  description:
    "Conheça os produtos disponíveis na Lojas +Brasil.",
};

export default async function ProdutosPage() {
  const products =
    await getPublishedProducts();

  return (
    <main className="commerce-home">
      <header className="commerce-header">
        <div className="container commerce-header-inner">
          <Link
            href="/"
            className="commerce-logo"
          >
            <Brand />
          </Link>

          <nav className="commerce-main-nav">
            <Link href="/">
              Início
            </Link>

            <Link
              href="/produtos"
              className="active"
            >
              Produtos
            </Link>

            <Link href="/#destaques">
              Destaques
            </Link>

            <Link href="/#beneficios">
              Por que comprar
            </Link>
          </nav>

          <div className="commerce-support">
            <div className="commerce-support-icon">
              ?
            </div>

            <div>
              <strong>
                Precisa de ajuda?
              </strong>

              <span>
                Fale com nosso atendimento
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="store-catalog">
        <div className="container">
          <div className="store-catalog-heading">
            <span className="section-kicker">
              CATÁLOGO
            </span>

            <h1>
              Nossos produtos
            </h1>

            <p>
              Tecnologia e produtos selecionados
              pela Lojas +Brasil.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="store-catalog-empty">
              <h2>
                Nenhum produto publicado
              </h2>

              <p>
                Os produtos publicados aparecerão
                automaticamente aqui.
              </p>
            </div>
          ) : (
            <div className="commerce-product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
