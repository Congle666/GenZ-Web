import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const stats = [
  { value: "200+", label: "Tiệc cưới đã thực hiện" },
  { value: "05", label: "Năm kinh nghiệm" },
  { value: "98%", label: "Khách hàng giới thiệu bạn bè" },
  { value: "12", label: "Thành viên đội ngũ" },
];

export function About() {
  return (
    <Section className="relative overflow-hidden bg-ivory pt-24 md:pt-32">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Section index label */}
        <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 text-gold">
          <span className="font-display italic text-3xl">01</span>
          <span className="h-px w-12 lg:w-px lg:h-24 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-ink/50">
            Về chúng tôi
          </span>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <p className="mb-4 font-script text-3xl text-gold">Our story</p>
          <h2 className="mb-8 font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance">
            Kể câu chuyện của bạn bằng{" "}
            <span className="italic">ánh sáng</span> &amp;{" "}
            <span className="italic">hoa tươi</span>.
          </h2>
          <div className="space-y-5 font-serif text-lg leading-relaxed text-ink/75 text-pretty">
            <p>
              GenZ Làm Cưới là studio trang trí cưới thế hệ mới — nơi tinh thần
              lãng mạn Á Đông gặp gỡ ngôn ngữ thiết kế đương đại. Chúng tôi từ
              chối những concept sao chép, từ chối những bàn tiệc "copy-paste".
            </p>
            <p>
              Mỗi cặp đôi là một câu chuyện riêng. Và chúng tôi ở đây để kể câu
              chuyện ấy — bằng từng cành hoa, từng vệt nến, từng chất liệu vải.
            </p>
          </div>

          <div className="mt-10 inline-flex items-center gap-4 text-sm uppercase tracking-widest text-ink/60">
            <span className="h-px w-10 bg-ink/30" />
            <span>Est. 2020 · Sài Gòn</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85"
              alt="GenZ Làm Cưới studio — đội ngũ thiết kế"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block w-40 h-40 border border-gold/60" />
        </div>
      </Container>

      {/* Stats strip */}
      <Container className="mt-24 md:mt-32">
        <div className="grid gap-8 border-y border-ink/10 py-10 md:grid-cols-4 md:divide-x md:divide-ink/10">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:px-6 first:md:pl-0 last:md:pr-0">
              <p className="font-display text-4xl md:text-5xl text-gold">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-ink/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
