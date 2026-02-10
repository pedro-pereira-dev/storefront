# Storefront Monorepo

This Turborepo workspace uses pnpm, Oxlint, and Prettier to manage a growing collection of apps. The initial package is an Astro single-page site located in `apps/web`.

## Structure

- `apps/web` – Astro storefront landing page
- `turbo.json` – shared pipelines for dev, build, lint, format
- `pnpm-workspace.yaml` – package discovery for apps and libraries
- `oxlint.json`, `.prettierrc.json` – repo-wide linting and formatting configs

## Commands

- `pnpm install` – install dependencies
- `pnpm dev` – run `astro dev` via Turborepo pipelines
- `pnpm build` – build all packages
- `pnpm lint` – run Oxlint through Turbo
- `pnpm format` – run Prettier check across the workspace

### App-specific

Run commands for the Astro web app only:

```bash
pnpm dev --filter web
pnpm build --filter web
pnpm lint --filter web
```

## Next Steps

1. Add more applications under `apps/` or shared libraries under `packages/`.
2. Configure CI to run `pnpm lint` and `pnpm build`.
3. Introduce shared UI or API packages when needed.
