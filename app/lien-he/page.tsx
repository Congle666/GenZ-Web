import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { env } from "@/lib/env";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Liên hệ tư vấn",
  description:
    "Liên hệ GenZ Làm Cưới để được tư vấn concept cưới miễn phí 1-1.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-0 pt-28 md:pt-36">
        <Container className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-widest text-ink/50">
              <span className="h-px w-12 bg-gold" />
              <span>Liên hệ · Get in touch</span>
            </div>
            <p className="mb-4 font-script text-4xl text-gold">Say hello</p>
            <h1 className="font-display font-light leading-[1.02] text-5xl md:text-7xl lg:text-8xl text-balance">
              Bắt đầu<br />
              <span className="italic">câu chuyện</span><br />
              của bạn.
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="font-serif text-lg text-ink/70 leading-relaxed text-pretty border-l border-gold/50 pl-6">
              Điền form bên dưới hoặc nhắn Zalo — team GenZ phản hồi trong 24h
              làm việc, không để bạn chờ lâu.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl bg-ivory p-8 md:p-10 shadow-soft">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-ink p-8 text-ivory">
              <h3 className="mb-4 font-display text-2xl">Thông tin liên hệ</h3>
              <ul className="space-y-3 text-sm text-ivory/85">
                <li>
                  <span className="text-ivory/60">Điện thoại: </span>
                  <a href={`tel:${env.phone}`} className="hover:text-gold">
                    {env.phone}
                  </a>
                </li>
                <li>
                  <span className="text-ivory/60">Zalo: </span>
                  <a
                    href={env.zaloLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold"
                  >
                    {env.zaloLink.replace(/^https?:\/\//, "")}
                  </a>
                </li>
                <li>
                  <span className="text-ivory/60">Email: </span>
                  <a href={`mailto:${env.email}`} className="hover:text-gold">
                    {env.email}
                  </a>
                </li>
                <li>
                  <span className="text-ivory/60">Địa chỉ: </span>
                  {env.address}
                </li>
                <li>
                  <span className="text-ivory/60">Giờ làm việc: </span>
                  {siteConfig.workingHours}
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                src={env.mapsEmbed}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                title="Bản đồ studio"
              />
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
