import type { Categoria } from './App'

const CARDS: { id: Categoria; titulo: string; descricao: string }[] = [
  {
    id: 'institucional',
    titulo: 'Institucional',
    descricao: 'Site de apresentação do escritório, foco em credibilidade.',
  },
  {
    id: 'consultivo',
    titulo: 'Consultivo',
    descricao: 'Landing voltada para captação de clientes empresariais.',
  },
  {
    id: 'contencioso',
    titulo: 'Contencioso',
    descricao: 'Página focada em casos e atuação em processos judiciais.',
  },
]

function Home({ onSelecionar }: { onSelecionar: (c: Categoria) => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          JS Advocacia e Consultoria Tributária
        </h1>
        <p className="mt-2 text-slate-500">
          Escolha uma categoria de protótipo para visualizar
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {CARDS.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelecionar(card.id)}
            className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {card.titulo}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{card.descricao}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Home
