"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { formatBRL, product } from "@/data/product";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="hero section-pad-top">
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow"><span className="eyebrow-dot" />{product.line}</div>
          <h1>
            <span>{product.name}</span>
            <strong>{product.size}</strong>
          </h1>
          <p className="hero-description">{product.description}</p>

          <div className="hero-actions">
            <div className="price-block">
              <small>A partir de</small>
              <b>{formatBRL(product.price)}</b>
              <span>{product.installments}</span>
            </div>
            <a className="button button--primary button--large" href="#comprar">Garantir o meu</a>
          </div>

          <div className="hero-trust" aria-label="Benefícios da compra">
            <span>✓ Envio rastreável</span>
            <span>✓ 90 dias de garantia</span>
            <span>✓ 7 dias de arrependimento</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glow" />
          <div className="hero-product-card glass-card">
            <span className="product-kicker">Series 10</span>
            <motion.div
              className="watch-float"
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/gs10-estelar.png"
                alt="Smartwatch GS10 Mini na cor estelar"
                width={620}
                height={620}
                priority
                className="hero-watch"
              />
            </motion.div>
          </div>

          <motion.div
            className="floating-card floating-card--battery"
            animate={reduceMotion ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="float-icon">⚡</span>
            <div><b>Até 3 dias</b><small>de bateria</small></div>
          </motion.div>

          <motion.div
            className="floating-card floating-card--fit"
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <span className="float-check">✓</span>
            <div><b>Ideal para</b><small>pulsos finos</small></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
