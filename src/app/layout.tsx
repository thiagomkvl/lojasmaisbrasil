import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seudominio.com.br"),
  title: "GS10 Mini 41/42mm | Lojas +Brasil",
  description: "Conheça o GS10 Mini 41/42mm com chamadas Bluetooth, notificações, pulseira silicone + milanese e bateria de até 3 dias.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GS10 Mini 41/42mm | Lojas +Brasil",
    description: "Smartwatch compacto, conectado e com kit completo.",
    url: "/",
    siteName: "Lojas +Brasil",
    images: [{ url: "/images/lifestyle.jpg" }],
    locale: "pt_BR",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1323"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
