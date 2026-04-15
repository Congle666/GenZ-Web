import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    num: "01",
    title: "Lắng nghe",
    desc: "Chúng tôi gặp nhau, lắng nghe câu chuyện tình yêu và concept bạn đang hình dung.",
  },
  {
    num: "02",
    title: "Mood board",
    desc: "Team art director xây mood board 2-3 hướng, bạn chọn hoặc mix match theo ý.",
  },
  {
    num: "03",
    title: "Thiết kế 3D",
    desc: "Không còn đoán — render 3D sảnh lễ, bàn tiệc, backdrop trước khi setup.",
  },
  {
    num: "04",
    title: "Set up tận tâm",
    desc: "Đội ngũ 12 người có mặt trước 6 tiếng, chỉn chu từng cành hoa, từng vệt nến.",
  },
  {
    num: "05",
    title: "Bàn giao",
    desc: "Album behind-the-scenes tặng riêng, lưu lại khoảnh khắc đẹp nhất của team.",
  },
];

// Native horizontal scroll with snap — no scroll hijack, user stays in control.
export function ProcessStrip() {
  return (
    <Section className="bg-ivory overflow-hidden">
      <Container className="grid gap-6 md:grid-cols-12 md:items-end mb-12">
        <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3 text-gold">
          <span className="font-display italic text-3xl">05</span>
          <span className="h-px w-12 md:w-px md:h-24 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-ink/50">
            Quy trình
          </span>
        </div>
        <div className="md:col-span-8">
          <p className="mb-3 font-script text-3xl text-gold">How we work</p>
          <h2 className="font-display font-light leading-[1.05] text-4xl md:text-6xl text-balance">
            5 bước để biến<br />
            ý tưởng thành <span className="italic">hiện thực.</span>
          </h2>
        </div>
        <p className="md:col-span-3 text-[10px] uppercase tracking-widest text-ink/40">
          ← Kéo ngang để xem các bước
        </p>
      </Container>

      <div className="relative">
        <ul
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((s) => (
            <li
              key={s.num}
              className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] border-t border-ink/15 pt-8 relative"
            >
              <span className="absolute left-0 -top-0.5 h-1 w-12 bg-gold" />
              <p className="font-display italic text-gold text-5xl mb-6">
                {s.num}
              </p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                {s.title}
              </h3>
              <p className="font-serif text-lg text-ink/70 leading-relaxed text-pretty">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
