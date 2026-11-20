# Openstaande placeholders

Instructie voor Freek om dit zelf in te vullen: [FREEK.md](FREEK.md).

Actuele lijst per pagina: `npm run build && npm run check -- --todos`. In de preview zijn alle placeholders geel gemarkeerd.
Invullen kan in het CMS (`/admin/`); waar het veld staat, staat erachter.

## Op elke pagina (footer, contactblok, mobiele balk)
Ingevuld 20-11-2026 (besluit Freek): telefoon, e-mail info@maskindoktorerna.se (mail nog niet actief), adres, bereikbaarheid. Bedrijfsgegevens op Factory Freaks (enskild firma), org.nr, momsnummer, F-skatt. Nog open: tekst contactpersoon.
CMS → 🇸🇪/🇬🇧 Instellingen → Website-instellingen (in beide talen invullen)
- `[TODO FREEK: telefonnummer]` (veld Telefoonnummer + de link `tel:+46…`)
- `[TODO FREEK: e-postadress]`
- `[TODO FREEK: gatuadress]` en `[TODO FREEK: postnummer och ort]`
- Contactblok "Din kontakt: Freek": `[TODO FREEK: två meningar om dig själv och din bakgrund]`, telefoon, e-mail. Foto: nu de teamfoto van de Nederlandse site, vervangen als Freek een andere wil.
- Social media: leeg gelaten (de Nederlandse accounts heten nog Reboow). Toevoegen als er Zweedse of algemene accounts zijn.

## Kontakt (`/kontakt/`, `/en/contact/`)
- `[TODO FREEK: Web3Forms-nyckel]`: het formulier is uitgeschakeld tot de key is ingevuld (Instellingen → Web3Forms access key), plus het adres waar berichten naartoe gaan.
- `[TODO FREEK: öppettider]`

## Företagsuppgifter (`/foretagsuppgifter/`, `/en/company-details/`)
- `[TODO: bedrijfsgegevens na afspraak MDB/Freek]` (juridische naam)
- `[TODO FREEK: org.nr]`, `[TODO FREEK: momsregistreringsnummer]`, `[TODO FREEK: F-skatt, godkänd ja/nej]`

## Juridisch
- Allmänna villkor (`/allmanna-villkor/`, `/en/terms/`): `[TODO: bedrijfsgegevens na afspraak MDB/Freek]` en `[TODO: allmänna villkor enligt svensk rätt …]`. De Nederlandse voorwaarden zijn niet gekopieerd.
- Integritetspolicy (`/integritetspolicy/`, `/en/privacy-policy/`): `[TODO: bedrijfsgegevens na afspraak MDB/Freek]` (personuppgiftsansvarig), `[TODO: rättslig grund, lagringstid och personuppgiftsbiträden …]`, `[TODO: uppdatera detta avsnitt om besöksstatistik läggs till]`, `[TODO FREEK: e-postadress]`.

## Case (`/case/`, `/en/cases/`)
- De Nederlandse cases staan erop, met klantnaam (besluit Mike). WVS staat net als op de NL-site op "niet gepubliceerd".
- `[TODO FREEK: S5-case]`: concept staat klaar in het CMS (🇸🇪/🇬🇧 Cases, "Gepubliceerd" staat uit) met een placeholder per veld.

## Om oss (`/om-oss/`, `/en/about/`)
- `[TODO FREEK: kort text om etableringen i Sverige: varför, sedan när och varifrån ni utgår]`
- Team: Team Sverige (Freek) en Team Nederländerna (Mike, Ewan, Ymke).

## CE-märkning (`/tjanster/ce-markning-maskinsakerhet/`, `/en/services/ce-marking-machine-safety/`)
- `[TODO FREEK: bekräfta exakt vilka CE-tjänster som erbjuds i Sverige …]`
- `[TODO FREEK: bekräfta arbetssättet …]`
- `[TODO FREEK: pris för Sverige]`

## Regiopagina's (`/omraden/orebro-lan/`, `/omraden/varmland/`, `/omraden/vastmanland/` en de Engelse versies)
- `[TODO FREEK: lokal förankring i <län> …]`: uitvalsbasis, plaatsen, lokale cases of referenties.

## Diensten: prijzen en doorlooptijden
De Nederlandse europrijzen, levertijden en reactietijden zijn niet overgenomen.
- Specialmaskiner: `[TODO FREEK: pris för Sverige]` (2x), `[TODO FREEK: ledtid för Sverige]` (2x)
- Retrofit: `[TODO FREEK: ledtid för Sverige]` (2x: FAQ en stap 4)
- Robotisering: `[TODO FREEK: pris för Sverige]` (2x), `[TODO FREEK: ledtid för Sverige]` (4x)
- Vanliga frågor: vraag 3 en vraag 10 (`[TODO FREEK: ledtid för Sverige]`, reactietijd bij storing)

## Inhoudelijke punten ter bevestiging (geen placeholder, wel nakijken)
- Felanalys: de FAQ noemt een storingsdienst ("eerst weer draaien, daarna de oorzaak"). Geldt dat ook in Zweden?
- Specialmaskiner: "eerste bezoek gratis" en "bouwen en testen in onze eigen werkplaats" (die staat in Nederland).
- Retrofit: het aanbod "eerst één dag repareren, verrekend bij een grotere upgrade".
- Stöd till underhållsavdelningen: "minimaal zo'n 300 uur, drie dagen per week gedurende drie maanden".
- Robotisering: specificaties van de cobot-palletiseerder en "TÜV-godkänd" zijn overgenomen van de Nederlandse site; Rokae is weggelaten.
- Vanliga frågor 19: "10 tot 50% betere uptime"; vraag 21: partners in de metaalbewerking.
- Homepage: de voorbeelden met Coca-Cola en het voedingsbedrijf zijn overgenomen van de NL-site.
- Hero-video en foto's komen van de Nederlandse site.

## Alle Zweedse teksten
Elke Zweedse pagina heeft `review: "sv-native-check-nodig"`. Laat een moedertaalspreker ze nakijken en maak het veld daarna leeg.
