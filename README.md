# Cats on a Map — Website

Marketing site for [Cats on a Map](https://github.com/Jamesemf/Cats), the
Pokémon Go-style app for spotting, identifying and collecting neighbourhood
cats.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. All visuals
are procedural (SVG cat faces and CSS phone mockups) — no image assets. The
palette is ported directly from the app's `constants/theme.ts`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

## Deployment

The site is Vercel-ready: import the repository at [vercel.com](https://vercel.com)
and accept the auto-detected Next.js defaults. No environment variables or
extra configuration required.
