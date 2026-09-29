"use client";
import { useRef, useState } from "react";
import { AnimatePresence, m as motion, useScroll, useSpring } from "framer-motion";
import { Arrow, Eyebrow, Reveal, SegIcon, WaIcon } from "./ui";
import { TopoMap } from "./TopoMap";
import Link from "next/link";
import { ABOUT_NUMBERS, ABOUT_TEXT, CASES, FAQ as FAQ_ALL, FAQ_HOME_COUNT, ORGAOS, ORGAOS_EXTRA, RATING, SEGMENTS, SERVICES, STEPS, TESTIMONIALS, WHY, waLink } from "@/lib/site";

/* ---------------- SERVIÇOS ---------------- */
export function Services() {
  return (
    <section id="servicos" className="bg-paper text-navy-800">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow light>Serviços</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Tudo o que sua operação precisa para voar dentro das normas.</h2>
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8 lg:justify-end">
            <Link href="/servicos" className="group flex items-center gap-3 border border-navy-800/25 px-5 py-3 text-sm font-semibold transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-white">
              Ver todos os serviços <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px border border-navy-800/12 bg-navy-800/12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06} y={14} className="group relative bg-paper transition-colors duration-500 hover:bg-navy-800 hover:text-white">
              <Link href={`/servicos#${s.id}`} className="block p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="mono border border-current/25 px-2 py-1 text-cyan-dim transition-colors group-hover:border-cyan/40 group-hover:text-cyan">{s.code}</span>
                  <span className="mono text-navy-800/30 group-hover:text-white/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-12 text-xl font-semibold leading-tight tracking-tight md:text-[22px]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-800/65 group-hover:text-fog">{s.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO FUNCIONA ---------------- */
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <section id="como-funciona" className="relative isolate overflow-hidden bg-navy-950 text-white">
      <TopoMap variant={1} className="absolute inset-0 -z-10 h-full w-full" opacity={0.1} />
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)]">Da primeira mensagem à operação regularizada.</h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* linha progressiva: vertical no mobile, horizontal no desktop */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 lg:hidden" />
          <motion.div style={{ scaleY: p, transformOrigin: "top" }} className="absolute bottom-0 left-[15px] top-0 w-px bg-cyan lg:hidden" />
          <div className="absolute left-0 right-0 top-[15px] hidden h-px bg-white/10 lg:block" />
          <motion.div style={{ scaleX: p, transformOrigin: "left" }} className="absolute left-0 right-0 top-[15px] hidden h-px bg-cyan lg:block" />

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="relative pl-12 lg:pl-0 lg:pt-14">
                <span className="absolute left-0 top-0 grid h-[31px] w-[31px] place-items-center border border-cyan bg-navy-950 font-mono text-[10px] text-cyan">
                  {s.n}
                </span>
                <p className="display text-[clamp(4rem,8vw,7rem)] text-white/[0.07]">{s.n}</p>
                <h3 className="-mt-6 text-xl font-semibold leading-snug tracking-tight lg:-mt-10">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ÓRGÃOS ---------------- */
