// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE, BASE } from './site.config.mjs';

// Tijdens `npm run dev` draait de site op / (zonder submap), zodat links lokaal gewoon werken.
// Bij een build voor de preview zet scripts/postbuild.mjs de submap voor alle interne links.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: !isDev && BASE ? BASE : undefined,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(tack|thank-you|admin|404)\/?$/.test(page),
      i18n: { defaultLocale: 'sv', locales: { sv: 'sv', en: 'en' } },
    }),
  ],
});
