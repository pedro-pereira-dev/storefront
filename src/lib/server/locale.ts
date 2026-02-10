import "server-only";
import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getDefaultLocale, getLocaleCookieName, isSupportedLocale, type Locale } from "../locale";

async function loadMessages(locale: Locale) {
  const filePath = path.join(process.cwd(), "src", "locales", `${locale}.json`);
  const file = await readFile(filePath, "utf-8");
  return JSON.parse(file) as Record<string, string>;
}

export async function getActiveLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(getLocaleCookieName())?.value;
  if (stored && isSupportedLocale(stored)) {
    return stored;
  }
  return getDefaultLocale();
}

export async function getTranslations(locale?: Locale) {
  const resolvedLocale = locale ?? (await getActiveLocale());
  const defaultLocale = getDefaultLocale();
  const messages = await loadMessages(resolvedLocale);
  const fallback = resolvedLocale === defaultLocale ? {} : await loadMessages(defaultLocale);
  const merged = { ...fallback, ...messages };

  return {
    locale: resolvedLocale,
    messages: merged,
  };
}
