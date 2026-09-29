import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Arrow, Eyebrow, Reveal, WaIcon } from "@/components/ui";
import { TopoMap } from "@/components/TopoMap";
import { FinalCta } from "@/components/Closing";
import { AUDIT_STEPS, EXTRA_SERVICES, SERVICES_DETAIL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços de regularização de drones: SISANT, ANATEL, SARPAS NG, MAPA, IBAMA e CREA",
  description:
    "Cadastro no SISANT (ANAC), homologação ANATEL, SARPAS NG (DECEA), aerolevantamento, CREA, CTF/APP (IBAMA), SIPEAGRO (MAPA), defesa vegetal estadual, documentos operacionais e auditoria de conformidade.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES_DETAIL.map((s, i) => ({
      "@type": "ListItem", position: i + 1,
      item: { "@type": "Service", name: s.title, description: s.lead, provider: { "@type": "Organization", name: "Drone Consult" }, areaServed: "BR" },
    })),
  };
  return (
    <main>
      <PageHero eyebrow="Serviços" title={<>Regularização de drones, órgão por órgão.</>}>
        <p>Cada operação tem exigências próprias. Aqui está tudo o que a Drone Consult conduz para deixar a sua em conformidade — de pessoa física a empresas com frotas em vários estados.</p>
      </PageHero>

      <section className="bg-paper text-navy-800">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          {/* Índice fixo (radar-like) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Índice de serviços" className="sticky top-24">
              <p className="mono mb-4 text-navy-800/50">Índice</p>
              <ul className="border-l border-navy-800/15">
                {SERVICES_DETAIL.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px flex items-center gap-3 border-l border-transparent py-2 pl-4 text-sm text-navy-800/65 transition-colors hover:border-cyan-dim hover:text-navy-800">
                      <span className="mono w-14 text-cyan-dim">{s.code}</span>{s.title.split(" · ")[0]}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#auditoria" className="-ml-px flex items-center gap-3 border-l border-transparent py-2 pl-4 text-sm text-navy-800/65 transition-colors hover:border-cyan-dim hover:text-navy-800">
                    <span className="mono w-14 text-cyan-dim">AUDIT</span>Auditoria de conformidade
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            {SERVICES_DETAIL.map((s, i) => (
              <Reveal key={s.id} y={16}>
                <article id={s.id} className="scroll-mt-24 border-t border-navy-800/15 py-12 first:border-t-0 first:pt-0 md:py-16">
                  <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-5">
                      <p className="mono flex items-center gap-3 text-cyan-dim">
                        <span className="border border-cyan-dim/40 px-2 py-1">{s.code}</span>
                        <span className="text-navy-800/35">{String(i + 1).padStart(2, "0")}</span>
                      </p>
                      <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">{s.title}</h2>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-lg leading-relaxed text-navy-800/75">{s.lead}</p>
                      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-[15px] leading-snug text-navy-800/80">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan-dim" aria-hidden />{b}
                          </li>
                        ))}
                      </ul>
                      {s.org && <p className="mono mt-6 text-navy-800/50">{s.org}</p>}
                      <a href={waLink(`Olá! Gostaria de saber mais sobre: ${s.title}.`)} target="_blank" rel="noopener" className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-navy-800 underline-offset-4 hover:underline">
                        <WaIcon className="h-4 w-4" /> Falar sobre este serviço <Arrow className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Auditoria de conformidade */}
      <section id="auditoria" className="relative isolate scroll-mt-16 overflow-hidden bg-navy-950 text-white">
        <TopoMap variant={1} className="absolute inset-0 -z-10 h-full w-full" opacity={0.14} />
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Auditoria de conformidade</Eyebrow>
              <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Saiba exatamente onde a sua operação está.</h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-fog lg:col-span-4 lg:col-start-9 lg:self-end">
              Um mapa claro da sua situação atual e do caminho até a regularidade completa.
            </p>
          </Reveal>
          <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {AUDIT_STEPS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06} y={12} className="bg-navy-950 p-6 md:p-7">
                <li className="list-none">
                  <p className="mono text-cyan">0{i + 1}</p>
                  <h3 className="mt-10 text-xl font-semibold tracking-tight">{t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-steel">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10">
            <a href={waLink("Olá! Gostaria de solicitar uma auditoria de conformidade da minha operação com drones.")} target="_blank" rel="noopener" className="group inline-flex items-center gap-3 bg-cyan px-6 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-white">
              Solicitar auditoria <Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Frentes complementares */}
      <section className="bg-white text-navy-800">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <Reveal>
            <Eyebrow light>Também atendemos</Eyebrow>
            <ul className="mt-8 flex flex-wrap gap-3">
              {EXTRA_SERVICES.map((e) => <li key={e} className="border border-navy-800/20 px-4 py-2.5 text-[15px]">{e}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
