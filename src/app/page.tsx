import type { Metadata } from "next";
import { getHeroImages } from "@/lib/getHeroImages";
import { products } from "@/lib/data/products";
import { HeroCarousel } from "./components/HeroCarousel";
import { NavBar } from "./components/NavBar";
import { ProductShowcase } from "./components/ProductShowcase";
import { BrandManifest } from "./components/BrandManifest";
import { CheckoutForm } from "./components/CheckoutForm";
import { Footer } from "./components/Footer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Maison Atelier",
  description: "Curated silhouettes, delivered with intention.",
};

export default async function Home() {
  const images = await getHeroImages();
  const sections = [
    { id: "hero", labelKey: "nav.sections.hero" },
    { id: "collection", labelKey: "nav.sections.collection" },
    { id: "values", labelKey: "nav.sections.values" },
    { id: "checkout", labelKey: "nav.sections.checkout" },
  ];

  return (
    <main className="relative min-h-screen bg-transparent text-ink-strong">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" aria-hidden />
      <div className="flex min-h-screen flex-col">
        <NavBar sections={sections} />
        <section id="hero" className="flex flex-1 flex-col pt-6">
          <HeroCarousel images={images} />
        </section>
        <ProductShowcase products={products} />
        <BrandManifest />
        <CheckoutForm />
        <Footer />
      </div>
    </main>
  );
}
