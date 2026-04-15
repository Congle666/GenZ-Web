// Infinite horizontal marquee — editorial accent.
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y border-ink/10 bg-ivory py-6 ${className}`}
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display italic text-3xl md:text-5xl text-ink/80 whitespace-nowrap"
          >
            {t}
            <span className="text-gold text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
