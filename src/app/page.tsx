import type { Metadata } from "next";
import { getHeroImages } from "@/lib/getHeroImages";
import HeroCarousel from "./components/HeroCarousel";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Maison Atelier",
  description: "Curated silhouettes, delivered with intention.",
};

export default async function Home() {
  const images = await getHeroImages();

  return (
    <main className="relative min-h-screen bg-transparent text-ink-strong">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" aria-hidden />
      <header className="pointer-events-none fixed inset-x-0 top-0 z-10 flex justify-center px-4 pb-4 pt-6 sm:px-6">
        <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/25 px-6 py-3 backdrop-blur">
          <span className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-ink-muted sm:block">
            Maison Atelier
          </span>
          <p className="font-display text-xs uppercase tracking-[0.55em] text-ink-strong md:text-sm">
            Maison Atelier
          </p>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-ink-muted sm:block">
            Depuis MMXXVI
          </span>
        </div>
      </header>
      <div className="flex min-h-screen flex-col">
        <section className="flex flex-1 flex-col">
          <HeroCarousel images={images} />
        </section>
      </div>
    </main>
  );
}
