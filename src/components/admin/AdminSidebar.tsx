import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Tags,
  Images,
  Star,
  ImageIcon,
  Palette,
  Settings,
  ExternalLink,
} from "lucide-react";

const menu = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/produtos",
    label: "Produtos",
    icon: Package,
  },
  {
    href: "/admin/categorias",
    label: "Categorias",
    icon: Tags,
  },
  {
    href: "/admin/banners",
    label: "Banners",
    icon: Images,
  },
  {
    href: "/admin/destaques",
    label: "Destaques",
    icon: Star,
  },
  {
    href: "/admin/midia",
    label: "Mídia",
    icon: ImageIcon,
  },
  {
    href: "/admin/identidade",
    label: "Identidade visual",
    icon: Palette,
  },
  {
    href: "/admin/configuracoes",
    label: "Configurações",
    icon: Settings,
  },
];

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <Link
        href="/admin"
        className="admin-brand"
      >
        LOJAS <strong>+BRASIL</strong>
      </Link>

      <div className="admin-sidebar-section">
        ADMINISTRAÇÃO
      </div>

      <nav className="admin-navigation">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.href}
            >
              <Icon size={17} strokeWidth={2} />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="admin-sidebar-bottom">
        <Link href="/">
          <ExternalLink size={15} />
          <span>Ver loja</span>
        </Link>
      </div>
    </aside>
  );
}
