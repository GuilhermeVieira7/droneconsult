"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { Arrow, Eyebrow, Reveal, WaIcon } from "./ui";
import { DRONE_MODELS, TRI, UFS, USES, YN, waLink } from "@/lib/site";

type F = {
  model: string; use: string; reg: string; decea: string; airport: string;
  anatel: string; sarpas: string; agri: string; company: string; rt: string; uf: string;
};
const EMPTY: F = { model: "", use: "", reg: "", decea: "", airport: "", anatel: "", sarpas: "", agri: "", company: "", rt: "", uf: "" };

function Choice({ label, name, options, value, onChange }: { label: string; name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mono mb-3 text-steel">{label}</legend>
      <div className="flex flex-wrap gap-2" role="radiogroup">
        {options.map((o) => {
          const on = value === o;
          return (
            <label key={o} className={`cursor-pointer border px-4 py-2.5 text-sm transition-all duration-300 ${on ? "border-cyan bg-cyan text-navy-950 font-semibold" : "border-white/15 text-white/80 hover:border-cyan/60"}`}>
              <input type="radio" name={name} value={o} checked={on} onChange={() => onChange(o)} className="sr-only" />
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Radar() {
  const [f, setF] = useState<F>(EMPTY);
  const [done, setDone] = useState(false);
  const [more, setMore] = useState(false);
  const set = (k: keyof F) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    const h = (e: Event) => {
      const use = (e as CustomEvent).detail?.use as string;
      if (use) { setF((p) => ({ ...p, use })); setDone(false); }
    };
    window.addEventListener("radar:preset", h);
    return () => window.removeEventListener("radar:preset", h);
  }, []);

  const filled = [f.model, f.use, f.reg, f.decea, f.airport].filter(Boolean).length;
  const ready = filled === 5;

  const msg = `Olá, Drone Consult! Fiz o Radar de Regularização no site e gostaria de uma análise.

• Drone: ${f.model || "não informado"}
• Uso: ${f.use || "não informado"}
• Cadastro na ANAC: ${f.reg || "não informado"}
• Autorização DECEA: ${f.decea || "não informado"}
• Operação próxima a aeroportos: ${f.airport || "não informado"}
• Homologação ANATEL: ${f.anatel || "não informado"}
• Utiliza SARPAS: ${f.sarpas || "não informado"}
• Aplicação agrícola: ${f.agri || "não informado"}
• Empresa registrada: ${f.company || "não informado"}
• Responsável técnico: ${f.rt || "não informado"}
• Estado de atuação: ${f.uf || "não informado"}`;

  return (
    <section id="radar" className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div className="gridlines absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        {/* Radar visual */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Diagnóstico interativo</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Radar de Regularização</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
              Responda 5 perguntas rápidas. Sua análise segue pronta para o WhatsApp — sem formulário longo, sem cadastro.
            </p>
          </Reveal>
          <div className="relative mx-auto mt-12 aspect-square w-full max-w-[380px]" aria-hidden>
            <svg viewBox="0 0 200 200" className="h-full w-full">
              {[95, 70, 45, 20].map((r) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#38d4f5" strokeOpacity=".28" />)}
              <path d="M100 5v190M5 100h190" stroke="#38d4f5" strokeOpacity=".2" />
              <g className="sweep">
                <defs>
                  <linearGradient id="sw" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#38d4f5" stopOpacity="0" />
                    <stop offset="1" stopColor="#38d4f5" stopOpacity=".45" />
                  </linearGradient>
                </defs>
                <path d="M100 100L100 5A95 95 0 0 1 160 26z" fill="url(#sw)" />
                <line x1="100" y1="100" x2="100" y2="5" stroke="#38d4f5" strokeWidth="1.2" />
              </g>
              {/* Pontos acendem conforme as respostas */}
              {[[130, 60], [58, 78], [140, 128], [72, 138], [100, 40]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3.5" fill="#38d4f5" style={{ opacity: i < filled ? 1 : 0.15, transition: "opacity .6s" }} />
              ))}
            </svg>
            <p className="mono absolute -bottom-7 left-0 text-cyan">{filled}/5 sinais capturados</p>
          </div>
        </div>

        {/* Formulário */}
        <div className="lg:col-span-7">
          <div className="hud border border-white/12 bg-navy-950/60 p-6 md:backdrop-blur-sm md:p-10">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                  className="space-y-8"
                >
                  <div>
                    <label htmlFor="model" className="mono mb-3 block text-steel">01 · Qual seu drone?</label>
                    <input
                      id="model" list="models" value={f.model} onChange={(e) => set("model")(e.target.value)}
                      placeholder="Selecione ou digite o modelo"
                      className="w-full border border-white/15 bg-transparent px-4 py-3.5 text-base text-white placeholder:text-white/35 focus:border-cyan focus:outline-none"
                    />
                    <datalist id="models">{DRONE_MODELS.map((m) => <option key={m} value={m} />)}</datalist>
                  </div>
                  <Choice label="02 · Como você utiliza?" name="use" options={USES} value={f.use} onChange={set("use")} />
                  <Choice label="03 · Seu drone já possui cadastro?" name="reg" options={TRI} value={f.reg} onChange={set("reg")} />
                  <Choice label="04 · Você já possui autorização do DECEA?" name="decea" options={TRI} value={f.decea} onChange={set("decea")} />
                  <Choice label="05 · Precisa operar próximo a aeroportos?" name="airport" options={YN} value={f.airport} onChange={set("airport")} />

                  <div className="border-t border-white/10 pt-6">
                    <button type="button" onClick={() => setMore(!more)} aria-expanded={more} className="mono flex items-center gap-2 text-cyan hover:text-white">
                      <span className={`inline-block transition-transform ${more ? "rotate-45" : ""}`}>+</span> Refinar análise (opcional)
                    </button>
                    <AnimatePresence initial={false}>
                      {more && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          <div className="space-y-8 pt-8">
                            <Choice label="Possui homologação ANATEL?" name="anatel" options={TRI} value={f.anatel} onChange={set("anatel")} />
                            <Choice label="Utiliza SARPAS?" name="sarpas" options={TRI} value={f.sarpas} onChange={set("sarpas")} />
                            <Choice label="Realiza aplicação agrícola?" name="agri" options={YN} value={f.agri} onChange={set("agri")} />
                            <Choice label="Possui empresa registrada?" name="company" options={YN} value={f.company} onChange={set("company")} />
                            <Choice label="Possui responsável técnico?" name="rt" options={TRI} value={f.rt} onChange={set("rt")} />
                            <div>
                              <label htmlFor="uf" className="mono mb-3 block text-steel">Atua em qual estado?</label>
                              <select id="uf" value={f.uf} onChange={(e) => set("uf")(e.target.value)} className="w-full border border-white/15 bg-navy-950 px-4 py-3.5 text-base text-white focus:border-cyan focus:outline-none sm:w-64">
                                <option value="">Selecione</option>
                                {UFS.map((u) => <option key={u} value={u}>{u}</option>)}
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button type="submit" disabled={!ready} className="group flex w-full items-center justify-between gap-4 bg-cyan px-6 py-4 text-[15px] font-semibold text-navy-950 transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-cyan sm:w-auto sm:justify-start">
                    Verificar minha situação <Arrow className="transition-transform group-hover:translate-x-1" />
                  </button>
                  {!ready && <p className="mono -mt-3 text-white/40">Responda todas as perguntas para continuar</p>}
                </motion.form>
              ) : (
                <motion.div key="res" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                  <p className="mono flex items-center gap-2 text-cyan"><span className="blink h-1.5 w-1.5 rounded-full bg-cyan" /> Análise iniciada</p>
                  <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                    Com base nas informações fornecidas, nossa equipe pode avaliar quais etapas de regularização podem ser necessárias.
                  </p>
                  <dl className="mt-8 grid gap-px border border-white/10 bg-white/10 text-sm sm:grid-cols-2">
                    {([["Drone", f.model], ["Uso", f.use], ["Cadastro ANAC", f.reg], ["DECEA", f.decea], ["Aeroportos", f.airport], ["ANATEL", f.anatel], ["SARPAS", f.sarpas], ["Aplicação agrícola", f.agri], ["Empresa registrada", f.company], ["Resp. técnico", f.rt], ["Estado", f.uf]] as const).filter(([, v]) => v).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 bg-navy-950 px-4 py-3">
                        <dt className="mono text-steel">{k}</dt><dd className="text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={waLink(msg)} target="_blank" rel="noopener" className="group flex items-center justify-center gap-3 bg-cyan px-6 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-white">
                      <WaIcon /> Enviar análise pelo WhatsApp
                    </a>
                    <button onClick={() => setDone(false)} className="px-6 py-4 text-sm text-steel underline-offset-4 hover:text-white hover:underline">Editar respostas</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
