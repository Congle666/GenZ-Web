import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio — Thư viện tác phẩm",
  description:
    "Bộ sưu tập những tiệc cưới và concept trang trí ấn tượng nhất của GenZ Làm Cưới.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="pb-0 pt-28 md:pt-36">
        <Container className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-widest text-ink/50">
              <span className="h-px w-12 bg-gold" />
              <span>Portfolio · Selected works</span>
            </div>
            <p className="mb-4 font-script text-4xl text-gold">The collection</p>
            <h1 className="font-display font-light leading-[1.02] text-5xl md:text-7xl lg:text-8xl text-balance">
              Thư viện<br />
              <span className="italic">khoảnh khắc.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="font-serif text-lg text-ink/70 leading-relaxed text-pretty border-l border-gold/50 pl-6">
              Mỗi dự án là một câu chuyện tình yêu độc nhất. Hơn 200 tiệc cưới,
              không có hai concept nào giống nhau.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <PortfolioGallery />
        </Container>
      </Section>
    </>
  );
}
