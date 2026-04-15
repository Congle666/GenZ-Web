import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Elegant",
          "Romantic",
          "Timeless",
          "Crafted in Saigon",
          "Made for GenZ couples",
          "Từng chi tiết kể một câu chuyện",
        ]}
      />
      <About />
      <ServicesGrid />
      <PortfolioPreview />
      <ProcessStrip />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
