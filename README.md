# VZ Projects Solar – Website

> **Version 3 („Apple“)**: Navy/Weiß/Schwarz (kein Gold), Bilder und Videos im Navy-Look, Systemschrift (SF Pro auf Apple-Geräten), Kacheln und Pill-Buttons. Startseiten-Animationen aus Version 2 (Video, Wort-Reveal, Scroll-Manifest, Ablauf-Tabs, Deutschlandkarte). Katalog und Anfrageprozess wie Version 1.

Statische Astro-Website für die VZ Projects Solar GmbH (PV-Großhandel, B2B).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statische Seiten in dist/ (Netlify, Vercel, jedes Webhosting)
```

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Firmendaten, Kennzahlen, Navigation | `src/data/site.ts` |
| Produkte & Kategorien | `src/data/products.ts` |
| Hersteller & Logos | `src/data/brands.ts`, Logos in `public/brands/` |
| Fotos | `public/img/` (Unsplash-Lizenz) |

## Vor dem Livegang

- **Platzhalter ersetzen:** Adresse, Telefon, E-Mail, Handelsregister, USt-ID (`site.ts`).
- **Kennzahlen:** Die Werte in `stats` sind Beispielwerte. Nur belegbare Zahlen veröffentlichen (UWG), danach `showPlaceholderNote = false`.
- **Zitat** auf „Über uns“ ist ein Vorschlag und muss von Moritz von Ziegner freigegeben werden.
- **Formulare** (`/anfrage`, `/shop`) senden noch nichts. Endpunkt anbinden (z. B. Netlify Forms, Formspree oder CRM).
- **Rechtstexte** (Impressum, Datenschutz, AGB) sind Platzhalter und müssen geprüft werden.
- **Schriften** lokal einbinden statt über Google Fonts (DSGVO).
- **Herstellerlogos** stammen von Wikimedia Commons bzw. den Herstellerseiten. Nutzung mit den Herstellern / Distributionsverträgen abstimmen.
- **Technische Daten** sind gerundet. Vor Livegang gegen aktuelle Datenblätter prüfen.
- **Suchmaschinen:** Der Entwurf ist per `noindex` gesperrt (`src/layouts/Base.astro`). Beim Livegang entfernen.

## Vorschau auf GitHub Pages

`npm run deploy` baut die Seite und veröffentlicht `dist/` auf dem Branch `gh-pages` unter `https://<owner>.github.io/<repo>/`. Interne Links laufen deshalb über `u()` aus `src/lib/url.ts`, das den Basis-Pfad ergänzt. Bei eigener Domain (z. B. vz-projects.de) entfällt `BASE_PATH`.

## Medien (Version 3)

- Hero- und CTA-Video: Mixkit-Stockvideos 46623 und 46624 (Mixkit License, kostenlose kommerzielle Nutzung), in `public/video/`.
- Deutschlandkarte: generiertes Punktraster (`src/components/GermanyMap.astro`), Städte und Routen sind Beispiele.
