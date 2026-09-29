// Estrutura do blog. Para adicionar um artigo: inclua um objeto em POSTS.
// Blocos de conteúdo: h2 (entra no sumário), p, ul.

export const BLOG_CATEGORIES = ["Regularização", "Drone Agrícola", "ANAC", "DECEA", "MAPA", "ANATEL", "Aerolevantamento", "Conformidade"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type Block = { t: "h2"; v: string } | { t: "p"; v: string } | { t: "ul"; v: string[] };

export type Post = {
  slug: string;
  title: string;
  category: BlogCategory;
  date?: string; // ISO (AAAA-MM-DD). Se vazio, exibe "Data a definir".
  author: string;
  excerpt: string;
  draft?: boolean; // true = conteúdo-base a ser substituído pelo texto original
  cta: { title: string; text: string; message: string };
  content: Block[];
};

const AUTHOR = "Equipe Drone Consult";

export const POSTS: Post[] = [
  {
    slug: "relatorio-mensal-mapa-sei-como-enviar-2026",
    title: "Relatório Mensal MAPA SEI: Como Enviar em 2026 – Guia Completo",
    category: "MAPA",
    author: AUTHOR,
    excerpt: "Entenda como organizar as informações e o envio do relatório mensal ao MAPA por meio do SEI, e como evitar pendências.",
    draft: true,
    cta: {
      title: "Precisa de ajuda com as obrigações junto ao MAPA?",
      text: "Nossa equipe organiza o processo e acompanha as exigências da sua operação.",
      message: "Olá! Li o artigo sobre o Relatório Mensal MAPA SEI e gostaria de ajuda com a regularização junto ao MAPA.",
    },
    content: [
      { t: "p", v: "Empresas que atuam com aplicação agrícola, incluindo operações com drones, podem ter obrigações periódicas de prestação de informações ao MAPA. Este guia organiza o passo a passo para manter esse envio em dia." },
      { t: "h2", v: "O que é o relatório mensal" },
      { t: "p", v: "O relatório mensal reúne informações sobre a atividade da empresa em determinado período. Prazos, formato e campos podem mudar; confirme sempre a orientação vigente antes de enviar." },
      { t: "h2", v: "O que reunir antes de enviar" },
      { t: "ul", v: ["Dados cadastrais e registros da empresa", "Informações das operações realizadas no período", "Documentação de apoio e rastreabilidade", "Acesso ativo ao sistema SEI"] },
      { t: "h2", v: "Como enviar pelo SEI" },
      { t: "p", v: "O envio é feito por processo eletrônico no SEI. Recomenda-se conferir os dados, anexar os documentos solicitados e guardar o comprovante do protocolo." },
      { t: "h2", v: "Erros comuns e como evitar" },
      { t: "ul", v: ["Deixar o envio para o último dia do prazo", "Inconsistência entre registros e relatório", "Perder o controle de pendências e exigências"] },
      { t: "h2", v: "Quando vale contar com apoio especializado" },
      { t: "p", v: "Quando a operação envolve mais de um estado, vários equipamentos ou equipes, uma rotina organizada reduz retrabalho. A Drone Consult pode estruturar essa rotina junto com você." },
    ],
  },
  {
    slug: "cartilha-drones-pulverizacao-seguranca-regularizacao",
    title: "Cartilha de drones de pulverização reúne orientações sobre segurança e regularização",
    category: "Drone Agrícola",
    author: AUTHOR,
    excerpt: "Um resumo do que a cartilha aborda sobre segurança operacional e regularização de drones de pulverização.",
    draft: true,
    cta: {
      title: "Sua operação de pulverização está regularizada?",
      text: "Fazemos o diagnóstico e apontamos o que falta, órgão por órgão.",
      message: "Olá! Li o artigo sobre a cartilha de drones de pulverização e gostaria de um diagnóstico da minha operação agrícola.",
    },
    content: [
      { t: "p", v: "A cartilha de drones de pulverização reúne orientações voltadas à segurança das operações e à regularização das atividades. Aqui, um panorama para quem está estruturando ou revisando a própria operação." },
      { t: "h2", v: "Por que segurança e regularização andam juntas" },
      { t: "p", v: "Uma operação organizada documentalmente tende a ser também mais segura: procedimentos claros, equipe treinada e registros em dia reduzem riscos." },
      { t: "h2", v: "Pontos de atenção na operação" },
      { t: "ul", v: ["Planejamento prévio da aplicação", "Análise de risco operacional", "Procedimentos operacionais padronizados", "Manutenção e controle de equipamentos"] },
      { t: "h2", v: "Regularização: por onde começar" },
      { t: "p", v: "O caminho envolve, conforme o caso, ANAC, DECEA, MAPA e órgãos estaduais. O primeiro passo é um diagnóstico da operação, do estado de atuação e da estrutura da empresa." },
      { t: "h2", v: "Como a Drone Consult pode ajudar" },
      { t: "p", v: "Montamos o plano de regularização, acompanhamos os processos e organizamos a documentação para renovações e auditorias." },
    ],
  },
];

export function slugify(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
export function readingTime(p: Post) {
  const words = p.content.map((b) => (b.t === "ul" ? b.v.join(" ") : b.v)).join(" ").split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 200));
}
export function formatDate(d?: string) {
  if (!d) return "Data a definir";
  return new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
export function related(p: Post, n = 2) {
  return [...POSTS.filter((x) => x.slug !== p.slug)].sort((a, b) => Number(b.category === p.category) - Number(a.category === p.category)).slice(0, n);
}
export function neighbors(p: Post) {
  const i = POSTS.findIndex((x) => x.slug === p.slug);
  return { prev: POSTS[i - 1], next: POSTS[i + 1] };
}
