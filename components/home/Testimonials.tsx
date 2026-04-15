import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/testimonials";

// Editorial quote layout with large opening quotation mark.
export function Testimonials() {
  return (
    <Section className="bg-pink-soft/30 bg-grain">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 text-gold">
          <span className="font-display italic text-3xl">04</span>
          <span className="h-px w-12 lg:w-px lg:h-24 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-ink/50">
            Lời chúc
          </span>
        </div>

        <div className="lg:col-span-11">
          <div className="mb-16">
            <p className="mb-3 font-script text-3xl text-gold">Kind words</p>
            <h2 className="font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance max-w-3xl">
              Những lời chúc từ <span className="italic">các cặp đôi</span>{" "}
              đã đồng hành.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="relative">
                <span
                  className="absolute -top-6 -left-2 font-display text-8xl leading-none text-gold/40 select-none"
                  aria-hidden
                >
                  “
                </span>
                <blockquote className="font-serif italic text-xl leading-relaxed text-ink/85 text-pretty">
                  {t.content}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="block h-px w-8 bg-gold" />
                  <div>
                    <p className="font-display text-lg leading-tight">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
