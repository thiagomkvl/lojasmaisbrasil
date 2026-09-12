import Image from "next/image";
import Link from "next/link";

import { Brand } from "@/components/Brand";
import { HomeProducts } from "@/components/store/HomeProducts";
import { formatBRL, product } from "@/data/product";

export default function HomePage() {
  return (
    <main className="commerce-home">

      {/* TOP BAR */}
      <div className="commerce-topbar">
        <div className="container commerce-topbar-inner">

          <div className="commerce-topbar-left">
            <span>Compra 100% online</span>
            <span>Envio para todo o Brasil</span>
          </div>

          <div className="commerce-topbar-right">
            <Link href="/contato">
              Atendimento
            </Link>

            <Link href="/garantia">
              Garantia
            </Link>

            <span>
              Minha conta
            </span>
          </div>

        </div>
      </div>


      {/* HEADER PRINCIPAL */}
      <header className="commerce-header">
        <div className="container commerce-header-inner">

          <Link
            href="/"
            className="commerce-logo"
          >
            <Brand />
          </Link>

          <nav className="commerce-main-nav">

            <Link
              href="/"
              className="active"
            >
              Início
            </Link>

            <Link href="/produtos">
              Produtos
            </Link>

            <a href="#destaques">
              Destaques
            </a>

            <a href="#beneficios">
              Por que comprar
            </a>

            <Link href="/contato">
              Contato
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


      {/* SEARCH BAR */}
      <section className="commerce-search-section">

        <div className="container commerce-search">

          <button className="commerce-category-button">

            <span className="commerce-menu-icon">
              ☰
            </span>

            Todas as categorias

            <span className="commerce-chevron">
              ↓
            </span>

          </button>


          <div className="commerce-search-box">

            <div className="commerce-search-category">
              Todos os produtos
            </div>

            <input
              type="search"
              placeholder="O que você está procurando?"
              aria-label="Pesquisar produtos"
            />

            <button
              className="commerce-search-button"
              aria-label="Pesquisar"
            >
              ⌕
            </button>

          </div>


          <div className="commerce-actions">

            <button
              className="commerce-action"
              aria-label="Favoritos"
            >
              ♡
            </button>

            <button
              className="commerce-action commerce-cart"
              aria-label="Carrinho"
            >
              ◫

              <span>
                0
              </span>
            </button>

          </div>

        </div>
      </section>


      {/* HERO */}
      <section className="commerce-hero">

        <div className="commerce-hero-decoration commerce-hero-decoration--one" />

        <div className="commerce-hero-decoration commerce-hero-decoration--two" />


        <div className="container commerce-hero-grid">

          <div className="commerce-hero-copy">

            <span className="commerce-hero-kicker">
              TECNOLOGIA PARA O SEU DIA
            </span>

            <h1>
              Conheça o
              <strong> GS10 Mini</strong>
            </h1>

            <h2>
              Tecnologia no seu pulso.
            </h2>

            <p>
              Chamadas Bluetooth, notificações,
              recursos inteligentes e monitoramento
              em um smartwatch compacto e elegante.
            </p>


            <div className="commerce-hero-price">

              <span>
                A partir de
              </span>

              <strong>
                {formatBRL(product.price)}
              </strong>

              <small>
                ou 12x no cartão
              </small>

            </div>


            <div className="commerce-hero-actions">

              <Link
                href="/gs10"
                className="commerce-primary-button"
              >
                Ver produto
              </Link>

              <a
                href="#produtos"
                className="commerce-secondary-button"
              >
                Ver ofertas
              </a>

            </div>

          </div>


          <div className="commerce-hero-product">

            <div className="commerce-product-glow" />


            <div className="commerce-floating-tag commerce-floating-tag--top">

              <span>
                ⚡
              </span>

              <div>
                <strong>
                  Até 3 dias
                </strong>

                <small>
                  de bateria
                </small>
              </div>

            </div>


            <Image
              src="/images/gs10-estelar.png"
              alt="GS10 Mini"
              width={760}
              height={760}
              priority
              className="commerce-hero-watch"
            />


            <div className="commerce-floating-tag commerce-floating-tag--bottom">

              <span>
                ✓
              </span>

              <div>
                <strong>
                  Compra segura
                </strong>

                <small>
                  90 dias de garantia
                </small>
              </div>

            </div>

          </div>

        </div>


        <div className="commerce-slider-dots">
          <span />
          <span className="active" />
          <span />
        </div>

      </section>


      {/* PROMOS */}
      <section
        id="destaques"
        className="commerce-promos"
      >

        <div className="container commerce-promos-grid">

          <Link
            href="/gs10"
            className="commerce-promo-card commerce-promo-card--large"
          >

            <div className="commerce-promo-copy">

              <span>
                SMARTWATCH
              </span>

              <h3>
                GS10
                <strong> Mini</strong>
              </h3>

              <p>
                41 / 42 mm
              </p>

              <div className="commerce-promo-price">
                {formatBRL(product.price)}
              </div>

              <b>
                Ver produto →
              </b>

            </div>


            <Image
              src="/images/gs10-estelar.png"
              alt="GS10 Mini"
              width={340}
              height={340}
            />

          </Link>


          <article className="commerce-promo-card">

            <div className="commerce-promo-copy">

              <span>
                ACESSÓRIOS
              </span>

              <h3>
                Pulseiras
              </h3>

              <p>
                Silicone e Milanese
              </p>

              <b>
                Confira →
              </b>

            </div>

            <div className="commerce-promo-circle">
              +
            </div>

          </article>


          <article className="commerce-promo-card commerce-promo-card--dark">

            <div className="commerce-promo-copy">

              <span>
                VANTAGEM
              </span>

              <h3>
                Compra
                <strong> segura</strong>
              </h3>

              <p>
                Envio rastreável e suporte
                especializado.
              </p>

              <b>
                Saiba mais →
              </b>

            </div>

          </article>

        </div>

      </section>


      {/* PRODUTOS */}
      <HomeProducts />


      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="commerce-benefits"
      >

        <div className="container commerce-benefits-grid">

          <div>

            <span>
              01
            </span>

            <h3>
              Compra segura
            </h3>

            <p>
              Informações claras e uma experiência
              de compra simples e confiável.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Envio rastreável
            </h3>

            <p>
              Acompanhe o envio do seu produto
              durante todo o processo.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Suporte especializado
            </h3>

            <p>
              Atendimento antes e depois
              da sua compra.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <h3>
              Garantia
            </h3>

            <p>
              Produtos comercializados com garantia
              e suporte pós-venda.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="commerce-footer">

        <div className="container commerce-footer-top">

          <div>

            <Brand />

            <p>
              Tecnologia e produtos selecionados
              para o seu dia a dia.
            </p>

          </div>


          <div>

            <strong>
              Lojas +Brasil
            </strong>

            <Link href="/">
              Início
            </Link>

            <Link href="/produtos">
              Produtos
            </Link>

            <Link href="/gs10">
              GS10 Mini
            </Link>

            <Link href="/contato">
              Contato
            </Link>

          </div>


          <div>

            <strong>
              Atendimento
            </strong>

            <span>
              Suporte
            </span>

            <span>
              Garantia
            </span>

            <span>
              Política de compra
            </span>

          </div>

        </div>


        <div className="container commerce-footer-bottom">
          © 2026 Lojas +Brasil. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  );
}