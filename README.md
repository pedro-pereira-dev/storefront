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

### Deployment
Deploy to Vercel with the default Next.js workflow:

```bash
npm run build
npm run start
```

Push to a GitHub repo and connect it to Vercel for automatic builds.
