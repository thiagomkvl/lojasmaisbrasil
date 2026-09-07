"use client";

import { formatBRL, product } from "@/data/product";

export function MobileBuyBar() {
  return (
    <div className="mobile-buy-bar">
      <div><small>A partir de</small><strong>{formatBRL(product.price)}</strong></div>
      <a className="button button--primary" href="#comprar">Comprar</a>
    </div>
  );
}
