"use client";

import { useTranslations } from "../providers/TranslationsProvider";

export function HeroStage() {
  const { t } = useTranslations();
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end gap-6 pb-16 text-center">
      <p className="text-sm uppercase tracking-[0.6em] text-ink-soft">{t("hero.caption")}</p>
      <button className="pointer-events-auto border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.6em] text-ink-strong">
        {t("hero.cta")}
      </button>
    </div>
  );
}
