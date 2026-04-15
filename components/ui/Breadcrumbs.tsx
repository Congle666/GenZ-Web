import Link from "next/link";
import { env } from "@/lib/env";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ldItems = items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: c.href ? `${env.siteUrl}${c.href}` : undefined,
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[11px] uppercase tracking-widest text-ink/50"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-gold transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink/80">{c.label}</span>
            )}
            {i < items.length - 1 && <span className="text-ink/30">/</span>}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: ldItems,
          }),
        }}
      />
    </nav>
  );
}
