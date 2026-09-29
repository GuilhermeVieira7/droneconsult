import type { ReactNode } from "react";
import Link from "next/link";
import { TopoMap } from "./TopoMap";
import { Arrow, Eyebrow, Reveal } from "./ui";

export function BackLink({ href, label, className = "text-steel hover:text-cyan" }: { href: string; label: string; className?: string }) {
  return (
    <Link href={href} className={`mono group inline-flex items-center gap-2 transition-colors ${className}`}>
      <Arrow className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" /> {label}
    </Link>
  );
}

export function PageHero({ eyebrow, title, children, variant = 0, back = { href: "/", label: "Voltar ao início" } }: { eyebrow: string; title: ReactNode; children?: ReactNode; variant?: 0 | 1; back?: { href: string; label: string } }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <TopoMap variant={variant} className="absolute inset-0 -z-20 h-full w-full" opacity={0.2} />
      <div className="gridlines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(22,80,127,.4),transparent_60%)]" />
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="mb-10"><BackLink href={back.href} label={back.label} /></div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display mt-6 max-w-5xl text-[clamp(2.4rem,6.4vw,5.8rem)]">{title}</h1>
          {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-fog md:text-xl">{children}</div>}
        </Reveal>
      </div>
      <div className="border-t border-white/10" />
    </section>
  );
}
