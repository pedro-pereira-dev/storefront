# Web App

This Astro single-page experience promotes the Storefront Turborepo setup. Extend it by adding sections or new pages inside `src/pages`.

## Commands

- `pnpm dev --filter web` – start the local dev server
- `pnpm build --filter web` – build for production
- `pnpm lint --filter web` – run workspace linting scoped to this app

## Structure

- `src/pages/index.astro` – landing page copy and layout
- `public/` – static assets served as-is

## Notes

- Styling is inline within `index.astro` for the hero section. Extract to components or shared styles as the app grows.
