// Conteúdo central e editável do site Drone Consult.
// Tudo que está marcado como PLACEHOLDER deve ser substituído por dados reais.

export const SITE = {
  name: "Drone Consult",
  url: "https://droneconsult.com.br",
  instagram: "@droneconsultbr",
  instagramUrl: "https://www.instagram.com/droneconsultbr",
  facebookUrl: "https://www.facebook.com/droneconsult",
  youtubeUrl: "https://www.youtube.com/@DroneCons",
  linkedinUrl: "https://www.linkedin.com/company/drone-consult-br/",
  whatsappDisplay: "+55 19 97135-7948",
  whatsappNumber: "5519971357948",
  tel: "tel:+5519971357948",
  email: "contato@droneconsult.com.br",
  address: ["Rua Comendador Torlogo Dauntre, 74 – Sala 1207", "Helbor Offices · Vila Cambuí", "Campinas – SP · CEP 13025-270"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Helbor Offices, Rua Comendador Torlogo Dauntre, 74, Campinas SP"),
};

export function waLink(message = "Quero saber mais sobre o serviço de regularização de Drones.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ---------- Fatos institucionais ---------- */
export const ABOUT_TEXT = [
  "A Drone Consult possui mais de 10 anos de experiência no setor aeronáutico e 5 anos de atuação focada na certificação e regularização de drones.",
  "A empresa trabalha de forma personalizada, analisando as particularidades de cada operação e estruturando processos voltados à conformidade, segurança e organização documental.",
  "A atuação é direcionada principalmente para operações profissionais e empresariais que precisam lidar com diferentes exigências regulatórias.",
];
export const ABOUT_NUMBERS = [
  { value: "+10", label: "anos no setor aeronáutico" },
  { value: "5", label: "anos focados em certificação e regularização de drones" },
];

/* ---------- PLACEHOLDERS: números reais ---------- */
export const STATS = [
  { value: "+XXX", label: "drones regularizados" },
  { value: "+XXX", label: "clientes atendidos" },
  { value: "XX", label: "estados atendidos" },
];

/* ---------- Situações ---------- */
export const SITUATIONS = [
  { id: "comprei", title: "Comprei um drone", text: "Quero entender o que preciso para operar legalmente.", use: "Recreativo" },
  { id: "tenho", title: "Já tenho um drone", text: "Quero verificar se minha documentação está correta.", use: "Recreativo" },
  { id: "profissional", title: "Uso profissional", text: "Preciso operar comercialmente dentro das normas.", use: "Profissional" },
  { id: "agricola", title: "Drone agrícola", text: "Preciso regularizar minha operação agrícola.", use: "Agrícola" },
  { id: "empresa", title: "Empresa", text: "Preciso estruturar uma operação profissional com drones.", use: "Empresa prestadora de serviço" },
];

/* ---------- Serviços (resumo da home) ---------- */
export const SERVICES = [
  { id: "sisant", code: "ANAC", title: "Cadastro no SISANT", text: "Cadastro do drone na ANAC e vinculação com empresa ou operador." },
  { id: "anatel", code: "ANATEL", title: "Homologação ANATEL", text: "Suporte à homologação de equipamentos e adequação às exigências aplicáveis." },
  { id: "decea", code: "DECEA", title: "Autorização de voo · SARPAS NG", text: "Perfil, equipes, solicitações de voo e orientações sobre espaço aéreo." },
  { id: "aerolevantamento", code: "AERO", title: "Aerolevantamento", text: "Regularização de empresas do enquadramento ao acompanhamento de exigências." },
  { id: "crea", code: "CREA", title: "Cadastro no CREA", text: "Registro da empresa e suporte relacionado a ART e responsável técnico." },
  { id: "ibama", code: "IBAMA", title: "Licença ambiental · IBAMA", text: "Cadastro Técnico Federal, CTF/APP e regularização ambiental aplicável." },
  { id: "mapa", code: "MAPA", title: "SIPEAGRO · MAPA", text: "Regularização junto ao MAPA para atividades aplicáveis, incluindo operações agrícolas." },
  { id: "estadual", code: "UF", title: "Defesa Vegetal Estadual", text: "Acompanhamento de licenças e exigências estaduais conforme o estado de atuação." },
  { id: "documentos", code: "DOCS", title: "Documentos operacionais", text: "ARO, POPs, manuais, inventários e documentos para rastreabilidade e auditorias." },
  { id: "auditoria", code: "AUDIT", title: "Auditoria de conformidade", text: "Diagnóstico, pendências, plano de ação e cronograma até a regularidade completa." },
  { id: "consultoria", code: "CONS", title: "Consultoria regulatória", text: "Diagnóstico claro do que se aplica ao seu equipamento e à sua atividade." },
  { id: "operacoes", code: "OPS", title: "Operações especiais", text: "Análise de cenários fora do comum: áreas restritas, eventos e missões específicas." },
];

/* ---------- Serviços (detalhe da página /servicos) ---------- */
export type ServiceDetail = { id: string; code: string; title: string; lead: string; bullets: string[]; org?: string };
export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id: "sisant", code: "ANAC", title: "Cadastro no SISANT",
    lead: "Suporte para o cadastro do drone na ANAC e para a vinculação com a empresa ou o operador responsável.",
    bullets: ["Cadastro da aeronave não tripulada", "Vinculação com empresa ou operador", "Conferência de dados e documentos", "Orientação sobre atualizações cadastrais"],
  },
  {
    id: "anatel", code: "ANATEL", title: "Homologação ANATEL",
    lead: "Suporte para a homologação de equipamentos e a adequação às exigências aplicáveis a cada modelo e operação.",
    bullets: ["Verificação da situação do equipamento", "Apoio no processo de homologação", "Adequação às exigências aplicáveis", "Organização da documentação de comprovação"],
  },
  {
    id: "decea", code: "DECEA", title: "Autorização de voo · SARPAS NG",
    lead: "Estrutura para solicitar acesso ao espaço aéreo e manter a operação organizada dentro do sistema.",
    bullets: ["Criação de perfil no SARPAS NG", "Gerenciamento de equipes", "Solicitações de autorização de voo", "Orientações sobre espaço aéreo"],
  },
  {
    id: "aerolevantamento", code: "AERO", title: "Aerolevantamento",
    lead: "Regularização específica para empresas que realizam aerolevantamento, do enquadramento à manutenção da regularidade.",
    bullets: ["Enquadramento da atividade", "Checklist documental", "Preparação do processo", "Protocolo", "Acompanhamento de exigências", "Orientações sobre manutenção da regularidade"],
  },
  {
    id: "crea", code: "CREA", title: "Cadastro no CREA",
    lead: "Registro da empresa e suporte nas questões relacionadas a ART e responsável técnico.",
    bullets: ["Registro da empresa", "Suporte relacionado a ART", "Orientação sobre responsável técnico"],
  },
  {
    id: "ibama", code: "IBAMA", title: "Licença ambiental · IBAMA",
    lead: "Cadastros e regularizações ambientais relacionados às operações em que se aplicam.",
    bullets: ["Cadastro Técnico Federal (CTF)", "CTF/APP", "Regularização ambiental relacionada às operações aplicáveis"],
  },
  {
    id: "mapa", code: "MAPA", title: "SIPEAGRO · MAPA",
    lead: "Regularização junto ao MAPA para as atividades aplicáveis, incluindo operações agrícolas com drones.",
    bullets: ["Regularização de empresas de aplicação agrícola", "Suporte ao SIPEAGRO", "Acompanhamento de exigências e obrigações periódicas"],
  },
  {
    id: "estadual", code: "UF", title: "Defesa Vegetal Estadual",
    lead: "A Drone Consult acompanha licenças e exigências estaduais conforme o estado de atuação da sua operação.",
    bullets: ["Levantamento das exigências do estado", "Apoio em licenças e cadastros estaduais", "Acompanhamento junto às defesas agropecuárias"],
    org: "Exemplos: ADAPAR/PR · ADAB/BA · Agrodefesa/GO · SEAGRI/DF · outros estados conforme a operação",
  },
  {
    id: "documentos", code: "DOCS", title: "Documentos operacionais",
    lead: "Criação ou revisão dos documentos que sustentam uma operação profissional e organizada.",
    bullets: ["ARO — Análise de Risco Operacional", "POPs", "Manuais", "Inventário de equipamentos", "Fichas de manutenção", "Documentos para rastreabilidade e auditorias"],
  },
];

