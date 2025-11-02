const User = require('../models/User');

const list = () => User.find().lean();
const create = (data) => User.create(data);
const getById = (id) => User.findById(id).lean();
const update = (id, data) => User.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
const remove = async (id) => {
  const res = await User.findByIdAndDelete(id);
  return !!res;
};

module.exports = { list, create, getById, update, remove };