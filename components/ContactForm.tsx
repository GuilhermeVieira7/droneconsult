"use client";
import { useState } from "react";
import { Arrow, WaIcon } from "./ui";
import { SITE, UFS, waLink } from "@/lib/site";

const INTERESTS = [
  "Cadastro no SISANT (ANAC)", "Homologação ANATEL", "SARPAS NG / DECEA", "Aerolevantamento", "CREA",
  "IBAMA · CTF/APP", "SIPEAGRO · MAPA", "Defesa Vegetal Estadual", "Documentos operacionais", "Auditoria de conformidade", "Ainda não sei",
];

const field = "w-full border border-navy-800/20 bg-white px-4 py-3.5 text-base text-navy-800 placeholder:text-navy-800/35 focus:border-navy-800 focus:outline-none";
const label = "mono mb-2 block text-navy-800/60";

export function ContactForm() {
  const [v, setV] = useState({ name: "", phone: "", email: "", company: "", uf: "", interest: "", msg: "" });
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const ok = v.name.trim() && v.phone.trim();

  const body = `Olá, Drone Consult! Vim pelo site e gostaria de atendimento.

• Nome: ${v.name || "-"}
• WhatsApp/Telefone: ${v.phone || "-"}
• E-mail: ${v.email || "-"}
• Empresa: ${v.company || "-"}
• Estado: ${v.uf || "-"}
• Interesse: ${v.interest || "-"}
• Mensagem: ${v.msg || "-"}`;

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (ok) window.open(waLink(body), "_blank", "noopener"); }} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={label} htmlFor="c-name">Nome *</label><input id="c-name" className={field} value={v.name} onChange={on("name")} autoComplete="name" required /></div>
        <div><label className={label} htmlFor="c-phone">WhatsApp / Telefone *</label><input id="c-phone" className={field} value={v.phone} onChange={on("phone")} autoComplete="tel" inputMode="tel" required /></div>
        <div><label className={label} htmlFor="c-email">E-mail</label><input id="c-email" type="email" className={field} value={v.email} onChange={on("email")} autoComplete="email" /></div>
        <div><label className={label} htmlFor="c-company">Empresa</label><input id="c-company" className={field} value={v.company} onChange={on("company")} autoComplete="organization" /></div>
        <div>
          <label className={label} htmlFor="c-uf">Estado de atuação</label>
          <select id="c-uf" className={field} value={v.uf} onChange={on("uf")}><option value="">Selecione</option>{UFS.map((u) => <option key={u}>{u}</option>)}</select>
        </div>
        <div>
          <label className={label} htmlFor="c-int">Interesse</label>
          <select id="c-int" className={field} value={v.interest} onChange={on("interest")}><option value="">Selecione</option>{INTERESTS.map((u) => <option key={u}>{u}</option>)}</select>
        </div>
      </div>
      <div><label className={label} htmlFor="c-msg">Mensagem</label><textarea id="c-msg" rows={4} className={field} value={v.msg} onChange={on("msg")} /></div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={!ok} className="group flex items-center justify-center gap-3 bg-navy-800 px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-cyan hover:text-navy-950 disabled:cursor-not-allowed disabled:opacity-40">
          <WaIcon className="h-5 w-5" /> Enviar pelo WhatsApp <Arrow className="transition-transform group-hover:translate-x-1" />
        </button>
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Contato pelo site")}&body=${encodeURIComponent(body)}`} className="px-2 py-3 text-sm font-medium text-navy-800 underline-offset-4 hover:underline">
          ou enviar por e-mail
        </a>
      </div>
      <p className="mono text-navy-800/45">Ao enviar, sua mensagem é aberta no WhatsApp já preenchida.</p>
    </form>
  );
}