export const AUDIT_STEPS = [
  ["Diagnóstico", "Leitura da situação atual da operação."],
  ["Pendências", "Identificação do que falta, por órgão."],
  ["Plano de ação", "Prioridades e responsabilidades definidas."],
  ["Cronograma", "Etapas e prazos claros."],
  ["Regularidade", "Orientação para atingir a regularidade completa."],
];

export const EXTRA_SERVICES = [
  "Consultoria regulatória",
  "Operações especiais",
  "Regularização para empresas",
  "Regularização de drones agrícolas",
  "Suporte documental",
];

/* ---------- Processo ---------- */
export const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Entendemos o modelo de operação, tipo de atividade, frota, localização, estados de atuação e prazos." },
  { n: "02", title: "Plano de regularização", text: "Listamos exigências por órgão, documentos, etapas e pontos de atenção." },
  { n: "03", title: "Execução assistida", text: "A equipe auxilia em cadastros, documentos, protocolos, solicitações e respostas a eventuais exigências." },
  { n: "04", title: "Entrega e manutenção", text: "O cliente recebe os processos organizados e orientações para renovações, atualizações e auditorias futuras." },
];

/* ---------- Por que escolher ---------- */
export const WHY = [
  { title: "Atendimento nacional", text: "Atuação em todo o Brasil, considerando exigências específicas de cada estado." },
  { title: "Especialização", text: "Foco em operações profissionais com drones e conhecimento técnico das exigências regulatórias." },
  { title: "Previsibilidade", text: "Cronogramas claros, checklists e acompanhamento de cada etapa." },
  { title: "Agilidade + Segurança", text: "Redução de retrabalho, pendências e riscos de inconsistência documental." },
];

