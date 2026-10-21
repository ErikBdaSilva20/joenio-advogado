export default function Consultivo({ onVoltar }) {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <header style={{ padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 18 }}>Joenio · Consultoria Empresarial</strong>
        <button onClick={onVoltar} style={{ background: 'transparent', border: '1px solid #475569', color: '#fff', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>
          ← Voltar
        </button>
      </header>

      <section style={{ padding: '96px 48px', textAlign: 'center' }}>
        <span style={{ background: '#1d4ed8', padding: '4px 12px', borderRadius: 999, fontSize: 12 }}>
          Para empresas
        </span>
        <h1 style={{ fontSize: 44, margin: '24px 0 8px' }}>Blinde sua empresa com consultoria jurídica preventiva</h1>
        <p style={{ color: '#94a3b8', maxWidth: 560, margin: '0 auto' }}>
          Reduza riscos contratuais, tributários e trabalhistas antes que virem processo.
        </p>
        <button style={{ marginTop: 32, padding: '16px 36px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>
          Fale com um consultor
        </button>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: '0 48px 96px', maxWidth: 960, margin: '0 auto' }}>
        {['Contratos', 'Compliance', 'Tributário'].map((item) => (
          <div key={item} style={{ background: '#1e293b', padding: 24, borderRadius: 12 }}>
            <h3 style={{ margin: '0 0 8px' }}>{item}</h3>
            <p style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>Serviço de exemplo em {item.toLowerCase()}.</p>
          </div>
        ))}
      </section>
    </div>
  )
}
