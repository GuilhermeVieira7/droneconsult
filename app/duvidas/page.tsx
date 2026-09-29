import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Sections";
import { FinalCta } from "@/components/Closing";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dúvidas frequentes sobre regularização de drones",
  description:
    "Respostas sobre registro de drone, SARPAS NG, homologação ANATEL, CREA, CTF/APP, MAPA, SIPEAGRO, aerolevantamento, auditoria de conformidade, ARO e POP.",
  alternates: { canonical: "/duvidas" },
};

export default function DuvidasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main>
      <PageHero eyebrow="Dúvidas frequentes" title={<>Perguntas que todo operador faz.</>}>
        <p>Respostas gerais para orientar você. Cada caso é único: fale com um especialista para uma avaliação da sua operação.</p>
      </PageHero>
      <Faq all />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
