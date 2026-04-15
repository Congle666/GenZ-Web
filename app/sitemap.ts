import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.siteUrl;
  const staticRoutes = ["", "/dich-vu", "/portfolio", "/blog", "/lien-he"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );
  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));
  return [...staticRoutes, ...postRoutes];
}
