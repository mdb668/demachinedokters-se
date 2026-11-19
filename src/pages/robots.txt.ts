import type { APIRoute } from 'astro';
import { PREVIEW } from '../../site.config.mjs';
import { abs } from '../lib/i18n';

// Preview: alles dicht. Live: zoekmachines en AI-assistenten welkom.
const AI_BOTS = ['Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot-Extended', 'CCBot'];
const rules = ['Allow: /', 'Disallow: /admin/', 'Disallow: /tack', 'Disallow: /en/thank-you'].join('\n');

export const GET: APIRoute = () => {
  const body = PREVIEW
    ? '# Besloten preview: niet indexeren.\nUser-agent: *\nDisallow: /\n'
    : `User-agent: *\n${rules}\n\n# Sökmotorer och AI-assistenter är välkomna (samma regler som ovan)\n${AI_BOTS.map((b) => `User-agent: ${b}`).join('\n')}\n${rules}\n\nSitemap: ${abs('/sitemap-index.xml')}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
