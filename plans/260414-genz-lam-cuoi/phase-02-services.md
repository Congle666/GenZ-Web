# Phase 02 — Services Page (`/dich-vu`)

Status: ⚪ Pending · Priority: P1

## Scope
- Route `/dich-vu` lists service packages from `content/services.ts`.
- Card: image, title, short description, price (or "Liên hệ báo giá"), CTA "Tư vấn ngay" → Zalo deep link or scroll to embedded mini contact form.
- Optional: `[slug]` detail page (defer until user requests).

## Data shape
```ts
type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  price?: string;          // undefined → "Liên hệ báo giá"
  featured?: boolean;
};
```

## Steps
1. Add `app/dich-vu/page.tsx` (RSC) — imports services list.
2. `ServiceCard` component (reuses `Card` primitive).
3. CTA button opens Zalo link in new tab.
4. SEO metadata.

## Success criteria
- All services from data file render.
- CTA works on mobile.
- Lighthouse ≥ 90.
