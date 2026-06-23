const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amenities: {
    type: Array,
    default: []
  },
  images: {
    type: Array,
    default: []
  },
  reviews: {
    type: Array,
    default: []
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;