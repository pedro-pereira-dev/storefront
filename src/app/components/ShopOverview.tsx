"use client";

import { useTranslations } from "../providers/TranslationsProvider";

export function ShopOverview() {
  const { t } = useTranslations();
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-ink-muted">{t("shop.overview.title")}</p>
      <p className="mt-4 text-base text-ink-soft">{t("shop.overview.body")}</p>
    </section>
  );
}
