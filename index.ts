import { Express, NextFunction, Request, RequestHandler, Response } from 'express';

const express = require('express');
const path = require('path');

const app: Express = express();
const distClient = path.join(__dirname, 'dist/client');

// Normalize /des/, /cv/ etc. to their trailing-slash-less form. Prerendered
// pages only exist as flat des.html/cv.html (see astro.config.mjs), which
// `extensions: ['html']` below only resolves for the exact extension-less
// path — the trailing-slash form falls through to the Astro handler, which
// can't render a prerendered page's route on demand.
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path !== '/' && req.path.endsWith('/')) {
    res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));
    return;
  }
  next();
});

// express.static below only serves GET/HEAD; any other method (bots/scanners
// POSTing to / are routine background noise) falls through to the Astro
// handler, which can't SSR-render a prerendered-only route and throws
// FailedToFindPageMapSSR. Short-circuit those here instead.
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.status(404).sendFile(path.join(distClient, '404.html'));
    return;
  }
  next();
});

// `extensions: ['html']` resolves extension-less routes like /des or /cv to
// their prerendered des.html/cv.html directly (see astro.config.mjs's
// build.format: 'file') so express.static serves them at 200 without a
// directory-style redirect. Prerendered pages have no SSR render function
// in the server build, so they must be served as static files here rather
// than falling through to the Astro handler below.
app.use(express.static(distClient, { extensions: ['html'] }));

// dist/server/entry.mjs is an ESM build output from `astro build`; it can't be
// require()'d from this CommonJS entry point, so it's loaded via a dynamic
// import() and requests are queued until it resolves (near-instant, on boot).
let astroHandler: RequestHandler | undefined;
const astroHandlerReady: Promise<void> = import('./dist/server/entry.mjs').then(
  (mod: { handler: RequestHandler }) => {
    astroHandler = mod.handler;
  },
);

app.use((req: Request, res: Response, next: NextFunction) => {
  if (astroHandler) {
    astroHandler(req, res, next);
  } else {
    astroHandlerReady.then(() => astroHandler?.(req, res, next));
  }
});

// The Astro node handler calls next() for routes it doesn't own (see
// @astrojs/node's serve-app.js) instead of rendering 404.astro itself, so
// the catch-all 404 stays explicit here, same as the pre-migration app.
app.use((req: Request, res: Response) => {
  res.status(404).sendFile(path.join(distClient, '404.html'));
});

module.exports = app;
