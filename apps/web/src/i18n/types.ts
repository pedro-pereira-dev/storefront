export type TranslationBundle = {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    leftLabel: string;
    centerLabel: string;
    rightLabel: string;
  };
  hero: {
    heading: string;
    tagline: string;
  };
  footer: {
    languagesLabel: string;
    locales: FooterLocale[];
  };
};
