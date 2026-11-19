// ─────────────────────────────────────────────────────────────────────────────
// DE SCHAKELAAR: preview of live.
//
//   PREVIEW = true   → besloten preview op de standaard GitHub Pages-URL:
//                      noindex op elke pagina, robots.txt met "Disallow: /",
//                      een oranje previewbalk bovenaan en alle links onder /demachinedokters-se/.
//   PREVIEW = false  → live op demachinedokters.se: indexeerbaar, AI-crawlers welkom,
//                      sitemap in robots.txt, canonical en hreflang op het eigen domein.
//
// Live gaan = deze ene waarde op false zetten (en public/CNAME + DNS regelen, zie LIVEGANG.md).
// ─────────────────────────────────────────────────────────────────────────────
export const PREVIEW = true;

export const LIVE_URL = 'https://demachinedokters.se';
export const PREVIEW_URL = 'https://mdb668.github.io';
export const PREVIEW_BASE = '/demachinedokters-se';

/** De Nederlandse zustersite (alleen voor hreflang, hier wordt niets aan gewijzigd). */
export const NL_URL = 'https://www.demachinedokters.nl';

export const SITE = PREVIEW ? PREVIEW_URL : LIVE_URL;
export const BASE = PREVIEW ? PREVIEW_BASE : '';
