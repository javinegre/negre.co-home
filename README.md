# negre.co home

Renders `/`, `/des`, `/cv` and the site's 404 page for [negre.co](https://negre.co).
Built with [Astro](https://astro.build) (React islands for the animated logo,
the CV chart, and the 404 spotlight effect).

## Architecture

This repo isn't a standalone deployed app. It's mounted as Express middleware
by the sibling [`negre.co-server`](../../README.md) gateway repo:

```
negre.co-server/server.ts:
  const HomeApp = require('./apps/home/index');
  app.use('/', HomeApp);
```

`index.ts` is a thin CommonJS wrapper: it serves `dist/client` as static
files and bridges to the Astro build's ESM request handler
(`dist/server/entry.mjs`) via a dynamic `import()`, since that file can't be
`require()`'d directly from a CommonJS entry point.

All pages are currently `export const prerender = true` — fully static,
same behavior/performance as the old webpack build. The app runs in
`output: 'server'` mode with the `@astrojs/node` adapter (`middleware`
mode) specifically so that any future page can opt into real SSR (e.g. a
contact form, CMS-backed content) by dropping that line, with no
infrastructure change required.

## Commands

```
yarn dev        # astro dev
yarn build      # astro build -> dist/client (static assets + prerendered HTML) and dist/server (SSR handler)
yarn typecheck  # astro check && tsc --noEmit -p tsconfig.server.json
yarn lint       # eslint .
```

## Deploying

`deploy.sh` builds this app and then reloads the parent gateway process
(`pm2 reload` in `negre.co-server`). That reload step is required: unlike
the old static build (which the gateway re-read from disk per request),
`dist/server/entry.mjs` is `require()`d once into the gateway's long-running
process, so a content-only deploy needs the process reloaded to pick it up.

## Routes

| Route   | Source                | Notes                                   |
| ------- | ---------------------- | ---------------------------------------- |
| `/`     | `src/pages/index.astro` | Home page, animated logo                 |
| `/des`  | `src/pages/des.astro`   | Same content as `/`, shares `HomeContent.astro` |
| `/cv`   | `src/pages/cv.astro`    | CV, with a D3 language-usage chart       |
| 404     | `src/pages/404.astro`   | Custom animated 404, served explicitly by `index.ts` |
