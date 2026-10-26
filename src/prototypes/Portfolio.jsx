import { useState } from 'react'
import heroBg from '../assets/portfolio/hero-bg.png'
import profissional from '../assets/portfolio/profissional.png'
import logoBalanca from '../assets/portfolio/logo-balanca.png'
import emblemaCircular from '../assets/portfolio/emblema-circular.png'
import iconSobre from '../assets/portfolio/icons/icon-sobre.png'
import iconContato from '../assets/portfolio/icons/icon-contato.png'

const CONTAINER = 'mx-auto max-w-6xl'
const WHATSAPP_URL = 'https://wa.me/5588996805117'
const INSTAGRAM_URL = 'https://instagram.com/dr.joeniosousa.adv'

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Atuação' },
  { href: '#parcerias', label: 'Parcerias' },
]

const CREDENCIAIS = [
  { nivel: 'Graduação', titulo: 'Direito', texto: 'UNINTA' },
  { nivel: 'Pós-graduação', titulo: 'Direito Tributário', texto: 'Facuminas' },
  { nivel: 'Graduação em andamento', titulo: 'Ciências Biológicas', texto: 'Universidade Estadual do Ceará (UECE)' },
]

const PILARES = ['Ética', 'Transparência', 'Especialização técnica']

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--color-gold)',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ICONS = {
  servicos: (
    <svg {...svgProps} className="h-4 w-4"><path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" /><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>
  ),
  parcerias: (
    <svg {...svgProps} className="h-4 w-4"><circle cx="9" cy="8" r="3" /><path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" /><circle cx="17.5" cy="9.5" r="2.2" /><path d="M15 19c0-2 1.1-3.6 3-4.2" /></svg>
  ),
  instagram: (
    <svg {...svgProps} className="h-4.5 w-4.5"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.3" /><circle cx="16.3" cy="7.7" r="0.6" fill="var(--color-gold)" stroke="none" /></svg>
  ),
}

const whatsappIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
  </svg>
)

const instagramIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.3" /><circle cx="16.8" cy="7.2" r="0.7" fill="currentColor" stroke="none" />
  </svg>
)

const SERVICOS = [
  { titulo: 'Planejamento Tributário', texto: 'Análise e estruturação legal das operações da empresa para identificar alternativas legítimas de otimização da carga fiscal e eficiência orçamentária.' },
  { titulo: 'Compliance Tributário', texto: 'Auditoria e verificação do correto cumprimento das obrigações tributárias principais e acessórias, reduzindo passivos perante o Fisco.' },
  { titulo: 'Recuperação de Créditos', texto: 'Diagnóstico minucioso para identificação e restituição ou compensação de valores pagos indevidamente ou a maior (Simples Nacional, Lucro Presumido e Lucro Real).' },
  { titulo: 'Créditos Monofásicos & ICMS-ST', texto: 'Análise especializada para empresas que lidam com produtos sujeitos à tributação concentrada (monofásica) ou substituição tributária do ICMS.' },
  { titulo: 'Equiparação Hospitalar', texto: 'Assessoria para clínicas médicas e odontológicas na verificação dos requisitos legais para fruição de benefícios e alíquotas reduzidas de IRPJ e CSLL.' },
  { titulo: 'Defesa em Execuções Fiscais', texto: 'Atuação técnica e contenciosa na defesa de contribuintes e empresas em face de cobranças judiciais e inscrições em dívida ativa.' },
]

/** Badge circular navy + traço dourado, para seções sem ícone pronto no acervo - segue o mesmo tamanho/forma dos ícones em PNG. */
function IconBadge({ children, className = 'h-8 w-8' }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] ${className}`}>
      {children}
    </span>
  )
}

/** The source art sits in a large white margin; the zoom crops it to the circle so the mark reads as a round badge. */
function LogoBadge({ className }) {
  return (
    <span className={`block shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-gold)]/60 bg-white ${className}`}>
      <img src={logoBalanca} alt="JS Advocacia e Consultoria Tributária" className="h-full w-full scale-[1.7] object-cover" />
    </span>
  )
}

const BTN = 'inline-flex items-center gap-2 rounded-[var(--radius-pill,999px)] px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'

/** WhatsApp (branco) + Instagram (amarelo) - usados no header e no menu mobile. */
function ContactButtons({ className = '' }) {
  return (
    <div className={`items-center gap-3 ${className}`}>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${BTN} bg-white text-black hover:bg-slate-100`}>
        {whatsappIcon}
        WhatsApp
      </a>
      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`${BTN} bg-yellow-400 text-black hover:bg-yellow-300`}>
        {instagramIcon}
        Instagram
      </a>
    </div>
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

