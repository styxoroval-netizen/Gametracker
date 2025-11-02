const Game = require('../models/Game');

const list = () => Game.find().lean();
const create = (data) => Game.create(data);
const getById = (id) => Game.findById(id).lean();
const update = (id, data) => Game.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
const remove = async (id) => {
  const res = await Game.findByIdAndDelete(id);
  return !!res;
};

module.exports = { list, create, getById, update, remove };