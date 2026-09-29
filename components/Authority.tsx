import { Reveal } from "./ui";
import { STATS } from "@/lib/site";

const PILLARS = [
  ["Atendimento em todo o Brasil", "100% remoto, todos os estados"],
  ["Especialistas em regulamentação", "Foco exclusivo em aeronaves remotamente pilotadas"],
  ["Suporte do início ao fim", "Da análise ao acompanhamento"],
  ["Processos junto aos principais órgãos", "ANAC · DECEA · ANATEL · MAPA · IBAMA · CREA"],
];

export function Authority() {
  return (
    <section className="bg-paper text-navy-800" aria-label="Autoridade">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-px overflow-hidden border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(([t, s], i) => (
            <Reveal key={t} delay={i * 0.06} y={12} className="bg-paper p-6 md:p-7">
              <p className="mono mb-5 text-navy-600">0{i + 1}</p>
              <p className="text-lg font-semibold leading-snug tracking-tight">{t}</p>
              <p className="mt-2 text-sm text-navy-800/60">{s}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 md:mt-16">
          {STATS.map((s) => (
            <Reveal key={s.label} className="border-l border-navy-800/20 pl-4 md:pl-6">
              <p className="display text-[clamp(2rem,6.5vw,5.5rem)] text-navy-800">{s.value}</p>
              <p className="mono mt-2 text-navy-800/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mono mt-6 text-navy-800/40">Números ilustrativos — editar em lib/site.ts</p>
      </div>
    </section>
  );
}
