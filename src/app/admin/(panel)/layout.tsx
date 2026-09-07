import { redirect } from "next/navigation";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: claimsData,
    error: claimsError,
  } = await supabase.auth.getClaims();

  const userId = claimsData?.claims?.sub;

  if (claimsError || !userId) {
    redirect("/admin/login");
  }

  const {
    data: admin,
    error: adminError,
  } = await supabase
    .from("admin_users")
    .select("role, active")
    .eq("user_id", userId)
    .maybeSingle();

  if (
    adminError ||
    !admin ||
    !admin.active
  ) {
    await supabase.auth.signOut();

    redirect(
      "/admin/login?error=unauthorized"
    );
  }

  const rawEmail = claimsData.claims.email;

  const email =
    typeof rawEmail === "string"
      ? rawEmail
      : "Administrador";

  return (
    <div className="admin-shell">
      <AdminSidebar />

      <div className="admin-main">
        <AdminHeader
          email={email}
          role={admin.role}
        />

        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
}
