import type { TranslationBundle } from "../types";

const es: TranslationBundle = {
  meta: {
    title: "Maison Atelier",
    description: "Estudio conceptual que crea interiores curados con precision poetica.",
  },
  navbar: {
    leftLabel: "Menu",
    centerLabel: "Maison Atelier",
    rightLabel: "0 anadidos",
  },
  hero: {
    heading: "Maison Atelier",
    tagline: "Interiores curados para una vida poetica.",
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

export default es;
