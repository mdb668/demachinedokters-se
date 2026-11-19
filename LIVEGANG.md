# Livegang demachinedokters.se

Zolang `PREVIEW = true` in `site.config.mjs` staat, is dit een besloten preview. Niets hieronder is al gedaan.

## 0. Eenmalig, voor de preview
1. Repo `mdb668/demachinedokters-se` (public; GitHub Pages op een privé-repo vereist Pro).
2. Settings → Pages → Source: **GitHub Actions**.
3. Push naar `main`: de workflow bouwt en publiceert op https://mdb668.github.io/demachinedokters-se/
4. Freek schrijfrechten geven: Settings → Collaborators → Add people (rol Write). Voor het CMS maakt Freek een eigen GitHub-token (fine-grained, alleen deze repo, Contents: Read and write) en logt in op `/admin/` met "Sign in with Token".

Let op: "besloten" betekent hier niet-vindbaar (noindex, robots.txt, geen links ernaartoe). Wie de URL kent, kan de preview zien, en de repo is openbaar.

## 1. Inhoud af
- Alle `[TODO …]` weg: `npm run build && npm run check -- --todos` moet een lege lijst geven (zie TODO.md).
- Zweedse teksten nagekeken door een moedertaalspreker; daarna `review` leegmaken.
- Allmänna villkor en integritetspolicy definitief (bedrijfsgegevens, Zweedse jurist).
- Web3Forms: nieuwe access key op het Zweedse formulieradres, invullen in CMS → Instellingen (beide talen) en een testbericht sturen.

## 2. Techniek omzetten
1. `site.config.mjs`: `PREVIEW = false`.
2. `public/CNAME` aanmaken met één regel: `demachinedokters.se`
3. `public/admin/config.yml`: `site_url`, `display_url` en `logo_url` naar `https://demachinedokters.se`.
4. Push, daarna Settings → Pages → Custom domain `demachinedokters.se`, en na het certificaat "Enforce HTTPS" aanzetten.

## 3. DNS demachinedokters.se (hoofdsite, GitHub Pages)
| Type | Naam | Waarde |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | mdb668.github.io |

- Bij Cloudflare: records op "DNS only" (grijze wolk) tot het GitHub-certificaat is uitgegeven.
- `www.demachinedokters.se` verwijst GitHub dan vanzelf door naar `demachinedokters.se`.
- Domein verifiëren in GitHub (Settings van het account → Pages → Add a domain, TXT-record `_github-pages-challenge-mdb668`), zodat niemand anders het domein kan claimen.
- Mail: als er adressen op @demachinedokters.se komen, MX, SPF, DKIM en DMARC apart instellen. Komt er geen mail, zet dan `v=spf1 -all` en een DMARC-record met `p=reject` tegen misbruik.

## 4. DNS demachinedokters.eu (doorverwijzing naar demachinedokters.se/en/)
GitHub Pages kan geen tweede domein doorverwijzen. Doe dit bij de DNS-aanbieder:
- Cloudflare: A-record `@` naar `192.0.2.1` en CNAME `www` naar `demachinedokters.eu`, beide proxied (oranje wolk), plus een Redirect Rule: alle verzoeken naar `https://demachinedokters.se/en/`, status 301.
- Of de doorverwijsfunctie van de registrar (301, niet "frame" of "masking").

## 5. Zoekmachines
- Google Search Console: domeinproperty `demachinedokters.se` (TXT-verificatie), sitemap `https://demachinedokters.se/sitemap-index.xml` indienen, een paar pagina's ter indexering aanbieden.
- Bing Webmaster Tools: importeren uit Search Console.
- Controleren na livegang: geen `noindex` meer in de broncode, `https://demachinedokters.se/robots.txt` staat AI-crawlers toe, `https://demachinedokters.se/llms.txt` zonder previewwaarschuwing.
- Hreflang is pas volledig geldig als de Nederlandse site terugverwijst (`sv` en `en` op demachinedokters.nl). Dat is een aparte wijziging in `demachinedokters-site`, alleen op verzoek van Mike.
- Google Bedrijfsprofiel voor Zweden: pas als het adres vaststaat.

## 6. Nog te beslissen
- Bezoekersstatistieken: de Cloudflare Web Analytics-code van de Nederlandse site is bewust niet meegenomen. Wil je statistieken, maak dan een eigen token voor demachinedokters.se en werk de integritetspolicy bij.
- Wekelijkse AI-check als pull request: instellen zodra de repo bestaat (zelfde routine als bij de Nederlandse site, gericht op deze repo).
