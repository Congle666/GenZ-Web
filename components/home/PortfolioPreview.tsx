import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/content/projects";

// Editorial masonry using CSS columns — true staggered heights.
export function PortfolioPreview() {
  const six = projects.slice(0, 6);
  return (
    <Section className="bg-ink text-ivory">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 text-gold">
          <span className="font-display italic text-3xl">03</span>
          <span className="h-px w-12 lg:w-px lg:h-24 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-ivory/50">
            Portfolio
          </span>
        </div>

        <div className="lg:col-span-11">
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 font-script text-3xl text-gold">Selected works</p>
              <h2 className="font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance">
                Một vài <span className="italic">khoảnh khắc</span><br />
                đáng nhớ
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-ivory/70 hover:text-gold transition-colors"
            >
              Xem toàn bộ
              <span className="h-px w-12 bg-ivory/30 group-hover:w-16 group-hover:bg-gold transition-all" />
            </Link>
          </div>

          <div className="columns-2 md:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
            {six.map((p, i) => {
              // Vary aspect ratios for a real masonry look.
              const ratios = [
                "aspect-[3/4]",
                "aspect-[4/5]",
                "aspect-[4/3]",
                "aspect-[3/4]",
                "aspect-[4/3]",
                "aspect-[3/4]",
              ];
              return (
                <Link
                  key={p.slug}
                  href="/portfolio"
                  data-cursor="View"
                  className="group relative block break-inside-avoid overflow-hidden rounded-sm"
                >
                  <div className={`relative w-full ${ratios[i]}`}>
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-[10px] uppercase tracking-widest text-gold">
                      {String(i + 1).padStart(2, "0")} · {p.year}
                    </p>
                    <p className="mt-1 font-display text-lg md:text-2xl leading-tight">
                      {p.title}
                    </p>
                    <p className="mt-1 font-serif italic text-ivory/70 text-sm">
                      {p.location}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
