import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import BibliotecaJuegos from './components/BibliotecaJuegos/BibliotecaJuegos';
import FormularioJuego from './components/FormularioJuego/FormularioJuego';
import ListaReseñas from './components/ListaReseñas/ListaReseñas';
import FormularioReseña from './components/FormularioReseña/FormularioReseña';
import EstadisticasPersonales from './components/EstadisticasPersonales/EstadisticasPersonales';

function App() {
  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #ddd' }}>
        <Link to="/juegos">Biblioteca</Link>
        <Link to="/juegos/nuevo">Agregar juego</Link>
        <Link to="/reseñas">Reseñas</Link>
        <Link to="/reseñas/nueva">Nueva reseña</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/juegos" replace />} />
          <Route path="/juegos" element={<BibliotecaJuegos />} />
          <Route path="/juegos/nuevo" element={<FormularioJuego />} />
          <Route path="/reseñas" element={<ListaReseñas />} />
          <Route path="/reseñas/nueva" element={<FormularioReseña />} />
          <Route path="/estadisticas" element={<EstadisticasPersonales />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
