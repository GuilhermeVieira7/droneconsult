"use client";
import Link from "next/link";
import { Arrow, Logo, Reveal, WaIcon } from "./ui";
import { TopoMap } from "./TopoMap";
import { SITE, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="final" className="relative isolate overflow-hidden bg-navy-950 text-white">
      <TopoMap className="absolute inset-0 -z-10 h-full w-full" opacity={0.2} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(22,80,127,.5),transparent_65%)]" />
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="mono text-cyan">Pronto para decolar</p>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2.6rem,7.4vw,7rem)]">
            Seu drone pronto para voar. <span className="text-cyan">Sua operação pronta para crescer.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="/#radar" className="group flex items-center justify-between gap-6 bg-cyan px-7 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-white">
              Regularizar agora <Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="flex items-center justify-center gap-2.5 border border-white/25 px-7 py-4 text-[15px] font-medium transition-colors hover:border-cyan hover:text-cyan">
              <WaIcon className="h-4 w-4" /> Falar com especialista
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const nav = [["Serviços", "/servicos"], ["Como funciona", "/#como-funciona"], ["Sobre", "/sobre"], ["Blog", "/blog"], ["Dúvidas", "/duvidas"], ["Contato", "/contato"]];
  const legal = [["Política de Privacidade", "#"], ["Termos de Uso", "#"]];
  const social = [["Instagram", SITE.instagramUrl], ["Facebook", SITE.facebookUrl], ["YouTube", SITE.youtubeUrl], ["LinkedIn", SITE.linkedinUrl]];
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3"><Logo className="h-11 w-11" /><span className="text-xl font-semibold tracking-tight">Drone<span className="text-cyan">Consult</span></span></div>
          <p className="mt-5 max-w-xs text-steel">Regularização de drones em todo o Brasil.</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {social.map(([t, h]) => <li key={t}><a href={h} target="_blank" rel="noopener me" className="text-white/85 transition-colors hover:text-cyan">{t}</a></li>)}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
          <div>
            <p className="mono text-steel">Navegação</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.map(([t, h]) => <li key={t}><Link href={h} className="text-white/85 transition-colors hover:text-cyan">{t}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mono text-steel">Legal</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {legal.map(([t, h]) => <li key={t}><a href={h} className="text-white/85 transition-colors hover:text-cyan">{t}</a></li>)}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mono text-steel">Contato</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><a href={waLink()} target="_blank" rel="noopener" className="text-white/85 hover:text-cyan">WhatsApp {SITE.whatsappDisplay}</a></li>
              <li><a href={SITE.tel} className="text-white/85 hover:text-cyan">Tel. {SITE.whatsappDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="break-all text-white/85 hover:text-cyan">{SITE.email}</a></li>
              <li className="leading-relaxed text-steel">
                {SITE.address.map((l) => <span key={l} className="block">{l}</span>)}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mono mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-5 py-5 text-white/40 md:px-10">
          <span>© {new Date().getFullYear()} Drone Consult · droneconsult.com.br</span>
          <span>ANAC · DECEA · ANATEL · MAPA · IBAMA · CREA</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()} target="_blank" rel="noopener" aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-cyan px-4 py-3.5 text-navy-950 shadow-[0_8px_30px_rgba(56,212,245,.35)] transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <WaIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold lg:inline">Falar com especialista</span>
    </a>
  );
}
