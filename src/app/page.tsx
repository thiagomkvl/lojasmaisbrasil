import type { Metadata } from "next";

import { Benefits } from "@/components/Benefits";
import { ColorSelector } from "@/components/ColorSelector";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileBuyBar } from "@/components/MobileBuyBar";
import { Navbar } from "@/components/Navbar";
import { PackageContent } from "@/components/PackageContent";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Specifications } from "@/components/Specifications";
import { Warranty } from "@/components/Warranty";
import { product } from "@/data/product";

export const metadata: Metadata = {
  title: "GS10 Mini 41/42mm | Lojas +Brasil",
  description:
    "Conheça o GS10 Mini 41/42mm com chamadas Bluetooth, notificações, recursos inteligentes, monitoramento e bateria de até 3 dias.",

  alternates: {
    canonical: "https://lojasmaisbrasil.com/gs10",
  },

  openGraph: {
    title: "GS10 Mini 41/42mm | Lojas +Brasil",
    description:
      "Smartwatch compacto com chamadas Bluetooth, notificações, recursos inteligentes e bateria de até 3 dias.",
    url: "https://lojasmaisbrasil.com/gs10",
    siteName: "Lojas +Brasil",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        url: "https://lojasmaisbrasil.com/images/gs10-estelar.png",
        width: 1200,
        height: 630,
        alt: "GS10 Mini 41/42mm",
      },
    ],
  },
};

export default function GS10Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,
    description: product.description,

    brand: {
      "@type": "Brand",
      name: "GS Fit",
    },

    image: [
      "https://lojasmaisbrasil.com/images/gs10-estelar.png",
    ],

    sku: "GS10-MINI",

    gtin13: "7888927512287",

    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: "https://lojasmaisbrasil.com/gs10",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <ColorSelector />
        <ProductShowcase />
        <PackageContent />
        <Features />
        <Specifications />
        <Warranty />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <MobileBuyBar />
    </>
  );
}
