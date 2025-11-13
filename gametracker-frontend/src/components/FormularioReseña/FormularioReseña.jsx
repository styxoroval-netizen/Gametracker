import { useState } from 'react';

export default function FormularioReseña({ onSubmit }) {
  const [form, setForm] = useState({ gameTitle: '', content: '', rating: 0 });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.gameTitle || !form.content) {
      setStatus({ type: 'error', message: 'Juego y contenido son obligatorios.' });
      return;
    }
    const parsedRating = Number(form.rating);
    if (Number.isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      setStatus({ type: 'error', message: 'La puntuación debe estar entre 0 y 5.' });
      return;
    }
    onSubmit?.(form);
    console.log('Reseña guardada:', form);
    setStatus({ type: 'success', message: 'Reseña enviada.' });
    setForm({ gameTitle: '', content: '', rating: 0 });
  };

  return (
    <div>
      <h2>Nueva reseña</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
        <input name="gameTitle" placeholder="Juego" value={form.gameTitle} onChange={handleChange} />
        <textarea name="content" placeholder="Escribe tu reseña" value={form.content} onChange={handleChange} rows={4} />
        <input name="rating" type="number" min={0} max={5} value={form.rating} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
      {status && (
        <p style={{ color: status.type === 'error' ? 'crimson' : 'green' }}>{status.message}</p>
      )}
    </div>
  );
}