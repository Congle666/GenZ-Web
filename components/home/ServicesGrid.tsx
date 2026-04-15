import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";

// Editorial service list — alternating rows with big numerals, not a card grid.
export function ServicesGrid() {
  const featured = services.filter((s) => s.featured).slice(0, 5);
  return (
    <Section className="bg-ivory">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 text-gold">
          <span className="font-display italic text-3xl">02</span>
          <span className="h-px w-12 lg:w-px lg:h-24 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-ink/50">
            Dịch vụ
          </span>
        </div>

        <div className="lg:col-span-11">
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 font-script text-3xl text-gold">What we do</p>
              <h2 className="font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance">
                Những điều<br />
                chúng tôi làm <span className="italic">tốt nhất</span>
              </h2>
            </div>
            <Link
              href="/dich-vu"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-ink/70 hover:text-gold transition-colors"
            >
              Xem tất cả dịch vụ
              <span className="h-px w-12 bg-ink/30 group-hover:w-16 group-hover:bg-gold transition-all" />
            </Link>
          </div>

          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {featured.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href="/dich-vu"
                  className="group grid grid-cols-12 items-center gap-4 md:gap-8 py-8 md:py-10 transition-colors hover:bg-pink-soft/20"
                >
                  <span className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-ink/30 group-hover:text-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative col-span-4 md:col-span-3 aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 30vw, 20vw"
                    />
                  </div>

                  <div className="col-span-6 md:col-span-6">
                    <h3 className="font-display text-2xl md:text-4xl leading-tight group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 hidden md:block font-serif text-base text-ink/65 leading-relaxed text-pretty max-w-xl">
                      {s.description}
                    </p>
                  </div>

                  <div className="hidden md:flex col-span-2 flex-col items-end text-right">
                    <span className="text-xs uppercase tracking-widest text-ink/50">
                      {s.price ? "Từ" : "Báo giá"}
                    </span>
                    <span className="mt-1 font-display text-lg text-ink/80">
                      {s.price ?? "Liên hệ"}
                    </span>
                    <span className="mt-3 text-gold text-xl transform group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
