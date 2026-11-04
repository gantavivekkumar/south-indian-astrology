# Jyotisha — South Indian Vedic Astrology Website

A responsive starter website for a South Indian astrology platform. The current version includes a landing page, feature overview, and a demo birth-details form.

## Current status

**Frontend starter only.** The birth-details form currently runs in the browser and displays a demo confirmation. It does not calculate or store a horoscope, send personal data to a server, or provide astrological predictions.

## Features in this starter

- Responsive landing page with a traditional-inspired visual theme
- South Indian astrology feature sections: Jathakam, Porutham, Panchangam, Rasi and Nakshatra
- Birth details demo form
- Language selector for English, Telugu, Tamil, Kannada and Malayalam
- Next.js App Router + TypeScript

## Run locally

You need Node.js 20.9 or later and npm.

```bash
git clone https://github.com/gantavivekkumar/south-indian-astrology.git
cd south-indian-astrology
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this GitHub repository at [Vercel](https://vercel.com/new).
2. Keep the framework preset as **Next.js**.
3. Click **Deploy**. No environment variables are needed for this frontend starter.

## Recommended next development stages

1. **Astrology calculation engine:** integrate a verified ephemeris such as Swiss Ephemeris, confirm licensing and attribution requirements, and document ayanamsa (for example Lahiri) and calculation conventions.
2. **Birth chart API:** validate date, time zone and birthplace; calculate planetary longitudes, lagna, nakshatra, pada and South Indian Rasi chart.
3. **Panchangam:** implement location-aware sunrise, tithi, nakshatra, yoga, karana and local calendar rules.
4. **Porutham:** implement and test the selected regional marriage-matching rules with transparent explanations.
5. **Database and accounts:** add secure authentication and consent-based storage only when needed. Do not store birth details without clear user consent.
6. **Localization:** translate all interface content and validate Telugu, Tamil, Kannada and Malayalam typography.

## Important

Astrological interpretations are traditional/cultural content, not scientifically established predictions. Clearly communicate calculation methods, limitations and the source of any interpretations.

## Tech stack

- Next.js 15
- React 19
- TypeScript
- CSS
- Lucide icons
