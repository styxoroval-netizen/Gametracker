import { useState } from 'react';

export default function FormularioJuego({ onSubmit }) {
  const [form, setForm] = useState({ title: '', platform: '', rating: 0 });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.platform) {
      setStatus({ type: 'error', message: 'Título y plataforma son obligatorios.' });
      return;
    }
    const parsedRating = Number(form.rating);
    if (Number.isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      setStatus({ type: 'error', message: 'La puntuación debe estar entre 0 y 5.' });
      return;
    }
    onSubmit?.(form);
    console.log('Juego guardado:', form);
    setStatus({ type: 'success', message: 'Juego guardado correctamente.' });
    setForm({ title: '', platform: '', rating: 0 });
  };

  return (
    <div>
      <h2>Agregar juego</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
        <input name="platform" placeholder="Plataforma" value={form.platform} onChange={handleChange} />
        <input name="rating" type="number" min={0} max={5} value={form.rating} onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
      {status && (
        <p style={{ color: status.type === 'error' ? 'crimson' : 'green' }}>{status.message}</p>
      )}
    </div>
  );
}