"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import type { HeroImage } from "@/lib/getHeroImages";

type HeroCarouselProps = {
  images: HeroImage[];
  intervalMs?: number;
};

const AUTO_ADVANCE_MS = 7000;

export default function HeroCarousel({
  images,
  intervalMs = AUTO_ADVANCE_MS,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slides = images.length > 0 ? images : [];

  const goTo = useCallback((nextIndex: number) => {
    setIndex((prev) => {
      if (slides.length === 0) return prev;
      const normalized = (nextIndex + slides.length) % slides.length;
      return normalized;
    });
  }, [slides.length]);

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  useEffect(() => {
    if (slides.length <= 1) return;
    timer.current = setTimeout(goNext, intervalMs);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [goNext, index, intervalMs, slides.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let isDragging = false;

    const onPointerDown = (event: PointerEvent) => {
      isDragging = true;
      startX = event.clientX;
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const diff = event.clientX - startX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goPrev();
        } else {
          goNext();
        }
        isDragging = false;
        el.releasePointerCapture(event.pointerId);
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      el.releasePointerCapture(event.pointerId);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [goNext, goPrev]);

  const ariaLabel = useMemo(() => {
    if (slides.length === 0) {
      return "No imagery available";
    }
    return `Showing look ${index + 1} of ${slides.length}`;
  }, [index, slides.length]);

  const handleKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      goNext();
    }
    if (event.key === "ArrowLeft") {
      goPrev();
    }
  };

  const handleManualSelect = (
    event: MouseEvent<HTMLButtonElement>,
    targetIndex: number,
  ) => {
    event.preventDefault();
    goTo(targetIndex);
  };

  return (
    <div className="relative flex flex-1 select-none" aria-live="polite">
      <div
        ref={containerRef}
        className="group relative flex h-[80vh] min-h-[520px] flex-1 overflow-hidden rounded-none sm:rounded-[2.5rem]"
        aria-label={ariaLabel}
        role="region"
        tabIndex={0}
        onKeyDown={handleKey}
      >
        {slides.map((image, idx) => {
          const isActive = idx === index;
          return (
            <figure
              key={image.id}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 900ms ease, transform 1200ms ease",
                transform: `scale(${isActive ? 1 : 1.05})`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
                loading={idx === 0 ? "eager" : "lazy"}
                draggable={false}
              />
              <figcaption className="sr-only">{image.alt}</figcaption>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
            </figure>
          );
        })}

        {slides.length > 1 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-10 flex items-center justify-center gap-2 px-4">
            {slides.map((slide, dotIdx) => (
              <button
                key={slide.id}
                className={`h-2 w-10 rounded-full transition ${
                  dotIdx === index ? "bg-white/90" : "bg-white/30"
                }`}
                onClick={(event) => handleManualSelect(event, dotIdx)}
                aria-label={`Go to look ${dotIdx + 1}`}
                aria-current={dotIdx === index}
                type="button"
              />
            ))}
          </div>
        )}

        {slides.length > 1 && (
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-6 sm:flex">
            <button
              className="pointer-events-auto h-12 w-12 rounded-full border border-white/40 bg-black/40 text-white/80 transition hover:bg-black/70"
              onClick={(event) => {
                event.preventDefault();
                goPrev();
              }}
              aria-label="Previous look"
              type="button"
            >
              &larr;
            </button>
            <button
              className="pointer-events-auto h-12 w-12 rounded-full border border-white/40 bg-black/40 text-white/80 transition hover:bg-black/70"
              onClick={(event) => {
                event.preventDefault();
                goNext();
              }}
              aria-label="Next look"
              type="button"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
