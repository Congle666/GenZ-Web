import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { env } from "@/lib/env";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="relative grid min-h-[560px] items-center gap-10 py-20 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5 relative z-10">
          <p className="mb-4 font-script text-3xl text-gold">Shall we begin?</p>
          <h2 className="font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance">
            Hãy kể<br />
            câu chuyện của<br />
            <span className="italic text-gold">riêng bạn.</span>
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg text-ink/70 text-pretty">
            Đội ngũ GenZ luôn sẵn sàng tư vấn miễn phí 1-1. Điền form hoặc nhắn
            Zalo — chúng tôi phản hồi trong 24h.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={env.zaloLink} size="lg">
              Chat Zalo ngay
            </ButtonLink>
            <ButtonLink href="/lien-he" size="lg" variant="outline">
              Gửi yêu cầu tư vấn
            </ButtonLink>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7 relative h-[360px] md:h-full md:min-h-[480px]">
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=85"
              alt="Tiệc cưới lãng mạn — liên hệ GenZ Làm Cưới"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block w-32 h-32 border border-gold/60" />
        </div>
      </Container>
    </section>
  );
}
