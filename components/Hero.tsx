"use client";
import { useEffect, useRef, useState } from "react";
import { m as motion, useScroll, useTransform } from "framer-motion";
import { TopoMap } from "./TopoMap";
import { Arrow, WaIcon } from "./ui";
import { waLink } from "@/lib/site";

// Marca oficial da Drone Consult dentro de uma moldura de mira/radar.
function Mark() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="200" cy="200" r="196" fill="none" stroke="#38d4f5" strokeOpacity=".16" strokeDasharray="2 7" />
        <circle cx="200" cy="200" r="168" fill="none" stroke="#38d4f5" strokeOpacity=".1" />
        <g className="sweep" style={{ transformOrigin: "200px 200px", animationDuration: "14s" }}>
          <path d="M200 200L200 4A196 196 0 0 1 290 26z" fill="#38d4f5" fillOpacity=".07" />
        </g>
        {[0, 90, 180, 270].map((a) => (
          <line key={a} x1="200" y1="6" x2="200" y2="24" stroke="#38d4f5" strokeOpacity=".5" transform={`rotate(${a} 200 200)`} />
        ))}
        <path d="M40 70V40h30M360 70V40h-30M40 330v30h30M360 330v30h-30" fill="none" stroke="#38d4f5" strokeWidth="1.2" strokeOpacity=".8" />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.webp" alt="Drone Consult — escudo com drone" width={560} height={606} fetchPriority="high" className="absolute left-1/2 top-1/2 h-[66%] w-auto -translate-x-1/2 -translate-y-1/2 lg:left-[42%] lg:top-[46%] drop-shadow-[0_0_40px_rgba(56,212,245,.25)]" />
    </div>
  );
}

function Telemetry() {
  const [t, setT] = useState({ alt: 120, gps: 14, hdg: 84 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setT((p) => ({
        alt: 120 + Math.round((Math.random() - 0.5) * 2),
        gps: Math.random() > 0.8 ? 13 + Math.round(Math.random() * 2) : p.gps,
        hdg: (p.hdg + 1) % 360,
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const Row = ({ k, v, ok = false }: { k: string; v: string; ok?: boolean }) => (
    <div className="flex items-baseline justify-between gap-6 border-b border-white/10 py-2 last:border-0">
      <span className="mono text-steel">{k}</span>
      <span className={`font-mono text-[13px] tabular-nums ${ok ? "text-cyan" : "text-white"}`}>{v}</span>
    </div>
  );
  return (
    <div className="hud min-w-[210px] border border-white/10 bg-navy-950/60 px-4 py-2 md:backdrop-blur-sm">
      <p className="mono flex items-center gap-2 pb-2 pt-1 text-white/60"><span className="blink h-1.5 w-1.5 rounded-full bg-cyan" /> Telemetria · demo</p>
      <Row k="ALT" v={`${t.alt} m`} />
      <Row k="GPS" v={`${t.gps} SAT`} />
      <Row k="HDG" v={`${String(t.hdg).padStart(3, "0")}°`} />
      <Row k="STATUS" v="AUTORIZADO" ok />
      <Row k="OPERAÇÃO" v="REGULAR" ok />
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const droneY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section id="topo" ref={ref} className="relative isolate overflow-hidden bg-navy-950 text-white">
      <motion.div style={{ y: mapY }} className="absolute inset-[-10%] -z-20">
        <TopoMap className="h-full w-full" opacity={0.22} />
      </motion.div>
      <div className="gridlines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(22,80,127,.45),transparent_60%)]" />

      <div className="mx-auto grid min-h-[100svh] max-w-[1400px] grid-cols-12 px-5 pb-10 pt-28 md:px-10 md:pt-32">
        {/* Drone + telemetria */}
        <motion.div
          style={{ y: droneY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 col-span-12 mx-auto mb-14 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:absolute lg:mb-0 lg:right-[4%] lg:top-[14%] lg:h-[560px] lg:w-[560px]"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="h-full w-full">
            <Mark />
          </motion.div>
          <div className="absolute -bottom-8 -right-6 hidden lg:block"><Telemetry /></div>
          <p className="mono absolute inset-x-0 -bottom-10 flex justify-center gap-3 text-center lg:hidden"><span className="text-white/50">Status</span><span className="text-cyan">Autorizado</span><span className="text-white/50">Operação</span><span className="text-cyan">Regular</span></p>
          <div className="mono absolute -left-2 top-2 hidden text-cyan/80 sm:block lg:-left-4 lg:top-6">
            <span className="block text-white/50">POSIÇÃO</span>
            23°33′S · 46°38′W
          </div>
        </motion.div>

        {/* Texto */}
        <div className="order-2 col-span-12 flex flex-col justify-end lg:col-span-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mono mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-cyan">
            <span className="flex items-center gap-2"><span className="blink h-1.5 w-1.5 rounded-full bg-cyan" />Atendimento em todo o Brasil</span>
            <span className="text-white/40">ANAC · DECEA · MAPA · IBAMA</span>
          </motion.p>
          <h1 className="display text-[clamp(2.6rem,7.6vw,6.8rem)]">
            {["Regularize", "seu drone", "sem burocracia."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block whitespace-nowrap ${i === 2 ? "text-cyan" : ""}`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.9 }} className="mt-8 max-w-xl text-lg leading-relaxed text-fog md:text-xl">
            Especialistas em ANAC, DECEA, MAPA, IBAMA e regularização de drones em todo o Brasil.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#radar" className="group flex items-center justify-between gap-6 bg-cyan px-6 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-white sm:justify-start">
              Regularizar meu drone <Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="group flex items-center justify-between gap-6 border border-white/25 px-6 py-4 text-[15px] font-medium text-white transition-colors hover:border-cyan hover:text-cyan sm:justify-start">
              <span className="flex items-center gap-2.5"><WaIcon className="h-4 w-4" /> Falar com especialista</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Régua inferior */}
      <div className="border-t border-white/10">
        <div className="mono mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-hidden px-5 py-3 text-white/45 md:px-10">
          <span>BR · 27 UFs</span>
          <span className="hidden sm:block">Regularização · Autorização · Conformidade</span>
          <span className="flex items-center gap-2">Role <svg viewBox="0 0 8 12" className="h-3 w-2 animate-bounce motion-reduce:animate-none" fill="none" stroke="currentColor"><path d="M4 0v11M1 8l3 3 3-3" /></svg></span>
        </div>
      </div>
    </section>
  );
}
