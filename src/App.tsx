import { useState } from 'react'
import Home from './Home'
import PrototipoInstitucional from './prototypes/Institucional.jsx'
import PrototipoConsultivo from './prototypes/Consultivo.jsx'
import PrototipoContencioso from './prototypes/Contencioso.jsx'
import PrototipoPortfolio from './prototypes/Portfolio.jsx'

export type Categoria = 'institucional' | 'consultivo' | 'contencioso' | 'portfolio' | null

function App() {
  const [categoria, setCategoria] = useState<Categoria>(null)

  if (categoria === 'institucional')
    return <PrototipoInstitucional onVoltar={() => setCategoria(null)} />
  if (categoria === 'consultivo')
    return <PrototipoConsultivo onVoltar={() => setCategoria(null)} />
  if (categoria === 'contencioso')
    return <PrototipoContencioso onVoltar={() => setCategoria(null)} />
  if (categoria === 'portfolio')
    return <PrototipoPortfolio onVoltar={() => setCategoria(null)} />

  return <Home onSelecionar={setCategoria} />
}

export default App
