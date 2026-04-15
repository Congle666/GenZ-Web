"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  categoryLabels,
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/projects";
import { cn } from "@/lib/cn";

type Filter = ProjectCategory | "all";
const PAGE_SIZE = 6;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );
  const shown = filtered.slice(0, visible);

  const onFilter = (f: Filter) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((lb) => {
        if (!lb) return lb;
        const total = lb.project.images.length;
        return { ...lb, index: (lb.index + dir + total) % total };
      });
    },
    []
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, step]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
        {(Object.keys(categoryLabels) as Filter[]).map((key) => (
          <button
            key={key}
            onClick={() => onFilter(key)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              filter === key
                ? "border-gold bg-gold text-ivory"
                : "border-ink/20 text-ink/70 hover:border-gold hover:text-gold"
            )}
          >
            {categoryLabels[key]}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.button
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox({ project: p, index: 0 })}
              data-cursor="View"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 text-left cursor-none"
            >
              <Image
                src={p.coverImage}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                <p className="font-display text-xl leading-tight">{p.title}</p>
                <p className="mt-1 text-xs text-ivory/80">
                  {p.location} · {p.year}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border border-gold px-8 py-3 text-sm text-gold hover:bg-gold hover:text-ivory transition-colors"
          >
            Xem thêm
          </button>
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-5 top-5 text-ivory text-2xl hover:text-gold"
              aria-label="Đóng"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 md:left-10 text-ivory text-3xl hover:text-gold"
              aria-label="Trước"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 md:right-10 text-ivory text-3xl hover:text-gold"
              aria-label="Sau"
            >
              ›
            </button>
            <motion.div
              key={`${lightbox.project.slug}-${lightbox.index}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={lightbox.project.images[lightbox.index]}
                  alt={lightbox.project.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="mt-4 text-center text-ivory">
                <p className="font-display text-xl">{lightbox.project.title}</p>
                <p className="text-sm text-ivory/70">
                  {lightbox.project.location} · {lightbox.project.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
