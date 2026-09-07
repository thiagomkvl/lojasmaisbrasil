"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { product } from "@/data/product";

export function ColorSelector() {
  const [selected, setSelected] = useState<(typeof product.colors)[number]>(product.colors[1]);

  return (
    <section id="cores" className="section section-soft overflow-hidden">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Seu estilo</span>
          <h2>Escolha sua cor</h2>
          <p>Cada cor acompanha pulseira de silicone + pulseira milanese na respectiva tonalidade.</p>
        </div>

        <div className="color-stage">
          <div className="color-copy-card">
            <span className="mini-label">Cor selecionada</span>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>

            <div className="color-buttons" role="group" aria-label="Escolher cor">
              {product.colors.map((color) => (
                <button
                  type="button"
                  key={color.id}
                  className={`color-chip ${selected.id === color.id ? "color-chip--active" : ""}`}
                  onClick={() => setSelected(color)}
                  aria-pressed={selected.id === color.id}
                >
                  <span className="swatch" style={{ background: color.swatch }} />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className={`color-product-frame ${selected.imageType === "lifestyle" ? "color-product-frame--photo" : ""}`}>
            <div className="color-orbit color-orbit--one" />
            <div className="color-orbit color-orbit--two" />
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                className="color-image-wrap"
                initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={selected.image}
                  alt={`GS10 Mini ${selected.name}`}
                  width={760}
                  height={760}
                  className={selected.imageType === "lifestyle" ? "color-photo" : "color-watch"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
