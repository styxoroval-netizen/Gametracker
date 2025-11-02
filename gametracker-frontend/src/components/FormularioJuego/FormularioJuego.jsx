import { useState } from 'react';

export default function FormularioJuego({ onSubmit }) {
  const [form, setForm] = useState({ title: '', platform: '', rating: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
      <input name="platform" placeholder="Plataforma" value={form.platform} onChange={handleChange} />
      <input name="rating" type="number" min={0} max={5} value={form.rating} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}