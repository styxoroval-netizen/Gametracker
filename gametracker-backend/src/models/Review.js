const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    content: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema);