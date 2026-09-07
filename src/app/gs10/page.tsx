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

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "GS Fit" },
    image: ["https://seudominio.com.br/images/gs10-estelar.png"],
    sku: "GS10-MINI",
    gtin13: "7888927512287",
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: "https://seudominio.com.br"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
