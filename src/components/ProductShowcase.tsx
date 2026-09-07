"use client";

import Image from "next/image";
import { motion } from "motion/react";

const tags = [
  ["Chamadas BT", "Ligações direto do relógio"],
  ["Notificações", "WhatsApp e redes sociais"],
  ["Watchfaces", "Personalize a tela"],
  ["Saúde", "Acompanhamento de bem-estar"]
];

export function ProductShowcase() {
  return (
    <section className="showcase-section dark-section">
      <div className="container showcase-grid">
        <motion.div
          className="showcase-copy"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker section-kicker--dark">Mais do que ver as horas</span>
          <h2>Seu dia inteiro, mais perto.</h2>
          <p>Receba notificações, controle funções do celular e acompanhe sua rotina sem precisar tirar o smartphone do bolso o tempo todo.</p>
          <a className="text-link" href="#recursos">Ver todos os recursos <span>↗</span></a>
        </motion.div>

        <div className="showcase-visual">
          <div className="showcase-rings" />
          <motion.div
            className="showcase-watch-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <Image src="/images/gs10-estelar.png" alt="GS10 Mini em destaque" width={640} height={640} className="showcase-watch" />
          </motion.div>

          {tags.map(([title, text], index) => (
            <motion.div
              key={title}
              className={`show-tag show-tag--${index + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 + index * 0.08 }}
            >
              <span />
              <div><b>{title}</b><small>{text}</small></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
