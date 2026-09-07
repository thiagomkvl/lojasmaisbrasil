"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { product } from "@/data/product";
import { reveal } from "@/lib/animations";

const cards = [
  {
    image: "/images/pulseira-silicone.png",
    title: "Pulseira Silicone",
    text: "Confortável para uso diário e atividades leves."
  },
  {
    image: "/images/pulseira-milanese.png",
    title: "Pulseira Milanese",
    text: "Acabamento metálico elegante na cor correspondente.",
    badge: "BRINDE"
  },
  {
    image: "/images/carregador.png",
    title: "Carregador por Indução",
    text: "Carregamento magnético simples e prático."
  }
];

export function PackageContent() {
  return (
    <section id="na-caixa" className="section section-white">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Pacote completo</span>
          <h2>O que você vai receber</h2>
          <p>Tudo o que você precisa para começar a usar o GS10 Mini.</p>
        </div>

        <div className="package-grid">
          {cards.map((card) => (
            <motion.article className="package-card" key={card.title} {...reveal}>
              {card.badge && <span className="card-badge">{card.badge}</span>}
              <div className="package-image-shell">
                <Image src={card.image} alt={card.title} width={420} height={260} className="package-image" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div className="included-panel" {...reveal}>
          <div>
            <span className="mini-label">Itens inclusos na compra</span>
            <h3>Seu kit chega pronto para usar.</h3>
          </div>
          <ul>
            {product.packageItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
