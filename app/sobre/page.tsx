import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AboutNumbers, Why } from "@/components/About";
import { Orgaos, Segments } from "@/components/Sections";
import { FinalCta } from "@/components/Closing";
import { Arrow, Eyebrow, Reveal } from "@/components/ui";
import { ABOUT_TEXT, STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Drone Consult — experiência aeronáutica em regularização de drones",
  description:
    "Mais de 10 anos de experiência no setor aeronáutico e 5 anos focados em certificação e regularização de drones. Atendimento personalizado para operações profissionais e empresariais em todo o Brasil.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <main>
      <PageHero eyebrow="Sobre a empresa" title={<>Conformidade, segurança e organização documental.</>} variant={1}>
        <p>{ABOUT_TEXT[0]}</p>
      </PageHero>

      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="gridlines absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5"><AboutNumbers /></div>
          <Reveal className="space-y-6 text-lg leading-relaxed text-fog lg:col-span-6 lg:col-start-7">
            <p>{ABOUT_TEXT[1]}</p>
            <p>{ABOUT_TEXT[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* Método */}
      <section className="bg-white text-navy-800">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow light>Como trabalhamos</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Cada operação é analisada individualmente.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px border border-navy-800/12 bg-navy-800/12 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} y={12} className="bg-white p-7">
                <li className="list-none">
                  <p className="mono text-cyan-dim">{s.n}</p>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-800/65">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Link href="/servicos" className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
            Ver todos os serviços <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Why />
      <Segments />
      <Orgaos />
      <FinalCta />
    </main>
  );
}
