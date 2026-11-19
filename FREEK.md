# Instructie voor Freek: de Zweedse site van De Machinedokters

Hoi Freek,

De Zweedse site staat klaar als **besloten preview**:
https://mdb668.github.io/demachinedokters-se/ (Engels: `/en/`)

De site is nog niet vindbaar in Google en staat niet op demachinedokters.se. Alles wat nog van jou moet komen, is op de preview **geel gemarkeerd** met `[TODO FREEK: …]`. Deze instructie legt uit hoe je dat zelf invult.

## 1. Eenmalig: toegang regelen

1. Maak een gratis account op https://github.com/signup als je dat nog niet hebt.
2. Stuur je GitHub-gebruikersnaam naar Mike.
3. Mike geeft je volledige rechten (rol **Admin**) op de repository `mdb668/demachinedokters-se`. Je krijgt een uitnodiging per mail; klik op **Accept invitation**.
4. Maak een sleutel aan voor het CMS:
   - Ga naar https://github.com/settings/personal-access-tokens/new
   - Naam: `CMS demachinedokters-se`, looptijd naar keuze (bijvoorbeeld 1 jaar)
   - Resource owner: `mdb668`. Kies bij **Repository access** "Only select repositories" en selecteer `demachinedokters-se`
   - **Permissions → Contents: Read and write**
   - Klik op **Generate token** en kopieer de sleutel. Je ziet hem maar één keer; bewaar hem in je wachtwoordmanager.

## 2. Teksten aanpassen in het CMS

1. Ga naar https://mdb668.github.io/demachinedokters-se/admin/
2. Kies **Sign in with Token** en plak je sleutel.
3. Links zie je alles per taal: 🇸🇪 is de Zweedse site (de hoofdtaal), 🇬🇧 de Engelse. Vul altijd **beide talen** in.
4. Klik na een wijziging op **Save**. De site wordt binnen ongeveer twee minuten opnieuw gebouwd; ververs daarna de preview.

## 3. Wat er van jou nodig is

### Contactgegevens (op elke pagina)
🇸🇪 en 🇬🇧 **Instellingen → Website-instellingen**:
- Telefoonnummer. Vul ook het veld **Telefoonnummer (link)** in, bijvoorbeeld `tel:+46701234567`. Pas dan verschijnt de bel-knop.
- E-mailadres, adres (twee regels) en openingstijden
- **Contactpersoon**: twee zinnen over jezelf, je telefoon en je e-mail. Wil je een andere foto dan je teamfoto van de Nederlandse site, upload die dan hier.

### Bedrijfsgegevens
Ook in **Website-instellingen**: juridische naam, org.nr, momsregistreringsnummer en F-skatt. Spreek eerst met Mike af onder welke entiteit de Zweedse site valt (MDB B.V. of een Zweedse vestiging).

### Contactformulier
Het formulier staat uit tot er een sleutel is.
1. Ga naar https://web3forms.com en vraag een gratis **access key** aan op het e-mailadres waar de berichten naartoe moeten.
2. Vul die key in bij **Web3Forms access key**, en het adres bij **E-mailadres waar formulieren naartoe gaan**. Doe dat in beide talen.
3. Stuur via `/kontakt/` een testbericht.

### Pagina's
| Waar in het CMS | Wat |
|---|---|
| 🇸🇪/🇬🇧 Cases → S5-case | Jouw S5-casus: titel, klant of branche, uitdaging, aanpak, resultaat en een foto. Zet daarna **Gepubliceerd** aan. |
| 🇸🇪/🇬🇧 Pagina's → Om oss | Bij "Verhaal": een korte tekst over de start in Zweden. Waarom, sinds wanneer en vanaf welke plaats werk je? |
| 🇸🇪/🇬🇧 Regio's | Per län (Örebro, Värmland, Västmanland): je uitvalsbasis, de plaatsen waar je komt, en lokale klanten of referenties als die er zijn. |
| 🇸🇪/🇬🇧 Diensten → CE-märkning | Welke CE-diensten je in Zweden aanbiedt, ook voor machines die anderen hebben gebouwd, plus de werkwijze en de prijs. |
| 🇸🇪/🇬🇧 Diensten → Specialmaskiner, Retrofit, Robotisering | Prijzen en levertijden voor Zweden. De Nederlandse bedragen zijn bewust niet overgenomen. |
| 🇸🇪/🇬🇧 Veelgestelde vragen → vraag 3 en 10 | Hoe snel kun je bij een storing ter plaatse zijn? |

