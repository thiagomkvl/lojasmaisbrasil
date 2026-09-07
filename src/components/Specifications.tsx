"use client";

import { motion } from "motion/react";
import { product } from "@/data/product";
import { reveal } from "@/lib/animations";

export function Specifications() {
  return (
    <section id="especificacoes" className="section section-white">
      <div className="container specs-grid">
        <motion.div className="specs-sticky" {...reveal}>
          <span className="section-kicker">Detalhes do produto</span>
          <h2>Especificações técnicas</h2>
          <p>Confira os principais dados do GS10 Mini antes da compra.</p>
          <div className="spec-highlight">
            <span>41/42</span><small>mm</small>
            <p>Caixa compacta para um visual discreto e confortável.</p>
          </div>
        </motion.div>

        <motion.div className="specs-table" {...reveal}>
          {product.specifications.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p className="spec-note">* Confira o número de homologação e demais informações regulatórias com a documentação do fornecedor antes de publicar a versão final.</p>
        </motion.div>
      </div>
    </section>
  );
}
