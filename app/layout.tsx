import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Footer, WhatsAppFloat } from "@/components/Closing";
import { SITE } from "@/lib/site";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--f-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Regularização de Drones em Todo o Brasil | ANAC, DECEA, MAPA e IBAMA — Drone Consult",
    template: "%s | Drone Consult",
  },
  description:
    "Regularização de drones em todo o Brasil: ANAC (SISANT), DECEA (SARPAS NG), ANATEL, MAPA (SIPEAGRO), IBAMA (CTF/APP), CREA e defesas estaduais. Consultoria para operações profissionais e drone agrícola.",
  keywords: [
    "regularização de drones", "regularizar drone", "ANAC drone", "DECEA drone", "SARPAS NG", "homologação ANATEL drone",
    "MAPA drone agrícola", "SIPEAGRO drone", "CREA drone", "IBAMA drone", "CTF APP", "aerolevantamento drone",
    "regularização drone agrícola", "consultoria de drones", "licença drone agrícola", "empresa de drone", "documentação drone profissional",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone Consult — Regularização de drones em todo o Brasil",
    description: "ANAC, DECEA, ANATEL, MAPA, IBAMA e CREA. Seu drone legalizado, sua operação sem preocupação.",
    url: SITE.url, siteName: SITE.name, locale: "pt_BR", type: "website",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080 }],
  },
  icons: { icon: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#030d17", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
