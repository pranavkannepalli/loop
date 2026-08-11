# loop

A web app that helps households find, evaluate, and track sustainable home upgrades.

**🏆 9th place, Webmaster — TSA Nationals**

Live: https://loop-sustainable.vercel.app

## What it is

loop guides users toward green solutions for their home — solar, insulation, and other upgrades — filtered by cost, difficulty, and available rebates and tax credits. Each solution page covers historical pricing, ROI, environmental impact, and installation steps. Users register their home, save solutions to a dashboard to track implementation, and run footprint and solar-savings calculators. An OpenAI-backed prompt and WattBuy electricity data round out the experience.

## Run it

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

The routes under `app/api/` expect OpenAI and WattBuy API credentials.

## Stack

Next.js 14 (App Router) · React 18 · Tailwind CSS · Framer Motion · OpenAI API · WattBuy API.
