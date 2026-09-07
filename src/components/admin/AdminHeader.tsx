import { LogOut } from "lucide-react";
import { logout } from "@/app/admin/actions";

type AdminHeaderProps = {
  email: string;
  role: string;
};

export function AdminHeader({
  email,
  role,
}: AdminHeaderProps) {
  const initial = email.charAt(0).toUpperCase();

  return (
    <header className="admin-header">
      <div className="admin-header-title">
        <span>Lojas +Brasil</span>
        <strong>Painel administrativo</strong>
      </div>

      <div className="admin-user">
        <div className="admin-user-avatar">
          {initial}
        </div>

        <div className="admin-user-info">
          <strong>{email}</strong>
          <span>{role}</span>
        </div>

        <form action={logout}>
          <button
            type="submit"
            className="admin-logout"
            title="Sair"
          >
            <LogOut size={16} />
            <span>Sair</span>
          </button>
        </form>
      </div>
    </header>
  );
}
