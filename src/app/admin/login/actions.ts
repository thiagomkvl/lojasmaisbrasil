"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/admin/login?error=missing");
  }

  const supabase = await createClient();

  const { error: loginError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (loginError) {
    redirect("/admin/login?error=invalid");
  }

  const {
    data: claimsData,
    error: claimsError,
  } = await supabase.auth.getClaims();

  const userId = claimsData?.claims?.sub;

  if (claimsError || !userId) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=session");
  }

  const {
    data: admin,
    error: adminError,
  } = await supabase
    .from("admin_users")
    .select("user_id, role, active")
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

  redirect("/admin");
}
