export default function EstadisticasPersonales() {
  const totalJuegos = 42;
  const completados = 18;
  const horasJugadas = 320;
  const promedioRating = 4.3;

  return (
    <div>
      <h2>Estadísticas personales</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <StatCard label="Total de juegos" value={totalJuegos} />
        <StatCard label="Completados" value={completados} />
        <StatCard label="Horas jugadas" value={horasJugadas} />
        <StatCard label="Rating promedio" value={`${promedioRating}/5`} />
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
      <div style={{ fontSize: 12, color: '#666' }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 600 }}>{value}</div>
    </div>
  );
}