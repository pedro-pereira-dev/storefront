"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/locale";
import { setActiveLocale } from "@/lib/client/locale";
import { useTranslations } from "../providers/TranslationsProvider";

type LanguageSwitcherProps = {
  onChange?: () => void;
};

const LANGUAGE_LABEL_KEYS: Record<string, string> = {
  en: "language.english",
  fr: "language.french",
};

export function LanguageSwitcher({ onChange }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { locale, t } = useTranslations();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(async () => {
      await setActiveLocale(nextLocale);
      router.refresh();
      onChange?.();
    });
  };

  return (
    <label className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-ink-muted">
      <span>{t("language.label")}</span>
      <select
        value={locale}
        onChange={handleChange}
        disabled={isPending}
        className="bg-transparent text-ink-strong focus:outline-none"
      >
        {SUPPORTED_LOCALES.map((code) => (
          <option key={code} className="bg-black text-ink-strong" value={code}>
            {t(LANGUAGE_LABEL_KEYS[code] ?? code)}
          </option>
        ))}
      </select>
    </label>
  );
}
