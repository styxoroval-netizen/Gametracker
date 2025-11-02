const Review = require('../models/Review');

const list = () => Review.find().lean();
const create = (data) => Review.create(data);
const getById = (id) => Review.findById(id).lean();
const update = (id, data) => Review.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
const remove = async (id) => {
  const res = await Review.findByIdAndDelete(id);
  return !!res;
};

module.exports = { list, create, getById, update, remove };