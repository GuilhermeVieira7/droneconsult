import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { TopoMap } from "@/components/TopoMap";
import { Arrow, Reveal, WaIcon } from "@/components/ui";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — fale com um especialista em regularização de drones",
  description: "WhatsApp +55 19 97135-7948, contato@droneconsult.com.br. Escritório em Campinas – SP, atendimento em todo o Brasil.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const row = "border-t border-navy-800/15 py-5";
  return (
    <main>
      <PageHero eyebrow="Contato" title={<>Vamos colocar a sua operação em dia.</>}>
        <p>Atendimento em todo o Brasil. Fale agora pelo WhatsApp ou envie os dados da sua operação.</p>
      </PageHero>

      <section className="bg-paper text-navy-800">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <a href={waLink()} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 bg-cyan px-6 py-5 text-navy-950 transition-colors hover:bg-navy-800 hover:text-white">
                <span className="flex items-center gap-3"><WaIcon className="h-7 w-7" /><span><span className="block text-[17px] font-semibold">Falar no WhatsApp</span><span className="mono opacity-70">{SITE.whatsappDisplay}</span></span></span>
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </a>
              <dl className="mt-10">
                <div className={row}><dt className="mono text-navy-800/50">Telefone</dt><dd className="mt-1 text-lg"><a href={SITE.tel} className="hover:underline">{SITE.whatsappDisplay}</a></dd></div>
                <div className={row}><dt className="mono text-navy-800/50">E-mail</dt><dd className="mt-1 text-lg"><a href={`mailto:${SITE.email}`} className="break-all hover:underline">{SITE.email}</a></dd></div>
                <div className={row}><dt className="mono text-navy-800/50">Endereço</dt><dd className="mt-1 text-lg leading-snug">{SITE.address.map((l) => <span key={l} className="block">{l}</span>)}</dd></div>
                <div className={row}>
                  <dt className="mono text-navy-800/50">Redes</dt>
                  <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-lg">
                    {[["Instagram", SITE.instagramUrl], ["Facebook", SITE.facebookUrl], ["YouTube", SITE.youtubeUrl], ["LinkedIn", SITE.linkedinUrl]].map(([t, h]) => <a key={t} href={h} target="_blank" rel="noopener me" className="hover:underline">{t}</a>)}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal className="border border-navy-800/12 bg-white p-6 md:p-10 lg:col-span-7">
            <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)]">Conte sobre a sua operação</h2>
            <div className="mt-8"><ContactForm /></div>
          </Reveal>
        </div>
      </section>

      {/* Localização */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <TopoMap className="absolute inset-0 -z-10 h-full w-full" opacity={0.3} />
        <div className="mx-auto grid max-w-[1400px] items-end gap-8 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mono text-cyan">Base de operações</p>
            <p className="mono mt-3 text-white/50">22°54′S · 47°03′W</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">Campinas – SP.<br /><span className="text-cyan">Atendimento em todo o Brasil.</span></h2>
          </div>
          <div className="hud border border-white/12 bg-navy-950/60 p-6 md:backdrop-blur-sm lg:col-span-5">
            <p className="text-lg leading-relaxed">{SITE.address.map((l) => <span key={l} className="block">{l}</span>)}</p>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="group mt-6 inline-flex items-center gap-3 bg-cyan px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-white">
              Abrir no Google Maps <Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
