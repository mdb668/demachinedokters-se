# De Machinedokters Sverige (maskindoktorerna.se)

Zweedse site van De Machinedokters: Zweeds op `/`, Engels op `/en/`. Kopie van de opzet van `mdb668/demachinedokters-site` (www.demachinedokters.nl), apart onderhouden. Eigendom van MDB B.V., repo `mdb668/demachinedokters-se`.

**Status: live op https://maskindoktorerna.se** (besluit Mike, 24-11-2026). Zie [LIVEGANG.md](LIVEGANG.md) voor DNS en wat na livegang nog openstaat, en [TODO.md](TODO.md) voor openstaande punten. Wat live staat is direct zichtbaar voor bezoekers en Google: geen `[TODO …]` in zichtbare tekst zetten.

## De schakelaar preview / live
Eén waarde: `PREVIEW` in [site.config.mjs](site.config.mjs).
- `true`: noindex op elke pagina, `robots.txt` met `Disallow: /`, oranje previewlabel, gele markering van `[TODO …]`, site in de submap `/demachinedokters-se/` op `mdb668.github.io`.
- `false` (huidige stand): indexeerbaar op `https://maskindoktorerna.se`, AI-crawlers toegelaten, sitemap in robots.txt. Zonder Web3Forms-key wordt het contactformulier dan helemaal verborgen.

`public/CNAME` (`maskindoktorerna.se`) niet wijzigen of verwijderen, en geen DNS wijzigen zonder opdracht van Mike.

## Stack
- Astro, content in `src/content/<taal>/…` (Zod-schema's in `src/content.config.ts`, collecties heten `<naam>_<taal>`)
- Sveltia CMS op `/admin/`, zelf gehost; collecties per taal (🇸🇪 en 🇬🇧) in `public/admin/config.yml`
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)
- Formulier: Web3Forms, key in CMS-veld `formKey` (per taal). Zonder key is het formulier uitgeschakeld.
- `scripts/postbuild.mjs`: afsluitende slash op alle interne URL's, WebP, afmetingen van tekstafbeeldingen, en in preview de submap voor alle interne links. Niet verwijderen.
- `scripts/check.mjs` (`npm run check`): kapotte links, noindex in preview, overzicht van `[TODO …]` (`npm run check -- --todos`).

## Hoe de talen werken
- Routes per taal staan in `src/lib/i18n.ts` (`routes`). Paginasjablonen staan in `src/views/` en krijgen `lang` mee; de bestanden in `src/pages/` en `src/pages/en/` zijn dunne doorgeefluiken.
- Diensten, regio's en cases worden tussen de talen gekoppeld op **bestandsnaam** (bv. `06-retrofit.md` in `sv/` en `en/`). De URL komt uit het veld `slug`.
- Hreflang: `sv`, `en`, `x-default` (Zweeds) en `nl-NL` naar de overeenkomstige pagina op demachinedokters.nl (mapping in `src/lib/i18n.ts`). Aan de Nederlandse site wordt vanuit deze repo niets gewijzigd.
- In templates altijd logische paden gebruiken (`/kontakt/`, `/images/…`); volledige URL's via `abs()`.

## Inhoudsregels
- Zweedse bestanden hebben `review: "sv-native-check-nodig"` tot een moedertaalspreker ze heeft nagekeken.
- Merknaam op deze site is **Maskindoktorerna** (Zweeds en Engels, besluit Mike 25-11-2026), geleid door Freek. "De Machinedokters" alleen nog waar het over het Nederlandse moederbedrijf of het Nederlandse team gaat.
- De Zweedse vestiging is onderdeel van het Nederlandse moederbedrijf: veld `parentCompany` in de instellingen, getoond in de footer en op Företagsuppgifter met een link naar demachinedokters.nl. Geen juridische entiteit (zoals MDB B.V.) in die zin noemen: "en del av De Machinedokters i Nederländerna" is genoeg (voorstel Freek, 26-11-2026).
- Niets verzinnen: geen cases, cijfers, klantnamen, reviews, certificeringen, reactietijden of prijzen die niet van Mike of Freek komen. Ontbrekende inhoud = `[TODO FREEK: …]`.
- Niet op deze site: NEN 3140/1010, een klantlogowand, Nederlandse reviews, vacatures, Reboow, Alphen of Noord-Brabant.
- De Nederlandse cases staan er wel op, met klantnaam en cijfers (besluit Mike, 19-11-2026). Teamindeling: Team Sverige (Freek), Team Nederländerna (Mike, Ewan, Ymke).
- Instructie voor Freek: [FREEK.md](FREEK.md).
- Nooit een gedachtestreepje gebruiken.

## Development
```
npm install
npm run dev        # http://localhost:4321, CMS lokaal: /admin/ → "Work with Local Repository"
npm run build      # bouwt naar dist/ (inclusief postbuild-stap)
npm run check      # controle van de build
```