/* ---------- Órgãos (descrições gerais) ---------- */
export const ORGAOS = [
  { code: "ANAC", name: "Agência Nacional de Aviação Civil", text: "Regulação da aviação civil, incluindo o registro e o cadastro de aeronaves não tripuladas.", coord: "15°52′S 47°55′W" },
  { code: "DECEA", name: "Departamento de Controle do Espaço Aéreo", text: "Gestão do espaço aéreo brasileiro e análise de solicitações de acesso para operações com drones.", coord: "22°54′S 43°10′W" },
  { code: "MAPA", name: "Ministério da Agricultura e Pecuária", text: "Normas para atividades agrícolas, incluindo a aplicação aérea por aeronaves remotamente pilotadas.", coord: "15°47′S 47°52′W" },
  { code: "IBAMA", name: "Instituto Brasileiro do Meio Ambiente", text: "Fiscalização e licenciamento ambiental, relevante para operações em determinadas áreas e finalidades.", coord: "15°45′S 47°53′W" },
];
export const ORGAOS_EXTRA = [
  { code: "ANATEL", text: "Homologação de equipamentos de telecomunicações." },
  { code: "CREA", text: "Registro profissional e empresarial, ART e responsável técnico." },
  { code: "Defesas estaduais", text: "ADAPAR/PR · ADAB/BA · Agrodefesa/GO · SEAGRI/DF · outros conforme a operação." },
];

/* ---------- Prova social: PLACEHOLDERS ---------- */
export const TESTIMONIALS = [
  { quote: "[Depoimento real do cliente — substituir]", name: "Nome do cliente", role: "Segmento · Cidade/UF" },
  { quote: "[Depoimento real do cliente — substituir]", name: "Nome do cliente", role: "Segmento · Cidade/UF" },
  { quote: "[Depoimento real do cliente — substituir]", name: "Nome do cliente", role: "Segmento · Cidade/UF" },
];
export const CASES = [
  { tag: "CASE 01", title: "[Título do case — substituir]", text: "Resumo do desafio, do processo e do resultado." },
  { tag: "CASE 02", title: "[Título do case — substituir]", text: "Resumo do desafio, do processo e do resultado." },
];
export const RATING = { value: "X,X", count: "XX avaliações", note: "PLACEHOLDER — conectar à fonte real (Google, etc.)" };

/* ---------- Quem atendemos ---------- */
export const SEGMENTS = [
  { icon: "agro", label: "Empresas de pulverização com drones" },
  { icon: "inspect", label: "Empresas de inspeção de ativos" },
  { icon: "topo", label: "Empresas de mapeamento" },
  { icon: "geo", label: "Empresas de geologia" },
  { icon: "aero", label: "Aerolevantamento" },
  { icon: "coop", label: "Cooperativas" },
  { icon: "energy", label: "Usinas" },
  { icon: "eng", label: "Empresas de engenharia" },
  { icon: "brief", label: "Prestadores de serviço" },
  { icon: "user", label: "Profissionais liberais" },
];

