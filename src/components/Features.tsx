"use client";

import { motion } from "motion/react";
import { product } from "@/data/product";
import { reveal } from "@/lib/animations";

const compactSmart = [
  ["Conectividade", product.smartFeatures.slice(0, 5)],
  ["Utilidades", product.smartFeatures.slice(5, 10)],
  ["Notificações", product.smartFeatures.slice(10, 15)],
  ["Personalização", product.smartFeatures.slice(15)]
] as const;

export function Features() {
  return (
    <section id="recursos" className="section section-soft">
      <div className="container">
        <div className="section-heading section-heading--left">
          <span className="section-kicker">Recursos completos</span>
          <h2>Um relógio para rotina, treino e conexão.</h2>
          <p>Organizamos os recursos em blocos para facilitar a visualização e deixar a experiência mais leve.</p>
        </div>

        <div className="features-layout">
          <motion.article className="feature-card feature-card--accent" {...reveal}>
            <span className="feature-icon">♡</span>
            <h3>Saúde & bem-estar</h3>
            <ul className="feature-list">
              {product.healthFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <small>Dados de saúde são indicativos e não substituem equipamentos médicos.</small>
          </motion.article>

          <div className="smart-grid">
            {compactSmart.map(([title, items], index) => (
              <motion.article className="feature-card" key={title} {...reveal} transition={{ duration: 0.55, delay: index * 0.05 }}>
                <span className="feature-index">0{index + 1}</span>
                <h3>{title}</h3>
                <ul className="feature-list feature-list--compact">
                  {items.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
