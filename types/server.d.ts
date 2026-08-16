declare module '*/dist/server/entry.mjs' {
  import type { RequestHandler } from 'express';

  export const handler: RequestHandler;
}
