import { getCollection, getEntry } from 'astro:content';
import { SITE, NL_URL, PREVIEW } from '../../site.config.mjs';

export type Lang = 'sv' | 'en';
export const LANGS: Lang[] = ['sv', 'en'];
export const DEFAULT_LANG: Lang = 'sv';
export { PREVIEW };

/** Vaste pagina's: logisch pad per taal (zonder submap; die komt er bij de build vanzelf voor). */
export const routes = {
  home: { sv: '/', en: '/en/' },
  services: { sv: '/tjanster/', en: '/en/services/' },
  cases: { sv: '/case/', en: '/en/cases/' },
  regions: { sv: '/omraden/', en: '/en/areas/' },
  faq: { sv: '/vanliga-fragor/', en: '/en/faq/' },
  about: { sv: '/om-oss/', en: '/en/about/' },
  contact: { sv: '/kontakt/', en: '/en/contact/' },
  thanks: { sv: '/tack/', en: '/en/thank-you/' },
  terms: { sv: '/allmanna-villkor/', en: '/en/terms/' },
  privacy: { sv: '/integritetspolicy/', en: '/en/privacy-policy/' },
  company: { sv: '/foretagsuppgifter/', en: '/en/company-details/' },
} as const;
export type RouteKey = keyof typeof routes;

/** Overeenkomstige pagina op de Nederlandse site (voor hreflang nl-NL). Geen tegenhanger = geen nl-verwijzing. */
const nlRoutes: Partial<Record<RouteKey, string>> = {
  home: '/', services: '/diensten/', cases: '/cases/', faq: '/veelgestelde-vragen/', about: '/over-ons/', contact: '/contact/',
};
/** Diensten: bestandsnaam → slug op de Nederlandse site. */
const nlServiceSlugs: Record<string, string> = {
  '01-procesoptimalisatie': 'procesoptimalisatie-automatisering',
  '02-onderhoud': 'onderhoud-storingsanalyse',
  '03-software-integratie': 'software-integratie',
  '04-training': 'training-ondersteuning',
  '05-speciaalmachines': 'speciaalmachines',
  '06-retrofit': 'retrofit',
  '07-robotisering': 'robotisering',
  '08-technische-dienst-ondersteunen': 'technische-dienst-ondersteunen',
};

export const path = (lang: Lang, key: RouteKey) => routes[key][lang];
export const nlUrl = (key: RouteKey) => (nlRoutes[key] ? NL_URL + nlRoutes[key] : undefined);
export const nlServiceUrl = (fileKey: string) => (nlServiceSlugs[fileKey] ? `${NL_URL}/diensten/${nlServiceSlugs[fileKey]}/` : undefined);

/** Submap van de site ('' op het eigen domein, '/demachinedokters-se' in de preview-build). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Volledige URL van een logisch pad, inclusief submap. */
export const abs = (p: string) => SITE + base + (p.startsWith('/') ? p : `/${p}`);
/** Logisch pad van de huidige pagina (zonder submap, met afsluitende slash). */
export function logicalPath(pathname: string): string {
  let p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  return p.endsWith('/') ? p : `${p}/`;
}

/** Inhoud per taal: collecties heten `<naam>_<taal>` (zie src/content.config.ts). */
export const coll = (lang: Lang, name: string, filter?: (e: any) => boolean) =>
  getCollection(`${name}_${lang}` as any, filter as any) as Promise<any[]>;
export const entry = async (lang: Lang, name: string, id: string) => (await getEntry(`${name}_${lang}` as any, id)) as any;
export const siteOf = async (lang: Lang) => (await entry(lang, 'settings', 'site')).data;
export const uiOf = async (lang: Lang) => (await entry(lang, 'pages', 'ui')).data;
export const pageOf = async (lang: Lang, id: string) => (await entry(lang, 'pages', id)).data;

/** Bestandsnaam zonder extensie: koppelt dezelfde pagina in beide talen aan elkaar (hreflang, taalwissel). */
export const fileKey = (e: { filePath?: string; id: string }) => (e.filePath ?? e.id).split('/').pop()!.replace(/\.(md|json)$/, '');
export const byOrder = (a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0);

export const slugOf = (e: any): string => e.data.slug ?? fileKey(e).replace(/^\d+-/, '');
export const servicePath = (lang: Lang, e: any) => `${routes.services[lang]}${slugOf(e)}/`;
export const casePath = (lang: Lang, e: any) => `${routes.cases[lang]}${slugOf(e)}/`;
export const regionPath = (lang: Lang, e: any) => `${routes.regions[lang]}${slugOf(e)}/`;

/** Paden van dezelfde inhoud in alle talen, gekoppeld op bestandsnaam. */
export async function alternatesFor(name: 'services' | 'cases' | 'regions', e: any, filter?: (x: any) => boolean) {
  const key = fileKey(e);
  const make = { services: servicePath, cases: casePath, regions: regionPath }[name];
  const out: Partial<Record<Lang, string>> = {};
  for (const l of LANGS) {
    const match = (await coll(l, name, filter)).find((x) => fileKey(x) === key);
    if (match) out[l] = make(l, match);
  }
  return out;
}

/** Ontbrekende gegevens staan als "[TODO ...]" in de inhoud; daar maken we geen link van. */
export const isTodo = (v?: string) => !v || v.includes('[TODO');
