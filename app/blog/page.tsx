import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { posts } from "@/content/posts";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Blog — Cẩm nang cưới",
  description:
    "Xu hướng concept cưới, kinh nghiệm tổ chức và lời khuyên từ team GenZ Làm Cưới.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export default function BlogPage() {
  const categories = Array.from(new Set(posts.flatMap((p) => p.categories)));
  const popular = posts.slice(0, 3);

  return (
    <>
      <Section className="pb-0 pt-28 md:pt-36">
        <Container className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-widest text-ink/50">
              <span className="h-px w-12 bg-gold" />
              <span>Blog · Journal</span>
            </div>
            <p className="mb-4 font-script text-4xl text-gold">Wedding journal</p>
            <h1 className="font-display font-light leading-[1.02] text-5xl md:text-7xl lg:text-8xl text-balance">
              Cẩm nang<br />
              cho <span className="italic">cặp đôi</span><br />
              sắp cưới.
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="font-serif text-lg text-ink/70 leading-relaxed text-pretty border-l border-gold/50 pl-6">
              Xu hướng, kinh nghiệm và những lời khuyên tinh gọn từ team GenZ.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <Card className="h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.mainImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {p.categories.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-pink-soft/50 px-3 py-0.5 text-xs text-ink/70"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <h2 className="mb-2 font-display text-xl leading-tight group-hover:text-gold transition-colors">
                      {p.title}
                    </h2>
                    <p className="flex-1 text-sm text-ink/70 leading-relaxed">
                      {p.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-ink/50">
                      {formatDate(p.publishedAt)}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="mb-4 font-display text-lg">Bài phổ biến</h3>
              <ul className="space-y-4">
                {popular.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={p.mainImage}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="text-sm leading-snug group-hover:text-gold transition-colors">
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                          {formatDate(p.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-display text-lg">Danh mục</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-ink p-6 text-ivory">
              <p className="mb-2 font-display text-xl">Cần tư vấn?</p>
              <p className="mb-4 text-sm text-ivory/75">
                Nhắn Zalo để được hỗ trợ 1-1 miễn phí.
              </p>
              <ButtonLink href={env.zaloLink} size="md">
                Chat Zalo
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
