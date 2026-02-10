"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo, useState } from "react";
import type { HeroImage } from "@/lib/getHeroImages";
import { HeroStage } from "./HeroStage";

type HeroCarouselProps = {
  images: HeroImage[];
};

export function HeroCarousel({ images }: HeroCarouselProps) {
  const autoplay = useMemo(() => Autoplay({ delay: 7000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [autoplay]);
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
    <section className="relative flex flex-1" aria-label="hero-carousel">
      <div className="relative flex-1" ref={emblaRef}>
        <div className="flex h-[80vh] min-h-[520px]">
          {images.map((image) => (
            <figure key={image.id} className="embla__slide relative flex-[0_0_100%]">
              <div className="flex h-full w-full flex-col bg-black">
                <div className="h-8 w-full bg-black" />
                <div className="relative flex-1 bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-contain object-center sm:object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                </div>
                <div className="h-8 w-full bg-black" />
              </div>
            </figure>
          ))}
        </div>
        <HeroStage />
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex items-center justify-center gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`pointer-events-auto h-2 w-2 rounded-full border transition ${
                idx === selectedIndex ? "border-white/90 bg-white" : "border-white/30 bg-transparent"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => emblaApi?.scrollTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
