export const SUPPORTED_LOCALES = ["en", "pt", "fr", "es"] as const;
export const DEFAULT_LOCALE = "en";

export type Locale = (typeof SUPPORTED_LOCALES)[number];
