"use client";

import type { Product } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";
import { useTranslations } from "../providers/TranslationsProvider";

type ProductShowcaseProps = {
  products: Product[];
};

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const { t } = useTranslations();
  return (
    <section id="collection" className="mx-auto w-full max-w-6xl px-6 py-24">
      <header className="mb-12 text-center">
        <p className="font-display text-2xl uppercase tracking-[0.6em] text-ink-strong">
          {t("products.heading")}
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-ink-muted">
          {t("products.subheading")}
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
