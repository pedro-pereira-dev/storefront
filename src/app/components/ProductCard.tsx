"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/data/products";
import { CartIcon } from "./icons/Cart";
import { useTranslations } from "../providers/TranslationsProvider";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslations();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <article className="flex flex-col gap-4 border border-white/5 bg-black/25 p-6">
      <div className="relative" ref={emblaRef}>
        <div className="flex overflow-hidden">
          {product.images.map((image, idx) => (
            <div key={`${product.id}-${idx}`} className="flex-[0_0_100%]">
              <img src={image} alt={t(product.nameKey)} className="h-64 w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {product.images.map((_, idx) => (
            <span
              key={`${product.id}-dot-${idx}`}
              className={`h-1 w-6 rounded-full ${idx === selectedIndex ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-display text-xl tracking-[0.2em] uppercase">{t(product.nameKey)}</p>
        <p className="text-sm uppercase tracking-[0.3em] text-ink-muted">{t(product.materialKey)}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm uppercase tracking-[0.4em] text-ink-muted">
          {t("products.priceLabel")}
          <span className="ml-2 text-ink-strong">{product.price}</span>
        </div>
        <button
          aria-label={t("products.cartAlt")}
          className="rounded-full border border-white/30 px-5 py-2 text-white/80 transition hover:bg-white/10"
          type="button"
        >
          <CartIcon />
        </button>
      </div>
    </article>
  );
}
