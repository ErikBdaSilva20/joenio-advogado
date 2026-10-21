const PILARES = [
  { titulo: 'Visão estratégica', texto: 'Cada estrutura tributária é lida antes de ser recomendada.' },
  { titulo: 'Agilidade no atendimento', texto: 'Respostas técnicas sem burocracia desnecessária.' },
  { titulo: 'Especialização técnica', texto: 'Atuação focada exclusivamente em direito tributário.' },
]

const SERVICOS = [
  { titulo: 'Planejamento Tributário', texto: 'Alternativas legalmente adequadas para reduzir riscos e otimizar a carga fiscal.' },
  { titulo: 'Compliance Tributário', texto: 'Garantia de que obrigações principais e acessórias estão em dia.' },
  { titulo: 'Recuperação de Créditos', texto: 'Simples Nacional, Lucro Presumido e Lucro Real.' },
  { titulo: 'Parcerias com Contadores', texto: 'Atuação conjunta entre advocacia tributária e contabilidade.' },
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

export default function Consultivo({ onVoltar }) {
  return (
    <div className="font-brand min-h-screen bg-white text-[var(--color-ink)]">
      <header className="flex items-center justify-between border-b border-[var(--color-silver)] px-8 py-5 sm:px-12">
        <div className="flex items-center gap-3">
          <LogoBadge />
          <span className="text-sm font-bold tracking-wide text-[var(--color-primary)]">JS Consultoria Tributária</span>
        </div>
        <button
          onClick={onVoltar}
          className="rounded-[var(--radius-pill,999px)] border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
        >
          ← Voltar
        </button>
      </header>

      <main>
      {/* Hero */}
      <section className="textured-navy px-8 py-24 text-center sm:px-12">
        <span className="rounded-[var(--radius-pill,999px)] border border-[var(--color-gold)] px-4 py-1 text-xs font-semibold text-[var(--color-gold-light)]">
          Para empresários
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
          Blinde sua empresa com planejamento tributário preventivo
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm text-slate-200 sm:text-base">
          Reduza riscos fiscais antes que virem passivo — com uma atuação técnica, estratégica e
          preventiva, pensada para cada estágio da sua empresa.
        </p>
        <a
          href="https://wa.me/5588996805117"
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar diagnóstico tributário no WhatsApp (abre em nova aba)"
          className="mt-8 inline-block rounded-[var(--radius-pill,999px)] border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
        >
          Agendar diagnóstico tributário
        </a>
      </section>

      {/* Pilares */}
      <section className="border-y-2 border-[var(--color-gold)]/40 px-8 py-16 sm:px-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {PILARES.map((p) => (
            <div key={p.titulo} className="rounded-[var(--radius-card,20px)] border border-[var(--color-primary)]/15 p-6">
              <h3 className="text-sm font-bold text-[var(--color-primary)]">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-[var(--color-silver)]/40 px-8 py-20 sm:px-12">
        <p className="text-sm font-bold text-[var(--color-primary)]">⟶ O que entregamos</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {SERVICOS.map((s) => (
            <div key={s.titulo} className="rounded-[var(--radius-card,20px)] border border-[var(--color-primary)]/15 bg-white p-6">
              <h3 className="text-sm font-bold text-[var(--color-primary)]">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferencial */}
      <section className="px-8 py-20 text-center sm:px-12">
        <div className="mx-auto max-w-2xl rounded-[var(--radius-card,20px)] border border-[var(--color-gold)] px-8 py-10">
          <p className="text-lg leading-relaxed text-[var(--color-primary-dark)]">
            Uma atuação tributária estratégica e preventiva, que orienta sobre as necessidades
            específicas de cada empresa — não apenas sobre o que já deu errado.
          </p>
        </div>
      </section>
      </main>

      <footer className="textured-navy flex flex-col items-center gap-4 px-8 py-16 text-center sm:px-12">
        <LogoBadge dark />
        <p className="text-sm font-bold text-white">Planejar, proteger e otimizar</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-200">
          <a
            className="hover:text-white"
            href="https://wa.me/5588996805117"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp (88) 99680-5117 (abre em nova aba)"
          >
            WhatsApp (88) 99680-5117
          </a>
          <a
            className="hover:text-white"
            href="https://instagram.com/dr.joeniosousa.adv"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @dr.joeniosousa.adv (abre em nova aba)"
          >
            @dr.joeniosousa.adv
          </a>
        </div>
      </footer>
    </div>
  )
}
