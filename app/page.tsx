import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Situations } from "@/components/Situations";
import { Radar } from "@/components/Radar";
import { Services, Process, Orgaos, Proof, Segments, Alert, Faq } from "@/components/Sections";
import { AboutTeaser, Why } from "@/components/About";
import { FinalCta } from "@/components/Closing";
import { FAQ, SITE } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.whatsappDisplay,
    email: SITE.email,
    areaServed: { "@type": "Country", name: "Brasil" },
    address: { "@type": "PostalAddress", streetAddress: "Rua Comendador Torlogo Dauntre, 74 – Sala 1207", addressLocality: "Campinas", addressRegion: "SP", postalCode: "13025-270", addressCountry: "BR" },
    description: "Regularização de drones em todo o Brasil: ANAC, DECEA, ANATEL, MAPA, IBAMA e CREA.",
    sameAs: [SITE.instagramUrl, SITE.facebookUrl, SITE.youtubeUrl, SITE.linkedinUrl],
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Authority />
        <Situations />
        <Radar />
        <Services />
        <Process />
        <Orgaos />
        <AboutTeaser />
        <Why />
        <Proof />
        <Segments />
        <Alert />
        <Faq />
        <FinalCta />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
