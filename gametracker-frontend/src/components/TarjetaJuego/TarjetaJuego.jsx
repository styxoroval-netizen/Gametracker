export default function TarjetaJuego({ title = 'Juego', platform = 'Plataforma', rating = 0 }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
      <strong>{title}</strong>
      <div>Plataforma: {platform}</div>
      <div>⭐ {rating}/5</div>
    </div>
  );
}