const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    platform: { type: String, trim: true },
    status: {
      type: String,
      enum: ['playing', 'completed', 'wishlist'],
      default: 'playing',
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    hoursPlayed: { type: Number, min: 0, default: 0 },
    coverUrl: { type: String, trim: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', GameSchema);