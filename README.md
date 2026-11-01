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
- **Developments** (`/developments`) — Caluta property page within the shared ALTRAC navbar and footer, with a forest-green and ivory design, plan-led hero, searchable sold register, VAT-inclusive area estimator and WhatsApp interest form. Confirmed project content lives in `src/data/development.js`. Unknown pricing and location remain available on enquiry.
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
| Development details           | `src/data/development.js`      |
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

### Development plan and sold stands

`src/data/development.js` holds the confirmed US$35/m² VAT-inclusive rate and the
client-supplied sold register (55 Chiswell, 3 Advocate). Update this register when
stands sell. Blue on the supplied plan marks contractor allocation, not sales
status. An unlisted stand always requires allocation and availability confirmation.
The development is marketed as Caluta, priced in US dollars. The location and payment terms remain subject to client confirmation.

The Railway Farm 8 scan is stored in `public/developments/`, with an upright JPEG
for the zoomable viewer and the original PDF. The source is a proposed roads and
storm water drainage drawing dated February 2017; it does not establish current
approval or servicing status.

### AWS Amplify

Run `npm run zip` to build and create `altrac-amplify.zip`. Upload this ZIP to
the existing Amplify app for a manual deployment. `index.html` is at the ZIP root.

In Amplify **Hosting > Rewrites and redirects**, add the SPA rule from
`amplify-redirects.json`, preserving any existing domain redirects. It routes
page requests such as `/developments` to `/index.html` with status 200, while
leaving assets and the layout PDF untouched. The JSON file is console
configuration; uploading the ZIP alone does not apply this rule.

For a Git-connected Amplify app, `amplify.yml` installs locked dependencies,
builds the app and publishes `dist/`. The same rewrite rule is still required.
