# Phase 04 — Blog + Sanity CMS

Status: ⚪ Pending · Priority: P3

## Scope
- Integrate Sanity v3 (embedded studio at `/studio`).
- Migrate services / projects / testimonials / siteSettings from static TS → Sanity.
- Add `post` schema + blog list + detail pages.
- `/blog` — cards list, sidebar (popular posts, categories, Zalo CTA).
- `/blog/[slug]` — portable text body + related posts.

## Sanity schemas
- `service` — title, slug, description, image, price, featured, order.
- `project` — title, slug, category, images[], location, year, description.
- `post` — title, slug, excerpt, body (PortableText), mainImage, categories[], publishedAt.
- `testimonial` — name, role, content, avatar, rating.
- `siteSettings` — singleton; logo, phone, zaloLink, email, address, workingHours.

## Steps
1. `pnpm add next-sanity @sanity/image-url sanity @sanity/vision`.
2. `sanity/schemas/*.ts` + `sanity.config.ts` mounted at `app/studio/[[...index]]/page.tsx`.
3. `lib/sanity.ts` — client + image builder + GROQ queries.
4. Rewrite data consumers to fetch from Sanity with `revalidate: 60`.
5. PortableText renderer for blog body.
6. Preview/draft mode (optional — defer).
7. Sitemap.xml + GA4 integration (Phase 4.5).

## Risks
- Sanity free tier: 10k docs, 2 users — fine for studio.
- Dataset `production` vs `development` — configure via env.
- Image CDN from Sanity replaces `next/image` optimization — acceptable.

## Success criteria
- Client can edit content via `/studio`.
- Blog list + detail render with rich text.
- Revalidation works (ISR 60s).
- Sitemap includes dynamic blog URLs.