/** White card with a thin gray border, for light sections. */
function LightCard({ children, className = '' }) {
  return (
    <div className={`rounded-[var(--radius-card,20px)] border border-slate-300 bg-white p-6 shadow-sm transition hover:border-[var(--color-gold)]/70 ${className}`}>
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="font-brand min-h-screen bg-[var(--color-primary)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[var(--color-gold)]/30 bg-[var(--color-primary)]/95 px-6 py-3 backdrop-blur sm:px-12">
        <div className={`${CONTAINER} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <LogoBadge className="h-12 w-12 sm:h-14 sm:w-14" />
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-white sm:text-base">JS ADVOCACIA</p>
              <p className="text-xs text-white sm:text-sm">Consultoria Tributária</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[var(--color-gold-light)]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ContactButtons className="hidden sm:flex" />
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
                className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[var(--color-gold-light)]"
              >
                {n.label}
              </a>
            ))}
            <ContactButtons className="flex flex-wrap" />
          </nav>
        )}
      </header>

      <main>
        {/* Hero - banner limpo (bannerHero) a 0.8 + emblema circular a 0.4 à direita */}
        <section className="relative isolate overflow-hidden bg-[var(--color-primary-dark)]">
          {/* Camada 1: banner - atrás de tudo */}
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            style={{ zIndex: 0, opacity: 0.8 }}
          />

          {/* Camada 2: emblema circular - independente do banner, acima dele */}
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
                Dr. Joenio de Sousa Santos
              </p>
              <h1 className="font-display mt-5 text-3xl italic font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                JS Advocacia e Consultoria Tributária
              </h1>
              <span className="mt-4 block h-px w-16 bg-[var(--color-gold)]" />
              <p className="font-display mt-4 text-base font-semibold text-[var(--color-gold-light)] sm:text-lg md:text-xl">
                Planejar, proteger e otimizar.
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-200 sm:text-base">
                Atuação jurídica estratégica e preventiva voltada à gestão fiscal, conformidade
                legal e segurança de patrimônios empresariais e civis.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-pill,999px)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-gold-light)] sm:px-7"
                >
                  {whatsappIcon}
                  WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-block rounded-[var(--radius-pill,999px)] border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)] sm:px-7"
                >
                  Áreas de atuação
                </a>
              </div>
            </div>

            {/* Foto sangrando direto no fundo navy, sem moldura/caixa. Máscara lateral só entra em lg, onde a coluna é estreita o bastante pra fazer sentido - em telas menores corta os ombros. */}
            <div className="relative z-10 -mx-6 h-[360px] sm:-mx-12 sm:h-[460px] md:h-[520px] lg:mx-0 lg:h-[660px]">
              <img
                src={profissional}
                alt="Dr. Joenio de Sousa Santos"
                className="absolute inset-0 h-full w-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_82%,transparent_100%)] min-[800px]:[mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_100%)] min-[800px]:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_100%)] lg:[mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_100%),linear-gradient(to_right,transparent_0,black_18%)] lg:[mask-composite:intersect] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_100%),linear-gradient(to_right,transparent_0,black_18%)] lg:[-webkit-mask-composite:source-in]"
              />
            </div>
          </div>
        </section>

        {/* Brand mark, pillars and credentials - light band so the navy "JS" stays legible */}
        <section id="pilares" className="border-y-2 border-[var(--color-gold)]/70 bg-white px-8 py-20 sm:px-12">
          <div className={CONTAINER}>
            <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
              <img src={emblemaCircular} alt="JS Advocacia e Consultoria Tributária" className="mx-auto h-48 w-48 object-contain sm:h-56 sm:w-56" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-gold)]">Nossos pilares</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                  {PILARES.map((titulo) => (
                    <LightCard key={titulo} className="border-t-2 border-t-[var(--color-gold)]">
                      <h3 className="text-lg font-bold text-[var(--color-primary-dark)]">{titulo}</h3>
                    </LightCard>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  Soluções jurídicas sob medida para o cenário empresarial moderno.
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-[var(--color-silver)] pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-gold)]">Formação acadêmica</p>
              <p className="mt-3 text-sm text-slate-600">Dr. Joenio de Sousa Santos, advogado e professor.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {CREDENCIAIS.map((c) => (
                  <LightCard key={c.titulo}>
                    <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-gold)]">{c.nivel}</p>
                    <h3 className="mt-2 text-lg font-bold text-[var(--color-primary-dark)]">{c.titulo}</h3>
                    <p className="mt-1 text-sm text-slate-500">{c.texto}</p>
                  </LightCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="textured-navy px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel icon={iconSobre}>O escritório</SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <p className="text-lg leading-relaxed text-white">
                Fundado sob os pilares da ética, transparência e especialização técnica, o escritório
                JS Advocacia e Consultoria Tributária nasceu com o propósito de oferecer soluções
                jurídicas sob medida para o cenário empresarial moderno.
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                <p>
                  O escritório é liderado pelo Dr. Joenio de Sousa Santos, advogado e professor,
                  graduado em Direito pela UNINTA e pós-graduado em Direito Tributário pela Facuminas.
                  Com sólida formação acadêmica e também graduando em Ciências Biológicas pela
                  Universidade Estadual do Ceará (UECE), o Dr. Joenio alia o rigor técnico do Direito
                  à compreensão aprofundada de estruturas organizacionais e de saúde, garantindo uma
                  visão estratégica diferenciada a cada caso.
                </p>
                <p>
                  Nossa missão é guiar contribuintes e corporações por meio de uma advocacia
                  consultiva e preventiva forte, mitigando riscos e promovendo a justiça fiscal com
                  segurança jurídica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="border-y-2 border-[var(--color-gold)]/70 bg-white px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel dark icon={ICONS.servicos}>Áreas de atuação</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICOS.map((s) => (
                <LightCard key={s.titulo} className="p-8">
                  <h3 className="text-base font-bold text-[var(--color-primary-dark)]">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.texto}</p>
                </LightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Parcerias + tagline */}
        <section id="parcerias" className="textured-navy px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel icon={ICONS.parcerias}>Advocacia Colaborativa</SectionLabel>
            <h2 className="mt-10 text-2xl font-bold text-white">Parcerias Estratégicas</h2>
            <div className="mt-6 grid gap-10 lg:grid-cols-2">
              <p className="text-base leading-relaxed text-white">
                Entendemos que a excelência na gestão fiscal exige a união de saberes. Por isso, a JS
                Advocacia mantém as portas abertas para a construção de parcerias sólidas com
                contadores, escritórios de contabilidade e colegas advogados.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Atuamos de forma conjunta e complementar em demandas de alta complexidade, como
                recuperação de créditos tributários e planejamentos fiscais avançados, respeitando
                rigorosamente a ética e a autonomia profissional de cada parceiro. Se você deseja
                agregar soluções tributárias especializadas à atuação do seu escritório, entre em
                contato para avaliarmos uma atuação coordenada.
              </p>
            </div>

            <div className="mt-14 border-t border-white/10 pt-10 text-center">
              <p className="mx-auto max-w-2xl text-xl font-bold leading-relaxed text-white sm:text-2xl">
                "Planejar, proteger e otimizar."
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contato */}
      <footer id="contato" className="border-t border-[var(--color-gold)]/30 bg-[var(--color-primary)] px-8 py-16 sm:px-12">
        <div className={`${CONTAINER} grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center`}>
          <div className="flex items-center gap-3">
            <LogoBadge className="h-16 w-16" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">JS Advocacia</p>
              <p className="text-xs text-slate-300">e Consultoria Tributária</p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-10 sm:pt-0 md:grid-cols-2">
            {/* E-mail and OAB number pending from the client; add here once provided. */}
            <a
              href={WHATSAPP_URL}
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
              href={INSTAGRAM_URL}
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
          </div>
        </div>
      </footer>
    </div>
  )
}
