export default function Contencioso({ onVoltar }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff', color: '#1a1a1a', minHeight: '100vh' }}>
      <header style={{ padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #7a1f1f' }}>
        <strong style={{ fontSize: 18, color: '#7a1f1f' }}>JOENIO | CONTENCIOSO</strong>
        <button onClick={onVoltar} style={{ background: '#7a1f1f', border: 'none', color: '#fff', padding: '8px 16px', cursor: 'pointer' }}>
          ← Voltar
        </button>
      </header>

      <section style={{ padding: '72px 48px', background: '#f5f0f0' }}>
        <h1 style={{ fontSize: 38, margin: 0 }}>Defesa firme em cada processo</h1>
        <p style={{ color: '#555', maxWidth: 520, marginTop: 12 }}>
          Atuação estratégica em disputas judiciais cíveis, trabalhistas e criminais.
        </p>
        <button style={{ marginTop: 24, padding: '14px 32px', background: '#7a1f1f', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Avaliar meu caso
        </button>
      </section>

      <section style={{ padding: '48px', display: 'flex', gap: 24, justifyContent: 'center' }}>
        {['Casos ganhos', 'Anos de atuação', 'Clientes atendidos'].map((label, i) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#7a1f1f' }}>{[320, 18, 1200][i]}+</div>
            <div style={{ color: '#666', fontSize: 14 }}>{label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
