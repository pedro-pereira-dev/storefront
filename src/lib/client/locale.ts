"use client";
import { SUPPORTED_LOCALES, type Locale } from "../locale";

export async function setActiveLocale(locale: Locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  const response = await fetch("/api/set-locale", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ locale }),
  });

  if (!response.ok) {
    throw new Error("Failed to update locale");
  }
}
