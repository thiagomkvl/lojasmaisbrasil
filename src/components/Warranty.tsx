"use client";

import { motion } from "motion/react";
import { reveal } from "@/lib/animations";

const trustItems = [
  ["01", "Suporte especializado", "Acompanhamento do pedido ao pós-venda."],
  ["02", "Garantia de 90 dias", "Cobertura contra defeitos de fabricação conforme as condições da loja."],
  ["03", "Envio rastreável", "Acompanhe o trajeto do pedido com código de rastreamento."]
];

export function Warranty() {
  return (
    <section id="garantia" className="section section-soft">
      <div className="container">
        <motion.div className="warranty-panel" {...reveal}>
          <div className="warranty-main">
            <span className="section-kicker">Compre com mais tranquilidade</span>
            <h2>Por que comprar na <span>Lojas +Brasil?</span></h2>
            <div className="trust-list">
              {trustItems.map(([number, title, text]) => (
                <div className="trust-item" key={title}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <aside className="warranty-box">
            <span className="warranty-icon">✓</span>
            <h3>Informações de garantia</h3>
            <p><b>7 dias</b> — devolução por arrependimento, respeitando as condições aplicáveis ao produto e à compra.</p>
            <hr />
            <p><b>Selo obrigatório:</b> não remova o selo de garantia do relógio durante o período de avaliação.</p>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
