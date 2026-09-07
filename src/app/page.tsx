import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lojas +Brasil | Tecnologia e produtos selecionados",
  description:
    "Tecnologia, inovação e produtos selecionados para facilitar o seu dia a dia. Conheça os produtos da Lojas +Brasil.",

  alternates: {
    canonical: "https://lojasmaisbrasil.com",
  },

  openGraph: {
    title: "Lojas +Brasil",
    description:
      "Tecnologia, inovação e produtos selecionados para o seu dia a dia.",
    url: "https://lojasmaisbrasil.com",
    siteName: "Lojas +Brasil",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#0d1728]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6">

          <Link
            href="/"
            className="text-[20px] font-black tracking-[-0.04em]"
          >
            LOJAS{" "}
            <span className="text-[#387df6]">
              +BRASIL
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#produtos"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#387df6]"
            >
              Produtos
            </a>

            <a
              href="#beneficios"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#387df6]"
            >
              Por que comprar
            </a>

            <a
              href="#contato"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#387df6]"
            >
              Contato
            </a>
          </nav>

          <a
            href="#produtos"
            className="rounded-full bg-[#0d1728] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#387df6]"
          >
            Ver produtos
          </a>

        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute -right-[200px] -top-[100px] h-[600px] w-[600px] rounded-full bg-blue-200/40 blur-[100px]" />

        <div className="absolute -left-[250px] top-[250px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-[100px]" />

        <div className="relative mx-auto grid min-h-[690px] max-w-[1240px] items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#387df6]">
              Tecnologia para o seu dia a dia
            </span>

            <h1 className="mt-7 max-w-[680px] text-[50px] font-black leading-[0.98] tracking-[-0.055em] md:text-[72px]">
              Produtos que unem
              <span className="block text-[#387df6]">
                tecnologia e praticidade.
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-lg leading-8 text-slate-600">
              Selecionamos produtos para tornar sua rotina mais prática,
              conectada e inteligente, com suporte e compra segura.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="rounded-2xl bg-[#387df6] px-8 py-4 font-bold text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1"
              >
                Conhecer produtos
              </a>

              <a
                href="#beneficios"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-bold transition hover:border-blue-200 hover:text-[#387df6]"
              >
                Saiba mais
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>✓ Compra segura</span>
              <span>✓ Envio rastreável</span>
              <span>✓ Suporte especializado</span>
            </div>
          </div>


          {/* PRODUTO HERO */}
          <Link
            href="/gs10"
            className="group relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute inset-8 rounded-full bg-blue-300/20 blur-[60px]" />

            <div className="relative overflow-hidden rounded-[38px] border border-white bg-white/80 p-8 shadow-[0_40px_100px_rgba(20,45,90,0.14)] backdrop-blur-xl">

              <div className="mb-5 flex items-center justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#387df6]">
                    Destaque
                  </span>

                  <h2 className="mt-1 text-3xl font-black tracking-[-0.04em]">
                    GS10 Mini
                  </h2>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl transition duration-300 group-hover:translate-x-1 group-hover:bg-[#387df6] group-hover:text-white">
                  →
                </span>
              </div>

              <div className="relative flex min-h-[350px] items-center justify-center rounded-[28px] bg-gradient-to-b from-[#f7faff] to-[#edf4ff]">

                <Image
                  src="/images/gs10-estelar.png"
                  alt="GS10 Mini"
                  width={600}
                  height={600}
                  priority
                  className="h-auto max-h-[340px] w-auto object-contain transition duration-700 group-hover:scale-[1.05]"
                />

              </div>

              <div className="mt-6 flex items-end justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    A partir de
                  </p>

                  <p className="text-2xl font-black">
                    R$ 299,90
                  </p>
                </div>

                <span className="font-bold text-[#387df6]">
                  Conhecer produto
                </span>

              </div>
            </div>
          </Link>

        </div>
      </section>


      {/* PRODUTOS */}
      <section
        id="produtos"
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-[1240px] px-6">

          <div className="mb-14 max-w-[650px]">

            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#387df6]">
              Produtos
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] md:text-5xl">
              Tecnologia escolhida para você.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-500">
              Conheça os produtos em destaque da Lojas +Brasil.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {/* GS10 */}
            <Link
              href="/gs10"
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8fafc] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(30,70,130,0.12)]"
            >

              <div className="flex min-h-[340px] items-center justify-center p-8">

                <Image
                  src="/images/gs10-estelar.png"
                  alt="GS10 Mini"
                  width={500}
                  height={500}
                  className="max-h-[300px] w-auto object-contain transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="border-t border-slate-200 bg-white p-7">

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#387df6]">
                  Smartwatch
                </span>

                <h3 className="mt-2 text-2xl font-black">
                  GS10 Mini
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tecnologia, conectividade e monitoramento no seu pulso.
                </p>

                <div className="mt-7 flex items-center justify-between">

                  <div>
                    <span className="block text-xs text-slate-400">
                      A partir de
                    </span>

                    <strong className="text-xl">
                      R$ 299,90
                    </strong>
                  </div>

                  <span className="font-bold text-[#387df6]">
                    Ver produto →
                  </span>

                </div>

              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="py-28"
      >
        <div className="mx-auto max-w-[1240px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#387df6]">
              Lojas +Brasil
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] md:text-5xl">
              Comprar tecnologia pode ser simples.
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Produtos selecionados",
                text: "Escolhemos produtos pensando em tecnologia, praticidade e custo-benefício.",
              },
              {
                title: "Compra segura",
                text: "Informação clara e acompanhamento durante toda a experiência de compra.",
              },
              {
                title: "Suporte especializado",
                text: "Atendimento para auxiliar antes e depois da sua compra.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-[#387df6]">
                  ✓
                </div>

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer
        id="contato"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 px-6 py-12 md:flex-row">

          <div>
            <div className="text-xl font-black">
              LOJAS{" "}
              <span className="text-[#387df6]">
                +BRASIL
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              Tecnologia e produtos selecionados.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            © 2026 Lojas +Brasil. Todos os direitos reservados.
          </div>

        </div>
      </footer>

    </main>
  );
}
