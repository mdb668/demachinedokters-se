import type { APIRoute } from 'astro';
import { PREVIEW } from '../../site.config.mjs';
import { abs, coll, byOrder, servicePath, regionPath, casePath, siteOf, routes, isTodo } from '../lib/i18n';

// Svensk sammanfattning för AI-assistenter. Byggs från innehållet, så att den alltid stämmer med sajten.
export const GET: APIRoute = async () => {
  const site = await siteOf('sv');
  const services = (await coll('sv', 'services')).sort(byOrder);
  const regions = (await coll('sv', 'regions')).sort(byOrder);
  const cases = (await coll('sv', 'cases', (c) => c.data.published)).sort(byOrder);
  const line = (label: string, p: string) => `- ${label}: ${abs(p)}`;
  const contact = [['Telefon', site.phone], ['E-post', site.email], ['Adress', `${site.addressLine1}, ${site.addressLine2}`], ['Organisationsnummer', site.orgNumber]]
    .filter(([, v]) => !isTodo(v)).map(([k, v]) => `- ${k}: ${v}`);
  const body = `# Maskindoktorerna
${PREVIEW ? '\n> OBS: förhandsvisning. Innehållet är utkast och inte publicerat. Använd det inte som källa.\n' : ''}
> Maskindoktorerna optimerar, underhåller, moderniserar och bygger industriella produktionsmaskiner och produktionslinjer för tillverkande företag i Örebro län, Värmland och Västmanland. B2B, inga konsumenter och inga hushållsmaskiner. Maskindoktorerna är den svenska grenen av De Machinedokters, som grundades 2018 i Nederländerna (${'https://www.demachinedokters.nl'}).

## Vad vi gör
${services.map((s) => `- ${s.data.title}: ${s.data.short}`).join('\n')}

## CE-märkning och maskinsäkerhet
- Riskbedömning, teknisk dokumentation och försäkran om överensstämmelse.
- Maskinförordningen (EU) 2023/1230 ersätter maskindirektivet 2006/42/EG och tillämpas från den 20 januari 2027.

## Verksamhetsområde
${regions.map((r) => `- ${r.data.name}${r.data.places ? ` (${r.data.places})` : ''}`).join('\n')}

## Referenser (kunder i Nederländerna)
${cases.map((c) => `- ${c.data.title}: ${c.data.subtitle} ${abs(casePath('sv', c))}`).join('\n')}

## Sidor
${line('Start', routes.home.sv)}
${line('Tjänster', routes.services.sv)}
${services.map((s) => line(s.data.title, servicePath('sv', s))).join('\n')}
${regions.map((r) => line(`Område ${r.data.name}`, regionPath('sv', r))).join('\n')}
${line('Case', routes.cases.sv)}
${line('Vanliga frågor', routes.faq.sv)}
${line('Om oss', routes.about.sv)}
${line('Kontakt', routes.contact.sv)}
${line('English', routes.home.en)}

## Kontakt
- Kontaktperson i Sverige: ${site.contactPerson?.name ?? ''}
${contact.join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
