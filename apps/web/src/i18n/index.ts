import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./constants";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import pt from "./locales/pt";
import type { TranslationBundle } from "./types";

export { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./constants";
export type { Locale } from "./constants";
export type { TranslationBundle } from "./types";

const translationTable: Record<Locale, TranslationBundle> = {
  en,
  pt,
  fr,
  es,
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && SUPPORTED_LOCALES.includes(value as Locale);
}

export function resolveLocale(value?: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getTranslations(locale: Locale): TranslationBundle {
  return translationTable[locale];
}

export function getLocalizedContent(value?: string) {
  const locale = resolveLocale(value);
  return { locale, strings: getTranslations(locale) };
}

export function nonDefaultLocales(): Locale[] {
  return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);
}
