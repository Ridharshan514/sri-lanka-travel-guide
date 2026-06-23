const mongoose = require('mongoose');

const travelTipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, enum: ['beach', 'city', 'nature'], default: 'general' },
  rating: { type: Number, min: 1, max: 5, default: 3 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const TravelTip = mongoose.model('TravelTip', travelTipSchema);

module.exports = TravelTip;