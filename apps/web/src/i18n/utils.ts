import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./constants";

export function nonDefaultLocales(): Locale[] {
  return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);
}
