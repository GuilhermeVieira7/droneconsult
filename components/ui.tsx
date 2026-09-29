"use client";
import { m as motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-mark-sm.webp" alt="" aria-hidden className={`${className} object-contain`} width={96} height={104} decoding="async" />
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mono flex items-center gap-3 ${light ? "text-navy-600" : "text-cyan"}`}>
      <span className={`h-px w-8 ${light ? "bg-navy-600" : "bg-cyan"}`} />
      {children}
    </p>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.5 5 5.1-1.4A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.4 1.3-1.95 1.35-.5.05-1.1.07-1.8-.12-.4-.13-.95-.3-1.6-.6-2.8-1.2-4.6-4-4.75-4.2-.13-.2-1.1-1.5-1.1-2.8s.7-2 .95-2.25c.25-.27.5-.3.7-.3h.5c.17 0 .4-.05.6.45.25.55.8 1.9.85 2 .07.13.1.3 0 .5-.1.2-.15.3-.3.47l-.45.5c-.13.15-.27.3-.1.6.15.3.7 1.15 1.5 1.85 1 .9 1.9 1.2 2.15 1.3.3.13.45.1.6-.07.2-.2.7-.8.9-1.1.2-.3.4-.25.65-.15.27.1 1.7.8 2 .95.3.15.5.2.55.3.08.1.08.6-.15 1.25z" />
    </svg>
  );
}

const P: Record<string, string> = {
  camera: "M3 8h4l2-3h6l2 3h4v11H3zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  agro: "M12 21V11M12 11c0-4-3-6-7-6 0 4 3 6 7 6zM12 14c0-3 2.5-5 6-5 0 3-2.5 5-6 5z",
  eng: "M3 20L20 3l1 1-3 3 2 2-2 2-2-2-2 2 2 2-2 2-2-2-2 2 2 2-2 2zM3 20h6",
  build: "M4 21V8l8-4 8 4v13M4 21h16M9 21v-5h6v5M8 11h2M14 11h2",
  energy: "M13 2L4 14h7l-1 8 9-12h-7z",
  inspect: "M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM16 16l5 5M8 10.5h5M10.5 8v5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  topo: "M2 18c3-1 4-5 7-5s3 3 6 3 4-6 7-6M2 13c3-1 4-6 7-6s3 3 6 3 4-5 7-5M2 22h20",
  home: "M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6",
  event: "M12 3l2.5 5.5 6 .8-4.4 4.1 1.1 6L12 16.5 6.8 19.4l1.1-6L3.5 9.3l6-.8z",
  geo: "M3 20l5-9 4 5 3-6 6 10zM8 11l2-3",
  aero: "M2 12l20-8-6 16-4-7zM12 13l10-9",
  coop: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 3-5 6-5s6 2 6 5M14 15c3 0 8 1 8 5",
  brief: "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6",
};
export function SegIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={P[name]} />
    </svg>
  );
}
