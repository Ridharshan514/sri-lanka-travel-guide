const mongoose = require('mongoose');

const touristSpotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['beach', 'city', 'mountain', 'wildlife'], required: true },
  rating: { type: Number, min: 1, max: 5 },
  images: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

const TouristSpot = mongoose.model('TouristSpot', touristSpotSchema);

module.exports = TouristSpot;