import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackLink, PageHero } from "@/components/PageHero";
import { Arrow, Reveal, WaIcon } from "@/components/ui";
import { FinalCta } from "@/components/Closing";
import { POSTS, formatDate, getPost, neighbors, readingTime, related, slugify } from "@/lib/blog";
import { SITE, waLink } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.title, description: p.excerpt, type: "article", url: `${SITE.url}/blog/${p.slug}`, publishedTime: p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const toc = post.content.filter((b) => b.t === "h2") as { t: "h2"; v: string }[];
  const { prev, next } = neighbors(post);
  const rel = related(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    ...(post.date ? { datePublished: post.date } : {}),
  };

  return (
    <main>
      <PageHero
        eyebrow={post.category}
        title={<span className="block max-w-4xl text-[0.62em] leading-[1.02]">{post.title}</span>}
        variant={1}
        back={{ href: "/blog", label: "Voltar ao blog" }}
      >
        <p className="mono text-steel">
          {formatDate(post.date)} · {post.author} · {readingTime(post)} min de leitura
        </p>
      </PageHero>

      <article className="bg-paper text-navy-800">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Sumário" className="lg:sticky lg:top-24">
              <p className="mono mb-4 text-navy-800/50">Sumário</p>
              <ol className="border-l border-navy-800/15">
                {toc.map((h, i) => (
                  <li key={h.v}>
                    <a href={`#${slugify(h.v)}`} className="-ml-px flex gap-3 border-l border-transparent py-2 pl-4 text-sm leading-snug text-navy-800/70 transition-colors hover:border-cyan-dim hover:text-navy-800">
                      <span className="mono text-cyan-dim">{String(i + 1).padStart(2, "0")}</span>{h.v}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 xl:col-span-7">
            {post.draft && (
              <p className="mono mb-10 border border-dashed border-navy-800/30 px-4 py-3 text-navy-800/60">
                Conteúdo-base editável — substituir pelo texto original do artigo em lib/blog.ts
              </p>
            )}
            <div className="max-w-[42rem] text-[18px] leading-[1.75] text-navy-800/85">
              {post.content.map((b, i) =>
                b.t === "h2" ? (
                  <h2 key={i} id={slugify(b.v)} className="display mb-5 mt-14 scroll-mt-24 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] text-navy-800">{b.v}</h2>
                ) : b.t === "p" ? (
                  <p key={i} className="mb-6">{b.v}</p>
                ) : (
                  <ul key={i} className="mb-6 space-y-2">
                    {b.v.map((li) => <li key={li} className="flex gap-3"><span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-cyan-dim" aria-hidden />{li}</li>)}
                  </ul>
                )
              )}
            </div>

            {/* CTA contextual */}
            <Reveal className="hud mt-14 max-w-[42rem] bg-navy-900 p-7 text-white md:p-9">
              <p className="mono text-cyan">Próximo passo</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{post.cta.title}</h3>
              <p className="mt-2 text-fog">{post.cta.text}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={waLink(post.cta.message)} target="_blank" rel="noopener" className="group flex items-center justify-center gap-2.5 bg-cyan px-5 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-white">
                  <WaIcon className="h-4 w-4" /> Falar com especialista
                </a>
                <Link href="/#radar" className="flex items-center justify-center gap-2 border border-white/25 px-5 py-3.5 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan">
                  Fazer o Radar de Regularização
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Relacionados + navegação */}
      <section className="bg-white text-navy-800">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          {rel.length > 0 && (
            <>
              <p className="mono text-navy-800/50">Artigos relacionados</p>
              <div className="mt-6 border-t border-navy-800/15">
                {rel.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group grid gap-3 border-b border-navy-800/15 py-7 md:grid-cols-12 md:gap-8">
                    <p className="mono text-cyan-dim md:col-span-3">{p.category}</p>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-cyan-dim md:col-span-8">{p.title}</h3>
                    <Arrow className="hidden h-5 w-5 text-navy-800/30 md:col-span-1 md:block md:justify-self-end" />
                  </Link>
                ))}
              </div>
            </>
          )}
          <div className="mt-12"><BackLink href="/blog" label="Voltar ao blog" className="text-navy-800/60 hover:text-navy-800" /></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group border border-navy-800/15 p-5 transition-colors hover:border-navy-800">
                <p className="mono text-navy-800/50">← Anterior</p><p className="mt-2 font-semibold leading-snug">{prev.title}</p>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group border border-navy-800/15 p-5 text-right transition-colors hover:border-navy-800">
                <p className="mono text-navy-800/50">Próximo →</p><p className="mt-2 font-semibold leading-snug">{next.title}</p>
              </Link>
            ) : <Link href="/blog" className="border border-navy-800/15 p-5 text-right transition-colors hover:border-navy-800"><p className="mono text-navy-800/50">Blog</p><p className="mt-2 font-semibold">Ver todos os artigos →</p></Link>}
          </div>
        </div>
      </section>

      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
