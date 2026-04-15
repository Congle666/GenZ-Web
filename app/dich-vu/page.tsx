import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Dịch vụ trang trí tiệc cưới",
  description:
    "Các gói dịch vụ trang trí tiệc cưới: sảnh lễ, bàn tiệc, backdrop, hoa cưới, outdoor wedding.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="relative pb-0 pt-28 md:pt-36">
        <Container className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-widest text-ink/50">
              <span className="h-px w-12 bg-gold" />
              <span>Dịch vụ · Services</span>
            </div>
            <p className="mb-4 font-script text-4xl text-gold">Our offerings</p>
            <h1 className="font-display font-light leading-[1.02] text-5xl md:text-7xl lg:text-8xl text-balance">
              Mỗi gói —<br />
              một <span className="italic">trải nghiệm</span><br />
              trọn vẹn.
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="font-serif text-lg text-ink/70 leading-relaxed text-pretty border-l border-gold/50 pl-6">
              Chúng tôi thiết kế các gói dịch vụ linh hoạt, tuỳ biến theo
              concept và ngân sách riêng của bạn — không có "gói mặc định".
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.slug} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">
                    {s.description}
                  </p>
                  <p className="mb-4 text-gold font-medium">
                    {s.price ?? "Liên hệ báo giá"}
                  </p>
                  <ButtonLink href={env.zaloLink} size="md" className="self-start">
                    Tư vấn ngay
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
