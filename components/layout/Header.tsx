"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <Image
            src="/images/logo.jpg"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="rounded-full object-cover ring-1 ring-gold/40"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display italic text-base md:text-lg">
              {siteConfig.name}
            </span>
            <span className="mt-0.5 text-[9px] uppercase tracking-widest text-ink/50">
              Wedding Decor Studio
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[11px] uppercase tracking-widest transition-colors",
                  active ? "text-gold" : "text-ink/75 hover:text-gold"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-px w-4 bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink mb-1.5" />
          <span className="block h-0.5 w-6 bg-ink mb-1.5" />
          <span className="block h-0.5 w-4 bg-ink" />
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-ivory">
          <Container className="flex flex-col py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 text-sm",
                  pathname === item.href ? "text-gold" : "text-ink/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
