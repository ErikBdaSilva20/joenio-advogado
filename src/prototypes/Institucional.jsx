export default function Institucional({ onVoltar }) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a', background: '#f7f5f0', minHeight: '100vh' }}>
      <header style={{ padding: '24px 48px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 20, letterSpacing: 1 }}>JOENIO ADVOCACIA</strong>
        <button onClick={onVoltar} style={{ background: 'none', border: '1px solid #1a1a1a', padding: '8px 16px', cursor: 'pointer' }}>
          ← Voltar
        </button>
      </header>

      <section style={{ padding: '80px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Tradição e confiança jurídica</h1>
        <p style={{ fontSize: 18, color: '#555', maxWidth: 560, margin: '16px auto' }}>
          Mais de 20 anos de atuação séria e comprometida com nossos clientes.
        </p>
        <button style={{ marginTop: 24, padding: '14px 32px', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Conheça nossa história
        </button>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: 32, padding: '0 48px 80px' }}>
        {['Missão', 'Visão', 'Valores'].map((item) => (
          <div key={item} style={{ background: '#fff', padding: 24, width: 220, border: '1px solid #ddd' }}>
            <h3>{item}</h3>
            <p style={{ color: '#666', fontSize: 14 }}>Texto de exemplo para o bloco de {item.toLowerCase()}.</p>
          </div>
        ))}
      </section>
    </div>
  )
}
