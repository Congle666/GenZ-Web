"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";

// Editorial hero with parallax: image zooms/drifts while text rises on scroll.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, reduced ? 1.05 : 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90"
          alt="Không gian tiệc cưới lãng mạn phong cách GenZ"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent md:from-ink/50" />

      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-4 text-ivory/70 z-10">
        <span className="num-label text-[10px] uppercase">Est. 2020 — Sài Gòn</span>
        <span className="block w-px h-20 bg-ivory/30" />
      </div>

      <div className="hidden md:block absolute inset-10 border border-ivory/15 pointer-events-none z-10" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-16 md:pb-24 md:px-10 text-ivory"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-widest text-ivory/80"
          >
            <span className="h-px w-12 bg-gold" />
            Wedding Decor Studio · Vietnam
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display font-light leading-[0.95] text-[clamp(2.75rem,8vw,7.5rem)] text-balance"
          >
            Chạm vào<br />
            <span className="italic text-gold">khoảnh khắc</span>{" "}
            <span className="font-script text-gold/90 text-[0.6em] align-middle">— lưu giữ</span>
            <br />
            một đời.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex max-w-3xl flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="font-serif text-lg leading-relaxed text-ivory/85 max-w-md text-pretty">
              Studio trang trí cưới dành cho thế hệ không thích lối mòn — mỗi tiệc
              cưới là một tác phẩm riêng, không trùng lặp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <ButtonLink href="/portfolio" size="lg">
                Xem bộ sưu tập
              </ButtonLink>
              <ButtonLink
                href="/lien-he"
                size="lg"
                variant="outline"
                className="border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"
              >
                Đặt lịch tư vấn
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-6 right-6 md:right-10 text-ivory/70 text-[10px] uppercase tracking-widest flex items-center gap-3 z-10"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block h-8 w-px bg-ivory/50"
        />
      </motion.div>
    </section>
  );
}
