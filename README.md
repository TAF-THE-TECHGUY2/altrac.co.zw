# ALTRAC — Chiswell Investments (Pvt) Ltd

A modern, responsive marketing website for **ALTRAC** (Chiswell Investments) —
an earthmoving equipment rental and civil-works company in Harare & Zimbabwe,
established in 1996.

Built with **React + Vite + Tailwind CSS**. Clean industrial design using the
official ALTRAC palette — Corporate Blue `#0D7BEA`, Safety Yellow `#F7E600`,
Black `#111111` and White — with WhatsApp call-to-action buttons throughout.

## Pages

- **Home** — hero, credentials strip, browse-by-category filter, "Not sure which
  equipment?" band, Our Guarantee, Our Fleet (filterable), featured projects, CTA.
- **Vehicles / Equipment** — filterable fleet + searchable + full plant schedule.
- **Projects** — filterable track record (roads, dams, civils, mining).
- **About Us** — company story, vision/mission, values, services, team,
  certifications, references and suppliers (all from the company profile).
- **Contact Us** — contact cards, opening hours, WhatsApp enquiry form and map.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where to change things

| What                          | File                          |
| ----------------------------- | ----------------------------- |
| Brand name, contact & WhatsApp | `src/lib/site.js`            |
| Equipment list & categories   | `src/data/equipment.js`       |
| Project track record          | `src/data/projects.js`        |
| Company / About content       | `src/data/company.js`         |
| Brand colours / theme         | `tailwind.config.js`          |
| Logo artwork                  | `src/components/Logo.jsx`     |
| Equipment photos              | `public/equipment/` (see its README) |
| Hero background image         | `public/hero.jpg`             |

### WhatsApp number

All WhatsApp buttons are generated from `CONTACT.whatsappNumber` in
`src/lib/site.js` (digits only, with country code). Change it once and every
button updates.

### Replacing placeholder images

Equipment cards show a branded placeholder until a real photo is available.
Add JPG/WebP files to `public/equipment/` using the filenames listed in
`public/equipment/README.md` — they appear automatically, no code changes
needed.

## Deployment note

This is a single-page app using client-side routing. When deploying to a static
host, add a rewrite so all routes serve `index.html` (e.g. on Netlify add a
`_redirects` file with `/*  /index.html  200`, or use Vercel's SPA fallback).
