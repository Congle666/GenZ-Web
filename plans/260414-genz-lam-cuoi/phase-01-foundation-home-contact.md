# Phase 01 — Foundation + Home + Contact (MVP)

Status: 🟡 In progress · Priority: P0

## Scope
- Scaffold Next.js 14 App Router + TS + Tailwind.
- Design tokens (colors, fonts) + base layout (Header + Footer + FloatingZalo).
- Reusable primitives: `Button`, `Container`, `Section`, `Card`.
- **Home** (`/`): Hero, About, Services grid (static), Portfolio preview, Testimonials, CTA banner.
- **Contact** (`/lien-he`): Formspree form + Google Maps embed + contact info.
- SEO metadata per page, Open Graph.
- Env vars: `NEXT_PUBLIC_ZALO_LINK`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_FORMSPREE_ID`, `NEXT_PUBLIC_GA_ID`.

## Out of scope (other phases)
- Services detail, Portfolio gallery, Blog, Sanity.

## Architecture
```
app/
  layout.tsx            # fonts, metadata, Header/Footer/FloatingZalo
  page.tsx              # Home
  lien-he/page.tsx      # Contact
components/
  ui/                   # Button, Container, Section, Card
  layout/               # Header, Footer, FloatingZalo
  home/                 # Hero, About, ServicesGrid, PortfolioPreview, Testimonials, CtaBanner
  contact/              # ContactForm
content/
  services.ts           # static service list (used by Phase 02 too)
  projects.ts           # static project list (used by Phase 03 too)
  testimonials.ts
  site.ts               # site-wide constants
lib/
  env.ts                # typed env access
public/images/
  logo.jpg              # user-provided
```

## Implementation steps
1. `pnpm create next-app@latest` with TS + Tailwind + App Router + ESLint + src-less.
2. Move user logo into `public/images/logo.jpg`.
3. Configure `tailwind.config.ts`: custom colors (ivory, pink, gold), font families.
4. Load Playfair Display + Inter via `next/font/google` in `app/layout.tsx`.
5. Build primitives (`Button`, `Container`, `Section`, `Card`).
6. Build `Header` (nav: Home / Dịch vụ / Portfolio / Blog / Liên hệ) + `Footer`.
7. Build `FloatingZalo` (client component, pulse animation via Framer Motion).
8. Build Home sections — all data static from `content/*.ts`.
9. Build Contact page with Formspree fetch (`action="https://formspree.io/f/{id}"`) + success state.
10. SEO: `metadata` export per route + OG image.
11. Verify `next build` passes.

## Success criteria
- `pnpm dev` renders home + contact with no console errors.
- Lighthouse mobile ≥ 85 (local).
- Formspree form validates required fields.
- Floating Zalo visible all pages.

## Risks
- Framer Motion accidentally forcing whole page to client — mitigate: `"use client"` only on leaf motion components.
- Formspree free tier 50 submissions/month — document for user.
