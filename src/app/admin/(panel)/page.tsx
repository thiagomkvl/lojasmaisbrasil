import {
  Package,
  Tags,
  Images,
  Star,
  Database,
  CheckCircle2,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    products,
    categories,
    banners,
    featured,
  ] = await Promise.all([
    supabase
      .from("products")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("categories")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("banners")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("featured_products")
      .select("*", {
        count: "exact",
        head: true,
      }),
  ]);

  const cards = [
    {
      label: "Produtos",
      value: products.count ?? 0,
      text: "Produtos cadastrados",
      icon: Package,
    },
    {
      label: "Categorias",
      value: categories.count ?? 0,
      text: "Categorias cadastradas",
      icon: Tags,
    },
    {
      label: "Banners",
      value: banners.count ?? 0,
      text: "Banners cadastrados",
      icon: Images,
    },
    {
      label: "Destaques",
      value: featured.count ?? 0,
      text: "Produtos destacados",
      icon: Star,
    },
  ];

  return (
    <>
      <section className="admin-page-heading">
        <div>
          <span>VISÃO GERAL</span>

          <h1>Dashboard</h1>

          <p>
            Gerencie os principais conteúdos
            da Lojas +Brasil.
          </p>
        </div>
      </section>

      <section className="admin-stats">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.label}
              className="admin-stat-card"
            >
              <div className="admin-stat-top">
                <div>
                  <span>{card.label}</span>
                </div>

                <div className="admin-stat-icon">
                  <Icon size={18} />
                </div>
              </div>

              <strong>{card.value}</strong>

              <p>{card.text}</p>
            </article>
          );
        })}
      </section>

      <section className="admin-welcome-card">
        <div>
          <span className="admin-small-label">
            FASE 1
          </span>

          <h2>
            Administração conectada
          </h2>

          <p>
            Seu painel já está conectado ao
            Supabase. Produtos, categorias,
            banners e configurações serão
            administrados por aqui.
          </p>
        </div>

        <div className="admin-status-list">
          <div>
            <CheckCircle2 size={17} />
            Autenticação ativa
          </div>

          <div>
            <Database size={17} />
            PostgreSQL conectado
          </div>

          <div>
            <CheckCircle2 size={17} />
            RLS habilitado
          </div>
        </div>
      </section>
    </>
  );
}
