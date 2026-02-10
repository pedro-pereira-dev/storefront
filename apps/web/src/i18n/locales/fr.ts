import type { TranslationBundle } from "../types";

const fr: TranslationBundle = {
  meta: {
    title: "Maison Atelier",
    description: "Atelier conceptuel creant des interieurs choisis avec precision poetique.",
  },
  navbar: {
    leftLabel: "Menu",
    centerLabel: "Maison Atelier",
    rightLabel: "0 ajouts",
  },
  hero: {
    heading: "Maison Atelier",
    tagline: "Interieurs choisis pour une vie poetique.",
  },
  footer: {
    languagesLabel: "Langues",
    locales: [
      { code: "en", label: "EN" },
      { code: "pt", label: "PT" },
      { code: "fr", label: "FR" },
      { code: "es", label: "ES" },
    ],
  },
};

export default fr;
