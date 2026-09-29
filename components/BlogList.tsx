"use client";
import { useState } from "react";
import Link from "next/link";
import { Arrow, Reveal } from "./ui";
import { BLOG_CATEGORIES, formatDate, readingTime, type Post } from "@/lib/blog";

export function BlogList({ posts }: { posts: Post[] }) {
  const [cat, setCat] = useState<string>("Todos");
  const list = cat === "Todos" ? posts : posts.filter((p) => p.category === cat);
  const counts = (c: string) => posts.filter((p) => p.category === c).length;

  return (
    <section className="bg-paper text-navy-800">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorias">
          {["Todos", ...BLOG_CATEGORIES].map((c) => {
            const on = cat === c;
            const n = c === "Todos" ? posts.length : counts(c);
            return (
              <button key={c} role="tab" aria-selected={on} onClick={() => setCat(c)} className={`mono border px-3.5 py-2 transition-colors ${on ? "border-navy-800 bg-navy-800 text-white" : "border-navy-800/20 text-navy-800/70 hover:border-navy-800"}`}>
                {c} <span className={on ? "text-cyan" : "text-navy-800/35"}>{n}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 border-t border-navy-800/15">
          {list.map((p, i) => (
            <Reveal key={p.slug} y={12} delay={i * 0.05}>
              <Link href={`/blog/${p.slug}`} className="group grid gap-4 border-b border-navy-800/15 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="mono text-cyan-dim">{p.category}</p>
                  <p className="mono mt-2 text-navy-800/45">{formatDate(p.date)} · {readingTime(p)} min</p>
                </div>
                <div className="md:col-span-8">
                  <h2 className={`font-semibold tracking-tight transition-colors group-hover:text-cyan-dim ${i === 0 && cat === "Todos" ? "text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.05]" : "text-2xl leading-tight"}`}>{p.title}</h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy-800/65">{p.excerpt}</p>
                </div>
                <div className="hidden justify-end md:col-span-1 md:flex"><Arrow className="mt-2 h-6 w-6 text-navy-800/30 transition-all group-hover:translate-x-1 group-hover:text-cyan-dim" /></div>
              </Link>
            </Reveal>
          ))}
          {list.length === 0 && <p className="border-b border-navy-800/15 py-12 text-navy-800/60">Ainda não há artigos nesta categoria. Novos conteúdos em breve.</p>}
        </div>
        <p className="mono mt-8 text-navy-800/40">Novos artigos são adicionados em lib/blog.ts</p>
      </div>
    </section>
  );
}
