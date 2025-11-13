const mockReviews = [
  { id: 1, gameTitle: 'Hades', author: 'Ana', rating: 5, content: 'Roguelike increíble, muy adictivo.' },
  { id: 2, gameTitle: 'God of War', author: 'Luis', rating: 4, content: 'Historia épica y combate sólido.' },
  { id: 3, gameTitle: 'Zelda: TotK', author: 'Marta', rating: 5, content: 'Exploración magistral y creatividad sin fin.' },
];

export default function ListaReseñas() {
  return (
    <div>
      <h2>Reseñas</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
        {mockReviews.map((r) => (
          <li key={r.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
            <strong>{r.gameTitle}</strong> — por {r.author}
            <div>⭐ {r.rating}/5</div>
            <p style={{ marginTop: 8 }}>{r.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}