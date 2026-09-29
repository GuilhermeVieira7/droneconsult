import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/servicos", "/sobre", "/blog", "/duvidas", "/contato"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