### Controleren of het klopt voor Zweden
Deze teksten komen van de Nederlandse site. Pas ze aan of haal ze weg als ze in Zweden niet gelden:
- **Felanalys**: de FAQ belooft een storingsdienst ("eerst weer draaien, daarna de oorzaak").
- **Specialmaskiner**: "eerste bezoek gratis", en "bouwen en testen in onze eigen werkplaats" (die staat in Nederland).
- **Retrofit**: het aanbod "eerst één dag repareren; die dag wordt verrekend als je daarna kiest voor een grote upgrade".
- **Stöd till underhållsavdelningen**: een traject van "minimaal zo'n 300 uur, drie dagen per week gedurende drie maanden".
- **Veelgestelde vragen 19**: "10 tot 50% betere uptime".

## 4. Zweedse taalcheck

Alle Zweedse teksten zijn concepten, geschreven door AI. Bovenaan elke Zweedse pagina staat in het CMS het veld **Controle-markering** met de waarde `sv-native-check-nodig`. Laat de tekst nakijken door een Zweedse moedertaalspreker (of doe het zelf), verbeter wat nodig is en **maak dat veld daarna leeg**. Zo zie je wat al is goedgekeurd.

## 5. Regels voor de inhoud

- Geen cijfers, klantnamen, reviews of certificaten die niet echt zijn of waar de klant geen toestemming voor heeft gegeven.
- De Nederlandse cases (Coca-Cola, Altrex enz.) staan er met toestemming van Mike op.
- Gebruik geen lange gedachtestreepjes. Elke maandag controleert een automatische check de site; technische verbeteringen komen als voorstel (pull request) binnen.

## 6. Werken met je eigen Claude

Je kunt de site ook laten aanpassen door je eigen Claude (Claude Code op claude.ai).

1. Zorg eerst dat stap 1 klaar is: je GitHub-account bestaat en je hebt de uitnodiging van Mike geaccepteerd.
2. Ga naar https://claude.ai/connect-github en koppel je GitHub-account. GitHub vraagt dan of de Claude-app toegang mag krijgen. Kies de repository `mdb668/demachinedokters-se`. Zie je die niet, vraag Mike dan om op zijn account bij de Claude-app ook jouw toegang toe te staan.
3. Open Claude Code op https://claude.ai/code, start een nieuwe sessie en kies de repository `mdb668/demachinedokters-se`.
4. Vertel Claude wat je wilt, bijvoorbeeld: "Vul mijn telefoonnummer +46 … in bij de contactgegevens, in beide talen."

Claude leest automatisch `CLAUDE.md` in deze repository. Daarin staan de afspraken: niet live zetten, niets verzinnen, de preview-schakelaar alleen in overleg met Mike. Vraag Claude om zijn wijzigingen als pull request aan te bieden, dan kun je ze eerst bekijken.

## 7. Live gaan

Dat doet Mike, of jij in overleg met Mike, als alle gele `[TODO]`-teksten weg zijn en de Zweedse teksten zijn nagekeken. De stappen staan in [LIVEGANG.md](LIVEGANG.md): de preview-schakelaar uitzetten, het domein demachinedokters.se koppelen en de pagina's aanmelden bij Google.

Vragen over de techniek? Laat Mike een Claude-sessie op deze repository starten.
