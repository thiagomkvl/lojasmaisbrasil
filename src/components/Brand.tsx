export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="Lojas mais Brasil">
      <span>LOJAS</span><strong>+BRASIL</strong>
    </span>
  );
}
