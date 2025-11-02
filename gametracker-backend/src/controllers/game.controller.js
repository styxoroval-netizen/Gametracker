const service = require('../services/game.service');

module.exports = {
  async list(req, res) {
    const items = await service.list();
    res.json(items);
  },
  async create(req, res) {
    const item = await service.create(req.body);
    res.status(201).json(item);
  },
  async getById(req, res) {
    const item = await service.getById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Juego no encontrado' });
    res.json(item);
  },
  async update(req, res) {
    const item = await service.update(req.params.id, req.body);
    if (!item) return res.status(404).json({ message: 'Juego no encontrado' });
    res.json(item);
  },
  async remove(req, res) {
    const ok = await service.remove(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Juego no encontrado' });
    res.status(204).send();
  },
};