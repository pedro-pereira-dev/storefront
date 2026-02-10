"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/lib/locale";

type TranslationsContextValue = {
  locale: Locale;
  messages: Record<string, string>;
  t: (key: string) => string;
};

type TranslationsProviderProps = {
  locale: Locale;
  messages: Record<string, string>;
  children: React.ReactNode;
};

const TranslationsContext = createContext<TranslationsContextValue | null>(null);

export function TranslationsProvider({ locale, messages, children }: TranslationsProviderProps) {
  const value = useMemo<TranslationsContextValue>(() => {
    return {
      locale,
      messages,
      t: (key: string) => messages[key] ?? key,
    };
  }, [locale, messages]);

  return <TranslationsContext.Provider value={value}>{children}</TranslationsContext.Provider>;
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationsProvider");
  }
  return context;
}
