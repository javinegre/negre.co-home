import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'middleware' }),
  integrations: [react()],
  trailingSlash: 'ignore',
  // Flat des.html/cv.html instead of des/index.html — prerendered pages are
  // served directly as static files (see index.ts), and a flat layout lets
  // express.static resolve /des -> des.html via `extensions: ['html']`
  // without the directory-style 301 redirect express.static would otherwise
  // add for an extensionless path that resolves to a directory.
  build: { format: 'file' },
});
