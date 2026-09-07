"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const links = [
  ["Recursos", "#recursos"],
  ["Cores", "#cores"],
  ["Na caixa", "#na-caixa"],
  ["Especificações", "#especificacoes"],
  ["Garantia", "#garantia"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container nav-shell">
        <a className="nav-brand" href="#inicio" aria-label="Ir para o início">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="button button--dark nav-cta" href="#comprar">Comprar agora</a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu container">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button--primary" href="#comprar" onClick={() => setOpen(false)}>Comprar agora</a>
        </div>
      )}
    </header>
  );
}
