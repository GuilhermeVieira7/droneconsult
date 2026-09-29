import Link from "next/link";
import { Arrow, Eyebrow, Reveal } from "./ui";
import { TopoMap } from "./TopoMap";
import { ABOUT_NUMBERS, ABOUT_TEXT, WHY } from "@/lib/site";

export function Why({ bg = "paper" }: { bg?: "paper" | "white" }) {
  return (
    <section className={`${bg === "paper" ? "bg-paper" : "bg-white"} text-navy-800`}>
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow light>Diferenciais</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Por que escolher a Drone Consult</h2>
        </Reveal>
        <ol className="lg:col-span-7">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} y={12}>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy-800/15 py-7 last:border-b md:grid-cols-[4rem_14rem_1fr]">
                <span className="mono text-cyan-dim">0{i + 1}</span>
                <h3 className="text-xl font-semibold tracking-tight">{w.title}</h3>
                <p className="col-span-2 text-[15px] leading-relaxed text-navy-800/70 md:col-span-1">{w.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutNumbers() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {ABOUT_NUMBERS.map((n) => (
        <Reveal key={n.label} className="hud border border-white/12 p-5 md:p-7">
          <p className="display text-[clamp(3rem,6vw,5.5rem)] text-cyan">{n.value}</p>
          <p className="mono mt-3 text-steel">{n.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function AboutTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <TopoMap className="absolute inset-0 -z-10 h-full w-full" opacity={0.12} />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Eyebrow>Sobre a empresa</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Experiência aeronáutica aplicada à regularização de drones.</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">{ABOUT_TEXT[1]}</p>
          <Link href="/sobre" className="group mt-9 inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-[15px] font-medium transition-colors hover:border-cyan hover:text-cyan">
            Conhecer a Drone Consult <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="self-end lg:col-span-5"><AboutNumbers /></div>
      </div>
    </section>
  );
}
