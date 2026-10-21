const CREDENCIAIS = [
  'Pós-graduado em Direito Tributário — Facuminas',
  'Graduado em Direito — UNINTA',
  'Especialista em Recuperação de Créditos Tributários',
]

const SERVICOS = [
  { titulo: 'Defesa em Execuções Fiscais', texto: 'Defesa técnica de empresas e contribuintes cobrados judicialmente por dívida ativa.' },
  { titulo: 'Recuperação de Créditos — ICMS-ST', texto: 'Identificação de valores indevidos ou passíveis de restituição.' },
  { titulo: 'Produtos Monofásicos', texto: 'Recuperação tributária para empresas com tributação concentrada.' },
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

export default function Contencioso({ onVoltar }) {
  return (
    <div className="font-brand min-h-screen bg-white text-[var(--color-ink)]">
      <header className="flex items-center justify-between border-b border-[var(--color-silver)] px-8 py-5 sm:px-12">
        <div className="flex items-center gap-3">
          <LogoBadge />
          <span className="text-sm font-bold tracking-wide text-[var(--color-primary)]">JS | Contencioso Tributário</span>
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
        <h1 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-5xl">
          Defesa técnica e estratégica em execuções fiscais
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm text-slate-200 sm:text-base">
          Sua empresa está sendo cobrada por débitos tributários? Cada caso exige conhecimento
          técnico, visão estratégica e atenção aos detalhes.
        </p>
        <a
          href="https://wa.me/5588996805117"
          target="_blank"
          rel="noreferrer"
          aria-label="Avaliar meu caso no WhatsApp (abre em nova aba)"
          className="mt-8 inline-block rounded-[var(--radius-pill,999px)] border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
        >
          Avaliar meu caso →
        </a>
      </section>

      {/* Credenciais (prova de autoridade real, sem números fabricados) */}
      <section className="border-y-2 border-[var(--color-gold)]/40 px-8 py-14 sm:px-12">
        <div className="flex flex-wrap justify-center gap-4">
          {CREDENCIAIS.map((c) => (
            <span
              key={c}
              className="rounded-[var(--radius-pill,999px)] border border-[var(--color-primary)]/20 px-5 py-2 text-xs font-semibold text-[var(--color-primary)]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-[var(--color-silver)]/40 px-8 py-20 sm:px-12">
        <p className="text-sm font-bold text-[var(--color-primary)]">⟶ Atuação</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {SERVICOS.map((s) => (
            <div key={s.titulo} className="rounded-[var(--radius-card,20px)] border border-[var(--color-primary)]/15 bg-white p-6">
              <h3 className="text-sm font-bold text-[var(--color-primary)]">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frase de impacto */}
      <section className="px-8 py-20 text-center sm:px-12">
        <div className="mx-auto max-w-2xl rounded-[var(--radius-card,20px)] border border-[var(--color-gold)] px-8 py-10">
          <p className="text-lg leading-relaxed text-[var(--color-primary-dark)]">
            Porque tributário bem feito é sinônimo de dinheiro protegido.
          </p>
        </div>
      </section>
      </main>

      <footer className="textured-navy flex flex-col items-center gap-4 px-8 py-16 text-center sm:px-12">
        <LogoBadge dark />
        <p className="text-sm font-bold text-white">JS Advocacia e Consultoria Tributária</p>
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
