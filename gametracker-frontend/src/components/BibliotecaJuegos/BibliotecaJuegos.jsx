import TarjetaJuego from '../TarjetaJuego/TarjetaJuego';

const mockGames = [
  { id: 1, title: 'The Legend of Zelda', platform: 'Switch', rating: 5 },
  { id: 2, title: 'God of War', platform: 'PS5', rating: 4 },
  { id: 3, title: 'Hades', platform: 'PC', rating: 5 },
];

export default function BibliotecaJuegos() {
  return (
    <div>
      <h2>Biblioteca de Juegos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {mockGames.map((game) => (
          <TarjetaJuego key={game.id} title={game.title} platform={game.platform} rating={game.rating} />
        ))}
      </div>
    </div>
  );
}