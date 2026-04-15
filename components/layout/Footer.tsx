import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { env } from "@/lib/env";

export function Footer() {
  return (
    <footer className="mt-0 bg-ink text-ivory/75 relative overflow-hidden">
      {/* Oversized script watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-script text-[22vw] leading-none text-ivory/[0.04] whitespace-nowrap"
      >
        Genz Làm Cưới
      </span>

      <Container className="relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo.jpg"
              alt={siteConfig.name}
              width={48}
              height={48}
              className="rounded-full object-cover ring-1 ring-gold/60"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display italic text-2xl text-ivory">
                {siteConfig.name}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-ivory/40">
                Wedding Decor Studio · Since 2020
              </span>
            </span>
          </div>
          <p className="max-w-sm font-serif text-lg italic leading-relaxed text-ivory/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-[10px] uppercase tracking-widest text-gold">Khám phá</h4>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 text-[10px] uppercase tracking-widest text-gold">Liên hệ</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${env.phone}`} className="hover:text-gold">
                {env.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${env.email}`} className="hover:text-gold">
                {env.email}
              </a>
            </li>
            <li>{env.address}</li>
            <li>{siteConfig.workingHours}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-[10px] uppercase tracking-widest text-gold">Theo dõi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-ivory/10">
        <Container className="flex flex-col md:flex-row items-center justify-between py-6 text-[11px] uppercase tracking-widest text-ivory/50">
          <p>© {new Date().getFullYear()} {siteConfig.name} · All rights reserved</p>
          <p className="font-script text-base normal-case tracking-normal text-gold/80">
            Made with love — for Vietnamese weddings
          </p>
        </Container>
      </div>
    </footer>
  );
}
