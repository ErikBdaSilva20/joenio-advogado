import { useState } from 'react'
import heroBg from '../assets/portfolio/hero-bg.png'
import profissional from '../assets/portfolio/profissional.png'
import logoCompleto from '../assets/portfolio/logo-completo.png'
import emblemaCircular from '../assets/portfolio/emblema-circular.png'
import iconEstudos from '../assets/portfolio/icons/icon-estudos.png'
import iconSobre from '../assets/portfolio/icons/icon-sobre.png'
import iconContato from '../assets/portfolio/icons/icon-contato.png'
import iconCredito from '../assets/portfolio/icons/icon-credito.png'
import iconDireito from '../assets/portfolio/icons/icon-direito.png'
import iconSaude from '../assets/portfolio/icons/icon-saude.png'

const CONTAINER = 'mx-auto max-w-6xl'

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Método' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#publico', label: 'Para quem' },
  { href: '#contato', label: 'Contato' },
]

const CREDENCIAIS = [
  { titulo: 'Pós-graduado', texto: 'Direito Tributário — Facuminas' },
  { titulo: 'Graduado em Direito', texto: 'UNINTA' },
  { titulo: 'Ciências Biológicas', texto: 'Graduando — UECE' },
  { titulo: 'Atuação', texto: 'Estratégica e preventiva' },
]

const FORMACAO = [
  { ano: 'Formação', titulo: 'Graduação em Direito', local: 'UNINTA' },
  { ano: 'Especialização', titulo: 'Pós-graduação em Direito Tributário', local: 'Facuminas' },
  { ano: 'Em curso', titulo: 'Ciências Biológicas', local: 'UECE' },
]

const PILARES = [
  {
    titulo: 'Ética',
    texto: 'Cada caso conduzido com transparência e responsabilidade.',
    detalhe: 'As decisões são sempre explicadas antes de executadas — nenhuma medida é tomada sem o cliente entender o porquê e o risco envolvido.',
  },
  {
    titulo: 'Transparência',
    texto: 'Clareza em cada etapa da estratégia tributária.',
    detalhe: 'Relatórios simples, sem juridiquês, mostrando o que foi feito, o que está em andamento e o que ainda falta — para o cliente nunca ficar no escuro.',
  },
  {
    titulo: 'Confiança',
    texto: 'Construída com atitude, não só com conhecimento técnico.',
    detalhe: 'Presença ativa em todas as fases do processo, com retorno rápido e previsibilidade — a confiança vem do acompanhamento próximo, não só do resultado final.',
  },
]

const METODO = [
  {
    passo: '01',
    titulo: 'Diagnóstico',
    texto: 'Mapeamento completo da estrutura tributária da empresa, antes de qualquer decisão.',
    detalhe: 'Levantamento do regime tributário, histórico de recolhimentos e obrigações acessórias para identificar riscos e oportunidades reais.',
  },
  {
    passo: '02',
    titulo: 'Estratégia',
    texto: 'Definição do plano de ação com foco em economia legal e segurança jurídica.',
    detalhe: 'Cada medida é avaliada pelo retorno financeiro e pelo risco jurídico, priorizando o que traz mais segurança no menor prazo.',
  },
  {
    passo: '03',
    titulo: 'Execução',
    texto: 'Implementação das medidas de planejamento, compliance ou recuperação de créditos.',
    detalhe: 'Condução de todas as etapas administrativas e, quando necessário, judiciais, com prazos e responsáveis bem definidos.',
  },
  {
    passo: '04',
    titulo: 'Acompanhamento',
    texto: 'Monitoramento contínuo para manter a empresa sempre em dia e protegida.',
    detalhe: 'Revisões periódicas para captar mudanças na legislação e ajustar a estratégia antes que virem passivo.',
  },
]

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--color-gold)',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ICONS = {
  metodo: (
    <svg {...svgProps} className="h-4 w-4"><path d="M4 6h16M4 12h11M4 18h7" /></svg>
  ),
  diferenciais: (
    <svg {...svgProps} className="h-4 w-4"><path d="M12 3 5 6v5c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6l-7-3Z" /></svg>
  ),
  servicos: (
    <svg {...svgProps} className="h-4 w-4"><path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" /><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>
  ),
  publico: (
    <svg {...svgProps} className="h-4 w-4"><circle cx="9" cy="8" r="3" /><path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" /><circle cx="17.5" cy="9.5" r="2.2" /><path d="M15 19c0-2 1.1-3.6 3-4.2" /></svg>
  ),
  pessoaFisica: (
    <svg {...svgProps} className="h-3.5 w-3.5"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c0-4 2.9-6.3 6.5-6.3s6.5 2.3 6.5 6.3" /></svg>
  ),
  contencioso: (
    <svg {...svgProps} className="h-3.5 w-3.5"><path d="M12 3 4 7.5h16L12 3Z" /><path d="M5.5 10.5V19M9.5 10.5V19M14.5 10.5V19M18.5 10.5V19M3 19h18" /></svg>
  ),
  instagram: (
    <svg {...svgProps} className="h-4.5 w-4.5"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.3" /><circle cx="16.3" cy="7.7" r="0.6" fill="var(--color-gold)" stroke="none" /></svg>
  ),
  redes: (
    <svg {...svgProps} className="h-4.5 w-4.5"><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.3 2.3 2.3 13.7 0 16M12 4c-2.3 2.3-2.3 13.7 0 16" /></svg>
  ),
}

const whatsappIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
  </svg>
)

const SERVICOS_GRUPOS = [
  {
    categoria: 'Planejamento & Compliance',
    icon: iconDireito,
    itens: [
      { titulo: 'Planejamento Tributário', texto: 'Análise da estrutura fiscal para otimização da carga tributária, redução de riscos e melhoria da eficiência fiscal.' },
      { titulo: 'Compliance Tributário', texto: 'Verificação do cumprimento correto das obrigações tributárias principais e acessórias.' },
    ],
  },
  {
    categoria: 'Recuperação de Créditos Tributários',
    icon: iconCredito,
    itens: [
      { titulo: 'Simples Nacional', texto: 'Identificação e recuperação de créditos pagos indevidamente ou a maior nesse regime.' },
      { titulo: 'Lucro Presumido', texto: 'Levantamento de valores recuperáveis observando os requisitos legais do regime.' },
      { titulo: 'Lucro Real', texto: 'Análise detalhada da apuração para recuperação de créditos tributários.' },
      { titulo: 'Produtos Monofásicos', texto: 'Recuperação tributária para empresas que comercializam produtos com tributação concentrada.' },
      { titulo: 'ICMS-ST', texto: 'Análise de operações sujeitas à substituição tributária em busca de valores indevidos ou restituíveis.' },
    ],
  },
  {
    categoria: 'Pessoa Física',
    icon: ICONS.pessoaFisica,
    itens: [
      { titulo: 'Isenção de IR por Doença Grave', texto: 'Para aposentados e pensionistas enquadrados nas hipóteses legais de isenção. Análise do histórico e condução do requerimento administrativo ou judicial para reaver valores retidos indevidamente, com acompanhamento até a restituição.' },
    ],
  },
  {
    categoria: 'Saúde',
    icon: iconSaude,
    itens: [
      { titulo: 'Equiparação Hospitalar', texto: 'Aplicação do tratamento tributário de serviços hospitalares a clínicas médicas e odontológicas (IRPJ/CSLL).' },
    ],
  },
  {
    categoria: 'Contencioso',
    icon: ICONS.contencioso,
    itens: [
      { titulo: 'Defesa em Execuções Fiscais', texto: 'Defesa técnica de empresas e contribuintes cobrados judicialmente por dívida ativa.' },
    ],
  },
]

const SEGMENTOS = [
  {
    titulo: 'Empresários',
    texto: 'De 25 a 70 anos, em capitais, regiões metropolitanas e sedes municipais — planejamento, compliance e recuperação de créditos.',
    detalhe: 'Empresas do Simples Nacional, Lucro Presumido ou Lucro Real que querem pagar só o que devem e recuperar o que já pagaram a mais.',
  },
  {
    titulo: 'Aposentados e Pensionistas',
    texto: 'Enquadrados nas hipóteses legais de isenção de Imposto de Renda por doença grave.',
    detalhe: 'Quem teve o IR retido indevidamente sobre proventos de aposentadoria ou pensão pode reaver os valores dos últimos anos.',
  },
  {
    titulo: 'Clínicas e Hospitais',
    texto: 'Clínicas médicas e odontológicas com possibilidade de equiparação hospitalar.',
    detalhe: 'Estrutura e serviços avaliados para enquadramento correto no regime tributário mais vantajoso, dentro da lei.',
  },
]

