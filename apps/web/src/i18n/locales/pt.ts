import type { TranslationBundle } from "../types";

const pt: TranslationBundle = {
  meta: {
    title: "Maison Atelier",
    description: "Atelie conceitual que cria interiores curados com precisao poetica.",
  },
  navbar: {
    leftLabel: "Menu",
    centerLabel: "Maison Atelier",
    rightLabel: "0 adicoes",
  },
  hero: {
    heading: "Maison Atelier",
    tagline: "Interiores curados para uma vida poetica.",
  },
  footer: {
    languagesLabel: "Idiomas",
    locales: [
      { code: "en", label: "EN" },
      { code: "pt", label: "PT" },
      { code: "fr", label: "FR" },
      { code: "es", label: "ES" },
    ],
  },
};

export default pt;
