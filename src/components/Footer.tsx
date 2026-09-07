import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>Smartwatches e acessórios para uma rotina mais conectada.</p>
        </div>
        <div className="footer-links">
          <a href="#recursos">Recursos</a>
          <a href="#especificacoes">Especificações</a>
          <a href="#garantia">Garantia</a>
          <a href="#comprar">Comprar</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Lojas +Brasil. Todos os direitos reservados.</span>
        <span>Fotos ilustrativas. Dados de sensores não devem ser usados para fins médicos.</span>
      </div>
    </footer>
  );
}
