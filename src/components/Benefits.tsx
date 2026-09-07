"use client";

import { motion } from "motion/react";
import { product } from "@/data/product";
import { stagger, staggerItem } from "@/lib/animations";

export function Benefits() {
  return (
    <section className="benefits-section dark-section">
      <div className="container">
        <motion.div
          className="section-heading section-heading--light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="section-kicker">Desempenho no pulso</span>
          <h2>Tecnologia que acompanha você</h2>
          <p>Recursos para deixar sua rotina mais prática, conectada e fluida.</p>
        </motion.div>

        <motion.div
          className="benefits-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {product.benefits.map((item) => (
            <motion.article className="benefit-item" variants={staggerItem} key={item.title}>
              <div className="benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
