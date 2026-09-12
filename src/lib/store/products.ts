import { createClient } from "@/lib/supabase/server";

export type StoreProduct = {
  id: string;
  name: string;
  slug: string;
  brand: string | null;
  short_description: string | null;
  price: number;
  compare_at_price: number | null;
  stock: number;
  main_image_url: string | null;
};

export async function getPublishedProducts(): Promise<StoreProduct[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      name,
      slug,
      brand,
      short_description,
      price,
      compare_at_price,
      stock,
      main_image_url
    `)
    .eq("status", "published")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("[STORE PRODUCTS]", error);
    return [];
  }

  return (data ?? []) as StoreProduct[];
}
