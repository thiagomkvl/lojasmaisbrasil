"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { product } from "@/data/product";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-white">
      <div className="container faq-wrap">
        <div className="section-heading">
          <span className="section-kicker">Dúvidas comuns</span>
          <h2>Perguntas frequentes</h2>
        </div>

        <div className="faq-list">
          {product.faq.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.question}>
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>{item.question}</span>
                  <span className="faq-plus">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
