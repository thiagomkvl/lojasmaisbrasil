import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/components/Brand";
import { formatBRL, product } from "@/data/product";

export default function HomePage() {
  return (
    <main className="store-home">
      <header className="store-header">
        <div className="container store-nav">
          <Link href="/" aria-label="Lojas mais Brasil - início">
            <Brand />
          </Link>

          <Link className="button button--dark" href="/gs10">
            Ver GS10 Mini
          </Link>
        </div>
      </header>

      <section className="store-hero">
        <div className="container store-hero-grid">
          <div className="store-hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              LOJAS +BRASIL
            </span>

            <h1>
              Produtos para deixar sua rotina mais conectada.
            </h1>

            <p>
              A Lojas +Brasil reúne tecnologia, acessórios e produtos
              selecionados em páginas dedicadas, com informações claras e uma
              experiência de compra simples.
            </p>

            <Link
              className="button button--primary button--large"
              href="/gs10"
            >
              Conhecer o GS10 Mini
            </Link>
          </div>

          <Link
            href="/gs10"
            className="store-product-card"
            aria-label="Conhecer GS10 Mini"
          >
            <span className="store-product-label">
              PRODUTO EM DESTAQUE
            </span>

            <div className="store-product-image">
              <Image
                src="/images/gs10-estelar.png"
                alt="GS10 Mini"
                width={650}
                height={650}
                priority
              />
            </div>

            <div className="store-product-info">
              <div>
                <span>GS Fit • Series 10</span>
                <h2>{product.name}</h2>
                <p>{product.size}</p>
              </div>

              <strong>{formatBRL(product.price)}</strong>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
