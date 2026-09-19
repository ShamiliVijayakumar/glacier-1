# Glacier

Full-bleed cinematic "exhibition" landing page. Vite + React 19 + TypeScript + Tailwind CSS v4 + framer-motion.

## Setup

```bash
npm install
npm run dev
```

## Required manual step — the hero background video

`src/components/Hero.tsx` points at `/hero.mp4`, which is **not** included in this
folder (the sandbox that generated the project could not reach the CDN host).
Download it once before running:

```bash
curl -L -o public/hero.mp4 \
  https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/glacier/hero.mp4
```

Until that file exists the page renders correctly but with a black background
behind the lockup.

## Structure

```
index.html              Google Fonts (Playfair Display + Inter)
src/index.css           @import "tailwindcss" + base layer reset
src/App.tsx             <Navbar /> + <Hero />
src/components/Navbar.tsx   floating glass icon dock, layoutId sliding highlight
src/components/Hero.tsx     brand lockup, headline, oval button, footer bar
```

## Scripts

- `npm run dev` — dev server
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — eslint
- `npm run preview` — preview the production build
