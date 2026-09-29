"use client";
import { useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { Arrow, Eyebrow, Reveal } from "./ui";
import { SITUATIONS } from "@/lib/site";

export function Situations() {
  const [active, setActive] = useState<string>(SITUATIONS[0].id);

  const go = (use: string) => {
    window.dispatchEvent(new CustomEvent("radar:preset", { detail: { use } }));
    document.getElementById("radar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="situacao" className="bg-white text-navy-800">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow light>Ponto de partida</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Qual é a sua situação?</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-navy-800/65">
              Escolha o cenário que mais se parece com o seu. Levamos você direto ao que importa.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-navy-800/15">
            {SITUATIONS.map((s, i) => {
              const open = active === s.id;
              return (
                <li key={s.id} className="border-b border-navy-800/15">
                  <button
                    onClick={() => setActive(s.id)}
                    onMouseEnter={() => setActive(s.id)}
                    aria-expanded={open}
                    className="group flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-8"
                  >
                    <span className={`mono w-8 transition-colors ${open ? "text-cyan-dim" : "text-navy-800/40"}`}>0{i + 1}</span>
                    <span className={`flex-1 text-2xl font-semibold tracking-tight transition-all duration-500 md:text-4xl ${open ? "translate-x-2 text-navy-800" : "text-navy-800/45"}`}>
                      {s.title}
                    </span>
                    <span className={`grid h-9 w-9 place-items-center border transition-all duration-500 ${open ? "rotate-90 border-navy-800 bg-navy-800 text-white" : "border-navy-800/20 text-navy-800/40"}`}>
                      <Arrow />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pb-8 pl-13 md:flex-row md:items-center md:justify-between md:pl-16">
                          <p className="max-w-md text-lg text-navy-800/70">{s.text}</p>
                          <button onClick={() => go(s.use)} className="group/b flex w-fit items-center gap-3 bg-navy-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-navy-950">
                            Ver o que preciso <Arrow className="transition-transform group-hover/b:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