/* ---------- FAQ (respostas editáveis; sem regras específicas inventadas) ---------- */
export const FAQ = [
  { q: "Preciso registrar meu drone?", a: "A necessidade de registro depende do tipo de equipamento, da finalidade e da forma de operação. Analisamos o seu caso e indicamos exatamente o que se aplica." },
  { q: "Meu drone precisa de autorização do DECEA?", a: "Depende de onde e como você pretende voar. Avaliamos a sua operação e, quando necessário, conduzimos as solicitações de acesso ao espaço aéreo." },
  { q: "Drones abaixo de 250g precisam de regularização?", a: "As exigências podem variar conforme peso, finalidade e local de operação. Antes de voar, vale confirmar a sua situação — fazemos essa análise com você." },
  { q: "Posso voar próximo a aeroportos?", a: "Áreas próximas a aeródromos costumam exigir atenção especial e análise prévia. Nunca opere nessas regiões sem orientação; nossa equipe verifica o cenário e o caminho correto." },
  { q: "O que muda para uso profissional?", a: "Operações profissionais e comerciais tendem a envolver requisitos adicionais em relação ao uso recreativo. Mapeamos o que se aplica à sua atividade." },
  { q: "Quanto tempo leva a regularização?", a: "O prazo depende do tipo de processo, dos órgãos envolvidos e do tempo de resposta de cada um. Informamos uma estimativa realista após o diagnóstico inicial." },
  { q: "Vocês atendem todo o Brasil?", a: "Sim. A Drone Consult atende todos os estados, considerando as exigências específicas de cada um. O atendimento é remoto, com sede em Campinas – SP." },
  { q: "Como funciona para drones agrícolas?", a: "Operações agrícolas envolvem etapas específicas além do cadastro da aeronave. Estruturamos o caminho completo para a sua operação, do diagnóstico ao acompanhamento." },
  { q: "Preciso de CREA para operar com drones?", a: "Depende da atividade e da forma como a operação é estruturada. Avaliamos se há necessidade de registro da empresa, ART ou responsável técnico no seu caso." },
  { q: "O que é CTF/APP do IBAMA?", a: "É um dos cadastros ligados ao IBAMA que podem se aplicar a determinadas atividades. Verificamos se ele é aplicável à sua operação e conduzimos o processo." },
  { q: "Quando devo utilizar o SARPAS NG?", a: "O SARPAS NG é o sistema utilizado para solicitações de acesso ao espaço aéreo. Orientamos quando ele se aplica à sua operação e ajudamos com perfil, equipes e solicitações." },
  { q: "Como funciona a homologação ANATEL?", a: "A homologação diz respeito aos equipamentos e às exigências aplicáveis a cada modelo. Analisamos a situação do seu equipamento e apoiamos o processo." },
  { q: "Quais regularizações uma empresa de pulverização pode precisar?", a: "Isso varia conforme o estado, o tipo de operação e a estrutura da empresa. Em geral envolve mais de um órgão; montamos a lista de exigências por órgão após o diagnóstico." },
  { q: "Como funciona a regularização estadual?", a: "Cada estado possui suas próprias exigências e órgãos de defesa agropecuária. Acompanhamos licenças e exigências conforme o estado de atuação da operação." },
  { q: "A Drone Consult atende todos os estados?", a: "Sim. A atuação é nacional e considera as exigências específicas de cada estado." },
  { q: "Como funciona aerolevantamento?", a: "É um serviço específico, com enquadramento próprio. Apoiamos o enquadramento, o checklist documental, a preparação do processo, o protocolo e o acompanhamento de exigências." },
  { q: "O que é auditoria de conformidade?", a: "É um diagnóstico da situação atual da operação, com identificação de pendências, plano de ação e cronograma para atingir a regularidade completa." },
  { q: "O que são ARO e POP?", a: "ARO é a Análise de Risco Operacional e POP é o Procedimento Operacional Padrão. São documentos que ajudam a organizar e comprovar a operação; criamos ou revisamos conforme a sua atividade." },
  { q: "Como funciona o cadastro no MAPA?", a: "Depende da atividade e do enquadramento da empresa. Verificamos o que se aplica e conduzimos a regularização, incluindo o SIPEAGRO quando aplicável." },
];
export const FAQ_HOME_COUNT = 8;

/* ---------- Radar ---------- */
export const DRONE_MODELS = [
  "DJI Mini 2", "DJI Mini 3", "DJI Mini 3 Pro", "DJI Mini 4 Pro", "DJI Air 2S", "DJI Air 3",
  "DJI Mavic 3", "DJI Mavic 3 Pro", "DJI Mavic 3 Enterprise", "DJI Matrice 30", "DJI Matrice 350 RTK",
  "DJI Phantom 4", "DJI Agras T30", "DJI Agras T40", "DJI Agras T50", "XAG P100", "Autel EVO II", "Parrot Anafi",
];
export const USES = ["Recreativo", "Profissional", "Agrícola", "Inspeção", "Mapeamento", "Aerolevantamento", "Empresa prestadora de serviço", "Audiovisual", "Segurança", "Outros"];
export const TRI = ["Sim", "Não", "Não sei"];
export const YN = ["Sim", "Não"];
export const UFS = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
