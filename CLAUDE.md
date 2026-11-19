# De Machinedokters Sverige (demachinedokters.se)

Zweedse site van De Machinedokters: Zweeds op `/`, Engels op `/en/`. Kopie van de opzet van `mdb668/demachinedokters-site` (www.demachinedokters.nl), apart onderhouden. Eigendom van MDB B.V., repo `mdb668/demachinedokters-se`.

**Status: besloten preview, NIET live.** Zie [LIVEGANG.md](LIVEGANG.md) voor wat er nodig is om live te gaan en [TODO.md](TODO.md) voor alle openstaande placeholders.

## De schakelaar preview / live
Eén waarde: `PREVIEW` in [site.config.mjs](site.config.mjs).
- `true`: noindex op elke pagina, `robots.txt` met `Disallow: /`, oranje previewlabel, gele markering van `[TODO …]`, site in de submap `/demachinedokters-se/` op `mdb668.github.io`.
- `false`: indexeerbaar op `https://demachinedokters.se`, AI-crawlers toegelaten, sitemap in robots.txt.

Zet nooit `public/CNAME` en wijzig geen DNS zolang Mike daar geen opdracht voor geeft.

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
- Niets verzinnen: geen cases, cijfers, klantnamen, reviews, certificeringen, reactietijden of prijzen die niet van Mike of Freek komen. Ontbrekende inhoud = `[TODO FREEK: …]`.
- Niet op deze site: NEN 3140/1010, klantlogo's, Nederlandse reviews, vacatures, Reboow, Alphen of Noord-Brabant.
- Nooit een gedachtestreepje gebruiken.

## Development
```
npm install
npm run dev        # http://localhost:4321, CMS lokaal: /admin/ → "Work with Local Repository"
npm run build      # bouwt naar dist/ (inclusief postbuild-stap)
npm run check      # controle van de build
```
