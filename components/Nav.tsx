"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo, Arrow } from "./ui";
import { waLink } from "@/lib/site";

const LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? "bg-navy-950/90 md:bg-navy-950/85 md:backdrop-blur-md border-b border-white/10" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="Drone Consult — início" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            Drone<span className="text-cyan">Consult</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="mono text-steel transition-colors hover:text-white">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={waLink()} target="_blank" rel="noopener" className="group hidden items-center gap-2 bg-cyan px-4 py-2.5 text-[13px] font-semibold text-navy-950 transition-colors hover:bg-white sm:flex">
            Falar com especialista <Arrow className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center text-white lg:hidden" aria-expanded={open} aria-label="Menu">
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-full bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 text-lg text-white">
              {l.label} <Arrow className="text-cyan" />
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className="mt-5 flex items-center justify-center gap-2 bg-cyan py-3.5 text-sm font-semibold text-navy-950">
            Falar com especialista
          </a>
        </nav>
      )}
    </header>
  );
}
