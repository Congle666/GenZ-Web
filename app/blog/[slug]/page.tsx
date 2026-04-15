import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { posts } from "@/content/posts";
import { env } from "@/lib/env";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Bài viết" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.mainImage] },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export default function BlogDetailPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.mainImage],
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${env.siteUrl}/images/logo.jpg` },
    },
    mainEntityOfPage: `${env.siteUrl}/blog/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Section className="pb-0 pt-20 md:pt-28">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </Container>
        <Container className="max-w-3xl text-center mt-8">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {post.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-pink-soft/60 px-3 py-1 text-xs text-ink/70"
              >
                {c}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            {formatDate(post.publishedAt)}
          </p>
        </Container>
      </Section>

      <Container className="mt-10 max-w-4xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-soft">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </Container>

      <Section className="pt-12">
        <Container className="max-w-3xl">
          <div className="prose-lg font-serif text-lg leading-relaxed text-ink/85 whitespace-pre-line">
            {post.body}
          </div>

          <div className="mt-12 flex flex-col items-center rounded-3xl bg-pink-soft/30 p-8 text-center">
            <p className="mb-2 font-display text-2xl">Thích bài viết này?</p>
            <p className="mb-4 text-ink/70">
              Nhắn Zalo để team GenZ tư vấn concept cưới riêng cho bạn.
            </p>
            <ButtonLink href={env.zaloLink}>Chat Zalo ngay</ButtonLink>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 font-display text-2xl">Bài viết liên quan</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block"
                  >
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={r.mainImage}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <p className="font-display text-lg leading-snug group-hover:text-gold transition-colors">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </article>
  );
}
