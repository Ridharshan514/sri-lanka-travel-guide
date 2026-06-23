const mongoose = require('mongoose');

const localFoodSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [{ type: String }]
});

const LocalFood = mongoose.model('LocalFood', localFoodSchema);

module.exports = LocalFood;