/** Badge circular navy + traço dourado, para seções sem ícone pronto no acervo — segue o mesmo tamanho/forma dos ícones em PNG. */
function IconBadge({ children, className = 'h-8 w-8' }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] ${className}`}>
      {children}
    </span>
  )
}

function SectionLabel({ children, dark = false, icon }) {
  return (
    <div className="flex items-center gap-3">
      {typeof icon === 'string' ? (
        <img src={icon} alt="" aria-hidden="true" className="h-8 w-8 rounded-full" />
      ) : icon ? (
        <IconBadge>{icon}</IconBadge>
      ) : null}
      <span className="h-px w-8 bg-[var(--color-gold)]" />
      <p className={`text-xs font-bold uppercase tracking-[0.25em] ${dark ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold-light)]'}`}>
        {children}
      </p>
    </div>
  )
}

/** Card translúcido com borda dourada fina, para uso sobre fundo azul (igual aos carrosséis do Instagram). */
function NavyCard({ children, className = '' }) {
  return (
    <div className={`rounded-[var(--radius-card,20px)] border border-[var(--color-gold)]/40 bg-white/[0.04] p-8 backdrop-blur-sm transition hover:border-[var(--color-gold)]/70 hover:bg-white/[0.07] sm:p-9 ${className}`}>
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="font-brand min-h-screen bg-[var(--color-primary)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[var(--color-gold)]/30 bg-[var(--color-primary)]/95 px-6 py-4 backdrop-blur sm:px-12">
        <div className={`${CONTAINER} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <img src={logoCompleto} alt="JS Advocacia" className="h-10 w-10 rounded-full border border-[var(--color-gold)]/50 object-cover" />
            <div className="leading-tight">
              <p className="text-xs font-bold tracking-wide text-white sm:text-sm">JOENIO DE SOUSA SANTOS</p>
              <p className="text-xs text-slate-300">Advogado Tributarista</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-xs font-semibold uppercase tracking-wide text-slate-200 hover:text-[var(--color-gold-light)]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5588996805117"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-[var(--radius-pill,999px)] bg-[var(--color-gold)] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[var(--color-gold-light)] sm:inline-block"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-label="Abrir menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gold)]/50 text-white md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5">
                {menuAberto ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuAberto && (
          <nav className={`${CONTAINER} mt-4 flex flex-col gap-4 border-t border-[var(--color-gold)]/20 pt-4 md:hidden`}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuAberto(false)}
                className="text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-[var(--color-gold-light)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/5588996805117"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-fit rounded-[var(--radius-pill,999px)] bg-[var(--color-gold)] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[var(--color-gold-light)]"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero — banner limpo (bannerHero) a 0.8 + emblema circular a 0.4 à direita */}
        <section className="relative isolate overflow-hidden bg-[var(--color-primary-dark)]">
          {/* Camada 1: banner — atrás de tudo */}
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            style={{ zIndex: 0, opacity: 0.8 }}
          />

          {/* Camada 2: emblema circular — independente do banner, acima dele */}
          <img
            src={emblemaCircular}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 w-[420px] max-w-none -translate-y-1/2 select-none sm:w-[540px] lg:w-[720px]"
            style={{ zIndex: 1, opacity: 0.2 }}
          />

          <div className={`${CONTAINER} relative z-10 grid gap-10 px-6 pt-16 pb-0 sm:gap-12 sm:px-12 sm:pt-20 sm:pb-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-0`}>
            <div className="relative z-10 flex flex-col justify-center py-4 sm:py-8 lg:py-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
                Planejar · Proteger · Otimizar
              </p>
              <h1 className="font-display mt-5 text-3xl italic font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Joenio de Sousa Santos
              </h1>
              <span className="mt-4 block h-px w-16 bg-[var(--color-gold)]" />
              <p className="font-display mt-4 text-base font-semibold text-[var(--color-gold-light)] sm:text-lg md:text-xl">
                Advogado Tributarista
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-200 sm:text-base">
                Atuação tributária estratégica e preventiva: identifico créditos que sua
                empresa já tem direito, mas nunca recuperou — antes que o problema apareça.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5588996805117"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-pill,999px)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-gold-light)] sm:px-7"
                >
                  {whatsappIcon}
                  Falar no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-block rounded-[var(--radius-pill,999px)] border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)] sm:px-7"
                >
                  Ver serviços
                </a>
              </div>
            </div>

            {/* Foto sangrando direto no fundo navy, sem moldura/caixa. Máscara lateral só entra em lg, onde a coluna é estreita o bastante pra fazer sentido — em telas menores corta os ombros. */}
            <div className="relative z-10 -mx-6 h-[360px] sm:-mx-12 sm:h-[460px] md:h-[520px] lg:mx-0 lg:h-[660px]">
              <img
                src={profissional}
                alt="Dr. Joenio de Sousa Santos"
                className="absolute inset-0 h-full w-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%)] lg:[mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%),linear-gradient(to_right,transparent_0,black_18%)] lg:[mask-composite:intersect] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%),linear-gradient(to_right,transparent_0,black_18%)] lg:[-webkit-mask-composite:source-in]"
              />
            </div>
          </div>
        </section>

        {/* Credenciais */}
        <section className="textured-navy border-y border-[var(--color-gold)]/30 px-8 py-10 sm:px-12">
          <div className={`${CONTAINER} grid grid-cols-2 gap-6 lg:grid-cols-4`}>
            {CREDENCIAIS.map((c) => (
              <div key={c.titulo} className="border-l-2 border-[var(--color-gold)] pl-4">
                <p className="text-sm font-bold text-white">{c.titulo}</p>
                <p className="mt-1 text-xs text-slate-300">{c.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre — único respiro claro, estilo "carrossel branco" do Instagram: fundo branco, linhas douradas finas */}
        <section id="sobre" className="relative border-y-2 border-[var(--color-gold)]/70 bg-white px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel dark icon={iconSobre}>Quem sou eu</SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <p className="text-lg leading-relaxed text-[var(--color-primary-dark)]">
                Cristão, levita da casa de Deus, professor e advogado. Antes de advogado, fui
                professor — e antes de tudo, a fé guia como conduzo meu trabalho e minha vida.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Cada etapa da minha formação ensinou a olhar com profundidade antes de agir — hoje
                aplicada à estratégia tributária de empresários, com visão estratégica, agilidade
                no atendimento e especialização técnica.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-3 border-t border-[var(--color-silver)] pt-10">
              <img src={iconEstudos} alt="" aria-hidden="true" className="h-8 w-8 rounded-full" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-gold)]">Formação Acadêmica</p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {FORMACAO.map((f) => (
                <div key={f.titulo}>
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-gold)]">{f.ano}</p>
                  <h3 className="mt-2 text-sm font-bold text-[var(--color-primary)]">{f.titulo}</h3>
                  <p className="mt-1 text-sm text-slate-500">{f.local}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Método */}
        <section id="metodo" className="textured-navy px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel icon={ICONS.metodo}>Como funciona</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {METODO.map((m) => (
                <NavyCard key={m.passo}>
                  <span className="font-brand text-3xl font-bold text-[var(--color-gold)]">{m.passo}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{m.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{m.texto}</p>
                  <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-slate-400">{m.detalhe}</p>
                </NavyCard>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="bg-[var(--color-primary-dark)] px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel icon={ICONS.diferenciais}>Diferenciais</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {PILARES.map((p) => (
                <NavyCard key={p.titulo}>
                  <h3 className="text-lg font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--color-gold-light)]">{p.texto}</p>
                  <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-slate-300">{p.detalhe}</p>
                </NavyCard>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="textured-navy px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel icon={ICONS.servicos}>Serviços</SectionLabel>

            <div className="mt-10 space-y-16">
              {SERVICOS_GRUPOS.map((grupo) => {
                const categoriaLabel = (
                  <div className="flex items-center gap-3">
                    {typeof grupo.icon === 'string' ? (
                      <img src={grupo.icon} alt="" aria-hidden="true" className="h-9 w-9 rounded-full" />
                    ) : grupo.icon ? (
                      <IconBadge className="h-9 w-9">{grupo.icon}</IconBadge>
                    ) : null}
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
                      {grupo.categoria}
                    </h3>
                  </div>
                )

                if (grupo.itens.length === 1) {
                  const item = grupo.itens[0]
                  return (
                    <div key={grupo.categoria}>
                      {categoriaLabel}
                      <NavyCard className="mt-5 sm:flex sm:items-center sm:gap-8">
                        <h4 className="text-xl font-bold text-white sm:w-1/3 sm:shrink-0">{item.titulo}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-0 sm:border-l sm:border-white/10 sm:pl-8 sm:text-base">
                          {item.texto}
                        </p>
                      </NavyCard>
                    </div>
                  )
                }

                return (
                  <div key={grupo.categoria}>
                    {categoriaLabel}
                    <div className="mt-5 grid gap-6 sm:grid-cols-2">
                      {grupo.itens.map((s) => (
                        <NavyCard key={s.titulo}>
                          <h4 className="text-base font-bold text-white">{s.titulo}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.texto}</p>
                        </NavyCard>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Para quem + Parcerias + Frase de impacto — bloco único claro, mesmo estilo do "Sobre" */}
        <section id="publico" className="relative border-y-2 border-[var(--color-gold)]/70 bg-white px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel dark icon={ICONS.publico}>Para quem trabalho</SectionLabel>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {SEGMENTOS.map((s) => (
                <div key={s.titulo} className="border-l-2 border-[var(--color-gold)] pl-5">
                  <h3 className="text-lg font-bold text-[var(--color-primary-dark)]">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.texto}</p>
                  <p className="mt-3 border-t border-[var(--color-silver)] pt-3 text-sm leading-relaxed text-slate-500">{s.detalhe}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-start gap-4 rounded-[var(--radius-card,20px)] border border-[var(--color-gold)] bg-[var(--color-primary)]/[0.04] px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-[var(--color-primary-dark)] sm:max-w-xl">
                <span className="font-bold text-[var(--color-gold)]">Parcerias:</span> aberto a
                parcerias entre advogados tributaristas e contadores interessados em atuação conjunta.
              </p>
              <a
                href="https://wa.me/5588996805117"
                target="_blank"
                rel="noreferrer"
                className="inline-block whitespace-nowrap rounded-[var(--radius-pill,999px)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-gold-light)]"
              >
                Conversar →
              </a>
            </div>

            <div className="mt-10 border-t border-[var(--color-silver)] pt-10 text-center">
              <p className="mx-auto max-w-2xl text-xl font-bold leading-relaxed text-[var(--color-primary-dark)] sm:text-2xl">
                "A atuação tributária não deve começar quando o problema aparece. Deve começar antes."
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contato */}
      <footer id="contato" className="border-t border-[var(--color-gold)]/30 bg-[var(--color-primary)] px-8 py-16 sm:px-12">
        <div className={`${CONTAINER} grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center`}>
          <div className="flex items-center gap-3">
            <img src={logoCompleto} alt="JS Advocacia" className="h-14 w-14 rounded-full border border-[var(--color-gold)]/50 object-cover" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">JS Advocacia</p>
              <p className="text-xs text-slate-300">e Consultoria Tributária</p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-10 sm:pt-0 md:grid-cols-3">
            <a
              href="https://wa.me/5588996805117"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
            >
              <img src={iconContato} alt="" aria-hidden="true" className="h-9 w-9 rounded-full" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-[var(--color-gold-light)]">WhatsApp</span>
                (88) 99680-5117
              </span>
            </a>
            <a
              href="https://instagram.com/dr.joeniosousa.adv"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
            >
              <IconBadge className="h-9 w-9">{ICONS.instagram}</IconBadge>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-[var(--color-gold-light)]">Instagram</span>
                @dr.joeniosousa.adv
              </span>
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <IconBadge className="h-9 w-9">{ICONS.redes}</IconBadge>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-[var(--color-gold-light)]">Também em</span>
                Facebook · LinkedIn
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
