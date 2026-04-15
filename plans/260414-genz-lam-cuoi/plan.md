# GenZ Làm Cưới — Wedding Decor Website

Next.js 14 App Router + Tailwind + Framer Motion + Formspree + (later) Sanity CMS.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 01 | Foundation + Home + Contact (MVP) | 🟡 In progress |
| 02 | Services page (`/dich-vu`) | ⚪ Pending |
| 03 | Portfolio + Lightbox (`/portfolio`) | ⚪ Pending |
| 04 | Blog + Sanity CMS (`/blog`) | ⚪ Pending |

## Phase files
- [phase-01-foundation-home-contact.md](./phase-01-foundation-home-contact.md)
- [phase-02-services.md](./phase-02-services.md)
- [phase-03-portfolio.md](./phase-03-portfolio.md)
- [phase-04-blog-sanity.md](./phase-04-blog-sanity.md)

## Global decisions
- **Data source Phase 1–3:** static TS files in `/content/*.ts` (KISS, no Sanity setup until Phase 4).
- **Images:** `public/images/` — user logo `public/images/logo.jpg`. Hero/portfolio images use placeholders from Unsplash until user provides.
- **Placeholders:** Zalo, phone, email, Formspree endpoint, GA ID — env vars with sensible defaults.
- **Design tokens:** `#FDF8F3` ivory, `#F8D7D4` pink, `#C9A96E` gold. Playfair Display + Inter via `next/font`.
- **Animation:** Framer Motion only in leaf client components — keep pages RSC.
