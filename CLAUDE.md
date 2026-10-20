# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Mezraw Solutions marketing site (spices, fresh and dehydrated vegetables). Two independent npm projects, each with its own `package.json`; there is no workspace setup and no test suite.

- `Front-end/` — React 19 + Vite 6 SPA (ESM, JSX).
- `Back-end/` — single-file Express 5 server (`index.js`, CommonJS).
- Root `package.json` only holds stray dependencies (incl. `@vis.gl/react-google-maps`); the apps don't run from the root.

## Commands

Front-end (run in `Front-end/`):
- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run preview` — serve the built bundle

Back-end (run in `Back-end/`):
- `node index.js` — starts the server on `PORT` (default 5000). No start/dev script defined. Loads `.env` via dotenv (gitignored).

## Architecture

- **Routing**: `Front-end/src/App.jsx` is the real router — `react-router-dom` `BrowserRouter` with routes `/`, `/about`, `/fresh`, `/brands`, `/dehydrated-vegetables`, `/spices`, `/processed`, `/contact` (`Brands` and `Processed` are placeholder pages awaiting real content). `Header` (sticky) and `FooterSection` wrap all routes.
- **`src/routes/routes.ts` is unused/vestigial**: it uses `@react-router/dev` + `fs-routes` config (framework mode), which is not wired into `vite.config.js` (only `react()` and `@tailwindcss/vite` plugins). Don't add routes there; add them in `App.jsx`.
- **Styling is Tailwind v4 only**: design tokens (colors `ink`/`muted`/`tint`/`header`/`brand`, fonts `font-sans` Inter + `font-display` Libre Baskerville, fluid `text-hero`/`text-section`, `ease-out-strong`) live in the `@theme` block of `src/index.css`; use these utilities instead of hard-coded values. Light theme overall with a dark header/footer. Bootstrap CSS is no longer loaded, so don't rely on Bootstrap classes or add `!important`. Responsiveness is CSS-only (the desktop nav appears at `xl`). Shared pressable is `components/Button.jsx` (its `buttonStyles` also style router `<Link>`s). Home uses the "specimen catalogue" direction from the Taste skill: product photos on flat `tile-1..4` colour tiles via `components/Specimen.jsx`. Testimonials (`ReviewSection.jsx`) are tilted paper slips using the `slip` torn-edge utility in `index.css`; the contact form (`ContactForm.jsx`) is a coupon card whose notches are `bg-paper` circles, so keep the page background white (`bg-paper`) behind it. `FadeinSection` accepts a `className` for the wrapper. `ArticleSection.jsx` is kept but no longer rendered on Home (it only held duplicated placeholder articles). `FadeinSection.jsx` (framer-motion) is the scroll-in wrapper and respects reduced motion. `src/styles/ContactForm.css` (autofill fix) is the only stylesheet besides `src/index.css`.
- **Contact flow**: `ContactForm.jsx` POSTs `{name, email, message}` to a hardcoded `http://localhost:5000/api/contact`. The Express handler validates fields, sends mail via nodemailer using an Ethereal **test** account (a fresh one per request) to a hardcoded recipient, and returns an Ethereal `previewUrl` — no real email is delivered. Moving to production requires changing both the URL in the front-end and the transport in `Back-end/index.js`.
- **Google Maps key** is read from `VITE_GOOGLE_MAPS_API_KEY` in `Front-end/.env` (gitignored; copy `.env.example`). Without it the contact page shows "Map unavailable". Restart Vite after changing it.
- `PRODUCT.md` at the repo root is the Impeccable design-context file; it was inferred from the code, and its `[assumed]` items are unconfirmed.
- Product images live in `src/assets/` as `.avif`.
