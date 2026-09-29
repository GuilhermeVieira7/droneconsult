import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogList } from "@/components/BlogList";
import { FinalCta } from "@/components/Closing";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — regularização de drones, MAPA, ANAC, DECEA e ANATEL",
  description: "Artigos e guias sobre regularização de drones, drone agrícola, ANAC, DECEA, MAPA, ANATEL, aerolevantamento e conformidade.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="Blog" title={<>Conteúdo técnico para quem opera com drones.</>} variant={1}>
        <p>Guias, orientações e novidades sobre regularização, drones agrícolas e conformidade.</p>
      </PageHero>
      <BlogList posts={POSTS} />
      <FinalCta />
    </main>
  );
}
