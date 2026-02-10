## Maison Atelier Landing Page

Single-page luxury storefront built with Next.js App Router, React, and Tailwind CSS. The hero carousel fills the viewport and pulls its imagery from a text file you can edit without changing code.

### Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Updating the hero carousel images

1. Open `public/data/hero-images.txt`.
2. Keep one image URL per line (remote URLs must be HTTPS).
3. Save the file and redeploy (or let Vercel rebuild). The page reads this file on the server for every request (cached for 60s via ISR).
4. Ensure each new domain is whitelisted in `next.config.ts` under `images.remotePatterns`.

If the list is empty or fails to load, a curated fallback image is displayed.

### Design notes
- Mobile-first layout with transparent, centered nav and immersive carousel.
- Typography uses `Cormorant Garamond` (display) + `Space Grotesk` (body).
- Carousel is dependency-free, supports touch swipes, keyboard controls, and hover-pause behavior.

### Localization
- Locale data lives in `src/locales/{locale}.json` (currently `en` and `fr`).
- Incoming requests resolve their locale via the `maison_locale` cookie (defaults to English). Use the `POST /api/set-locale` endpoint to update the cookie from client components (see `LanguageSwitcher`).
- Server components call `getTranslations()` from `src/lib/locale.ts`; client components read translations through the `TranslationsProvider`/`useTranslations()` hook (provider is mounted in `src/app/layout.tsx`).
- Add new strings to both locale JSON files and reference them via the translation key (e.g., `t("products.heading")`). Missing keys automatically fall back to the default locale.

### Brand overview
See `docs/brand-style.md` for the visual direction, palette, and copy tone that guided the current layout.

### Deployment
Deploy to Vercel with the default Next.js workflow:

```bash
npm run build
npm run start
```

Push to a GitHub repo and connect it to Vercel for automatic builds.
