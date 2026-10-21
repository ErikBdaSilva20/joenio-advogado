const CONTAINER = 'mx-auto max-w-5xl'

const PILARES = [
  { titulo: 'Ética', texto: 'Cada caso conduzido com transparência e responsabilidade.' },
  { titulo: 'Transparência', texto: 'Clareza em cada etapa da estratégia tributária.' },
  { titulo: 'Confiança', texto: 'Construída com atitude, não só com conhecimento técnico.' },
]

const SERVICOS = [
  { titulo: 'Planejamento Tributário', texto: 'Análise da estrutura fiscal para otimizar a carga tributária com segurança.' },
  { titulo: 'Compliance Tributário', texto: 'Verificação do cumprimento de obrigações principais e acessórias.' },
  { titulo: 'Recuperação de Créditos', texto: 'Identificação e recuperação de valores pagos indevidamente ou a maior.' },
  { titulo: 'Produtos Monofásicos', texto: 'Recuperação tributária para empresas com tributação concentrada.' },
  { titulo: 'Créditos de ICMS-ST', texto: 'Análise de operações sujeitas à substituição tributária.' },
  { titulo: 'Isenção de IR por Doença Grave', texto: 'Para aposentados e pensionistas enquadrados na lei.' },
  { titulo: 'Equiparação Hospitalar', texto: 'Tratamento tributário de serviços hospitalares para clínicas.' },
  { titulo: 'Defesa em Execuções Fiscais', texto: 'Defesa técnica de empresas cobradas judicialmente por dívida ativa.' },
  { titulo: 'Parcerias com Contadores', texto: 'Atuação conjunta entre advogado tributarista e contabilidade.' },
]

function LogoBadge({ dark = false }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full border font-brand text-sm font-bold ${
        dark ? 'border-[var(--color-gold)] text-white' : 'border-[var(--color-gold)] text-[var(--color-primary)]'
      }`}
    >
      JS
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--color-gold)]" />
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">{children}</p>
    </div>
  )
}

export default function Institucional({ onVoltar }) {
  return (
    <div className="font-brand min-h-screen bg-white text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-silver)] px-8 py-5 sm:px-12">
        <div className={`${CONTAINER} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <LogoBadge />
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-[var(--color-primary)]">JS ADVOCACIA</p>
              <p className="text-xs text-slate-500">e Consultoria Tributária</p>
            </div>
          </div>
          <button
            onClick={onVoltar}
            className="rounded-[var(--radius-pill,999px)] border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            ← Voltar
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="textured-navy px-8 py-28 text-center sm:px-12">
          <div className={`${CONTAINER} flex flex-col items-center`}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
              Planejar · Proteger · Otimizar
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
              Atuação tributária estratégica para quem não espera o problema aparecer
            </h1>
            <p className="mt-5 max-w-xl text-sm text-slate-200 sm:text-base">
              Pagar tributos é uma obrigação. Pagar além do que é devido não precisa ser.
            </p>
            <a
              href="https://wa.me/5588996805117"
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp (abre em nova aba)"
              className="mt-9 inline-block rounded-[var(--radius-pill,999px)] border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </section>

        {/* Sobre */}
        <section className="border-y-2 border-[var(--color-gold)]/40 px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel>Quem sou eu</SectionLabel>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <p className="text-lg leading-relaxed text-[var(--color-primary-dark)]">
                Meu nome é Joenio de Sousa Santos. Antes de advogado, fui professor. E antes de tudo,
                sou levita da casa de Deus: a fé guia como conduzo meu trabalho e minha vida.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Graduado em Direito pela UNINTA, pós-graduado em Direito Tributário pela Facuminas e
                graduando em Ciências Biológicas pela UECE. Cada etapa ensinou a olhar com
                profundidade antes de agir — hoje aplicada à estratégia tributária de empresários.
              </p>
            </div>

            <div className="mt-16 grid gap-10 border-t border-[var(--color-silver)] pt-10 sm:grid-cols-3">
              {PILARES.map((p) => (
                <div key={p.titulo}>
                  <h3 className="text-sm font-bold text-[var(--color-primary)]">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="bg-[var(--color-silver)]/40 px-8 py-24 sm:px-12">
          <div className={CONTAINER}>
            <SectionLabel>Serviços</SectionLabel>

            <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {SERVICOS.map((s, i) => (
                <div key={s.titulo} className="flex gap-4 border-t border-[var(--color-primary)]/15 pt-6">
                  <span className="font-brand text-sm font-bold text-[var(--color-gold)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-primary)]">{s.titulo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frase de impacto */}
        <section className="textured-navy px-8 py-24 text-center sm:px-12">
          <div className={CONTAINER}>
            <div className="mx-auto max-w-2xl rounded-[var(--radius-card,20px)] border border-white/30 px-8 py-10">
              <p className="text-xl font-bold leading-relaxed text-white sm:text-2xl">
                "A atuação tributária não deve começar quando o problema aparece. Deve começar antes."
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contato */}
      <footer className="bg-white px-8 py-16 text-center sm:px-12">
        <div className={`${CONTAINER} flex flex-col items-center gap-4`}>
          <LogoBadge />
          <p className="text-sm font-bold text-[var(--color-primary)]">JS Advocacia e Consultoria Tributária</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <a
              className="hover:text-[var(--color-primary)]"
              href="https://wa.me/5588996805117"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp (88) 99680-5117 (abre em nova aba)"
            >
              WhatsApp (88) 99680-5117
            </a>
            <a
              className="hover:text-[var(--color-primary)]"
              href="https://instagram.com/dr.joeniosousa.adv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @dr.joeniosousa.adv (abre em nova aba)"
            >
              @dr.joeniosousa.adv
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
