// Controle na de build: werken alle interne links, staat noindex overal aan in preview,
// en welke [TODO …]-placeholders staan er nog per pagina? Gebruik: npm run check
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { BASE, PREVIEW } from '../site.config.mjs';
const dist = new URL('../dist/', import.meta.url).pathname;
function* walk(d) { for (const n of readdirSync(d)) { const f = join(d, n); if (statSync(f).isDirectory()) yield* walk(f); else if (n.endsWith('.html')) yield f; } }
let broken = 0, noRobots = 0; const todos = {};
for (const file of walk(dist)) {
  const page = '/' + relative(dist, file).replace(/index\.html$/, '');
  if (page.startsWith('/admin')) continue;
  const html = readFileSync(file, 'utf8');
  for (const [, url] of html.matchAll(/\s(?:href|src|poster|data-thanks|data-src-desktop|data-src-mobile)="(\/[^"#?]*)/g)) {
    if (url.startsWith('//')) continue;
    if (BASE && !url.startsWith(BASE + '/') && url !== BASE) { console.log(`ZONDER SUBMAP  ${page} → ${url}`); broken++; continue; }
    const p = join(dist, decodeURI(url.slice(BASE.length)));
    if (!existsSync(p) && !existsSync(join(p, 'index.html'))) { console.log(`KAPOTTE LINK   ${page} → ${url}`); broken++; }
  }
  if (PREVIEW && !/<meta name="robots" content="noindex/.test(html)) { console.log(`GEEN NOINDEX   ${page}`); noRobots++; }
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  const found = [...new Set([...text.matchAll(/\[TODO[^\]]*\]/g)].map((m) => m[0]))];
  if (found.length) todos[page] = found;
}
if (process.argv.includes('--todos')) for (const [p, t] of Object.entries(todos).sort()) console.log(`\n${p}\n` + t.map((x) => `  ${x}`).join('\n'));
console.log(`\ncheck: ${broken} kapotte links, ${noRobots} pagina's zonder noindex, ${Object.keys(todos).length} pagina's met TODO-placeholders (toon ze met: npm run check -- --todos)`);
process.exit(broken || noRobots ? 1 : 0);
