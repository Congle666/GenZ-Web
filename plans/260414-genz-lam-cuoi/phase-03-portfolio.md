# Phase 03 — Portfolio + Lightbox (`/portfolio`)

Status: ⚪ Pending · Priority: P2

## Scope
- `/portfolio` grid with category filter: Tất cả / Tiệc cưới / Sảnh lễ / Outdoor / Concept.
- Lightbox on image click.
- Load-more pagination (simpler than infinite scroll — KISS).

## Data shape
```ts
type Project = {
  slug: string;
  title: string;
  category: "tiec-cuoi" | "sanh-le" | "outdoor" | "concept";
  images: string[];
  coverImage: string;
  location: string;
  year: number;
  description?: string;
};
```

## Steps
1. `app/portfolio/page.tsx` (client component for filter state) OR RSC + client `PortfolioGrid`.
2. `CategoryFilter` (client) — URL-state via `useSearchParams`.
3. `Lightbox` — use `yet-another-react-lightbox` (small, no bloat) OR custom ~80-line component with Framer Motion + keyboard nav.
4. "Xem thêm" button — reveals next 12.

## Decision point
- Lightbox lib vs custom: recommend `yet-another-react-lightbox` (~15KB, battle-tested, accessibility built-in). Flag to user before install.

## Success criteria
- Filter updates URL.
- Lightbox: arrow keys, ESC to close, swipe on mobile.
- All images `next/image` optimized.