export function Orgaos() {
  return (
    <section className="bg-white text-navy-800">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow light>Órgãos</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Regularização completa nos principais órgãos</h2>
        </Reveal>
        <div className="mt-16 border-t border-navy-800/15">
          {ORGAOS.map((o, i) => (
            <Reveal key={o.code} delay={i * 0.05} y={14}>
              <div className="group grid items-center gap-4 border-b border-navy-800/15 py-8 transition-colors md:grid-cols-12 md:gap-8 md:py-10">
                <p className="display text-[clamp(3rem,9vw,7.5rem)] text-navy-800 transition-colors duration-500 group-hover:text-cyan-dim md:col-span-5">{o.code}</p>
                <div className="md:col-span-5">
                  <p className="text-lg font-semibold tracking-tight">{o.name}</p>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy-800/65">{o.text}</p>
                </div>
                <p className="mono text-navy-800/35 md:col-span-2 md:text-right">{o.coord}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-px bg-navy-800/12 md:grid-cols-3">
          {ORGAOS_EXTRA.map((o) => (
            <Reveal key={o.code} y={10} className="bg-white py-6 md:pr-6">
              <p className="text-xl font-semibold tracking-tight">{o.code}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-800/65">{o.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mono mt-6 text-navy-800/40">Descrições gerais e ilustrativas. Marcas e logotipos pertencem aos respectivos órgãos.</p>
      </div>
    </section>
  );
}

/* ---------------- PROVA SOCIAL ---------------- */
export function Proof() {
  return (
    <section className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Prova social</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Quem voa regularizado, recomenda.</h2>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-6 lg:justify-end">
            <div className="border border-dashed border-white/25 px-6 py-4">
              <p className="display text-5xl">{RATING.value}<span className="text-cyan">★</span></p>
              <p className="mono mt-2 text-steel">{RATING.count}</p>
              <p className="mono mt-1 text-white/30">Placeholder editável</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-navy-900 p-7 md:p-9">
              <span className="font-mono text-3xl text-cyan">“</span>
              <p className="mt-2 min-h-[6rem] text-lg leading-relaxed text-white/85">{t.quote}</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="h-9 w-9 shrink-0 rounded-full border border-dashed border-white/30" />
                <div><p className="text-sm font-semibold">{t.name}</p><p className="mono text-steel">{t.role}</p></div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={i} className="hud border border-white/12 p-7 md:p-9">
              <p className="mono text-cyan">{c.tag}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-steel">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARA QUEM É ---------------- */
export function Segments() {
  return (
    <section id="quem-atendemos" className="bg-white text-navy-800">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow light>Quem atendemos</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Onde há drone em operação, há regularização.</h2>
          </div>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-px border border-navy-800/12 bg-navy-800/12 md:grid-cols-5">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 5) * 0.04} y={10} className="group bg-white p-5 transition-colors hover:bg-paper md:p-7">
              <li className="list-none">
                <span className="text-navy-600 transition-colors group-hover:text-cyan-dim"><SegIcon name={s.icon} /></span>
                <p className="mt-10 text-[15px] font-medium leading-snug md:mt-14">{s.label}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- ALERTA ---------------- */
export function Alert() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800 text-white">
      <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#38d4f5 0 1px,transparent 1px 14px)" }} />
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="mono flex items-center gap-3 text-cyan">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l10 18H2zM12 10v5M12 18v.5" /></svg>
            Ponto de atenção
          </p>
          <h2 className="display mt-6 text-[clamp(2.2rem,5.4vw,5rem)]">Seu drone pode estar irregular sem você saber.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">
            Operações sem os registros ou autorizações adequadas podem gerar restrições, multas e impedir o uso profissional do equipamento.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:justify-self-end">
          <a href="#radar" className="group flex items-center justify-between gap-6 bg-white px-7 py-5 text-[15px] font-semibold text-navy-800 transition-colors hover:bg-cyan">
            Verificar meu drone <Arrow className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq({ all = false }: { all?: boolean }) {
  const FAQ = all ? FAQ_ALL : FAQ_ALL.slice(0, FAQ_HOME_COUNT);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="bg-white text-navy-800">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow light>Dúvidas frequentes</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Perguntas que todo piloto faz.</h2>
          <a href={waLink("Olá! Tenho uma dúvida sobre regularização de drones.")} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-600 underline-offset-4 hover:underline">
            <WaIcon className="h-4 w-4" /> Não achou sua dúvida? Pergunte a um especialista
          </a>
          {!all && (
            <Link href="/duvidas" className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy-800 underline-offset-4 hover:underline">
              Ver todas as dúvidas ({FAQ_ALL.length}) <Arrow />
            </Link>
          )}
        </Reveal>
        <div className="lg:col-span-8">
          <div className="border-t border-navy-800/15">
            {FAQ.map((f, i) => {
              const o = open === i;
              return (
                <div key={f.q} className="border-b border-navy-800/15">
                  <h3>
                    <button onClick={() => setOpen(o ? null : i)} aria-expanded={o} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-tight md:text-xl">
                      {f.q}
                      <span className="relative h-4 w-4 shrink-0">
                        <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
                        <span className={`absolute left-1/2 top-0 h-4 w-px bg-current transition-transform duration-300 ${o ? "scale-y-0" : ""}`} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {o && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="max-w-2xl pb-7 text-[16px] leading-relaxed text-navy-800/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
