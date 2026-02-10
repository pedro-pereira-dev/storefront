"use client";

import { useTranslations } from "../providers/TranslationsProvider";

export function BrandManifest() {
  const { t } = useTranslations();
  return (
    <section id="values" className="mx-auto w-full max-w-4xl px-6 py-24 text-center">
      <div className="space-y-6 border border-white/10 bg-black/30 px-10 py-12">
        <h2 className="font-display text-2xl uppercase tracking-[0.5em] text-ink-strong">
          {t("brand.manifest.title")}
        </h2>
        <p className="text-sm leading-relaxed text-ink-soft">
          {t("brand.manifest.body")}
        </p>
      </div>
    </section>
  );
}
