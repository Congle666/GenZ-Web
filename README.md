# GenZ Làm Cưới

Website trang trí tiệc cưới — Next.js 14 App Router + Tailwind + Framer Motion + Formspree.

## Getting started

```bash
pnpm install   # hoặc npm install / yarn
cp .env.example .env.local
# Điền NEXT_PUBLIC_* vào .env.local
pnpm dev
```

Mở http://localhost:3000.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + custom design tokens (ivory / pink / gold)
- Framer Motion (chỉ ở leaf client components)
- Formspree (xử lý form, không backend)
- Deploy: Vercel

## Cấu trúc

```
app/                    # routes (App Router)
  page.tsx              # Home
  dich-vu/              # Services
  portfolio/            # Portfolio + lightbox
  blog/                 # Blog list + [slug]
  lien-he/              # Contact
components/
  ui/                   # Button, Card, Container, Section
  layout/               # Header, Footer, FloatingZalo
  home/                 # Hero, About, ServicesGrid, Testimonials…
  contact/              # ContactForm
  portfolio/            # PortfolioGallery (filter + lightbox)
content/                # Static data (services, projects, posts, testimonials)
lib/                    # env, utility helpers
public/images/          # Logo + static images
plans/                  # Implementation plans (4 phases)
```

## Env vars

Xem `.env.example`. Tất cả đều có default nên build không vỡ, nhưng bạn cần điền giá trị thật trước khi deploy:

- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_ZALO_LINK`, `NEXT_PUBLIC_ADDRESS`
- `NEXT_PUBLIC_FORMSPREE_ID` — tạo form tại https://formspree.io → copy ID sau `/f/`
- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (optional)
- `NEXT_PUBLIC_MAPS_EMBED` — Google Maps embed URL

## Roadmap (plans/260414-genz-lam-cuoi/)

- [x] Phase 1: Foundation + Home + Contact
- [x] Phase 2: Services
- [x] Phase 3: Portfolio + Lightbox
- [ ] Phase 4: Sanity CMS (blog đã dùng static data — migrate khi cần editor UI)

## Deploy

```bash
vercel
```

Set env vars trong Vercel dashboard.
