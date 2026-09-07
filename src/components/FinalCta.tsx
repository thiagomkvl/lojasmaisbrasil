"use client";

import { motion } from "motion/react";
import { formatBRL, product } from "@/data/product";

export function FinalCta() {
  return (
    <section id="comprar" className="final-cta dark-section">
      <div className="container final-cta-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker section-kicker--dark">Seu próximo smartwatch</span>
          <h2>Garanta seu GS10 Mini</h2>
          <p>Compacto, conectado e acompanhado de dois estilos de pulseira para combinar com sua rotina.</p>
          <div className="cta-price-row">
            <div className="cta-price"><small>A partir de</small><strong>{formatBRL(product.price)}</strong></div>
            <a className="button button--primary button--large" href={product.checkoutUrl} rel="nofollow">Comprar agora</a>
          </div>
          <div className="cta-notes">Envio rastreável <span>•</span> 7 dias de arrependimento <span>•</span> 90 dias de garantia</div>
        </motion.div>
      </div>
    </section>
  );
}
