const express = require('express');
const router = express.Router();
const TouristSpot = require('../models/tourist-spot');

router.get('/', async (req, res) => {
  try {
    const touristSpots = await TouristSpot.find().populate('city');
    res.json(touristSpots);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tourist spots' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const touristSpot = await TouristSpot.findById(id).populate('city');
    if (!touristSpot) {
      return res.status(404).json({ message: 'Tourist spot not found' });
    }
    res.json(touristSpot);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tourist spot' });
  }
});

router.post('/', async (req, res) => {
  try {
    const touristSpot = new TouristSpot(req.body);
    await touristSpot.save();
    res.json(touristSpot);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create tourist spot' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const touristSpot = await TouristSpot.findByIdAndUpdate(id, req.body, { new: true });
    if (!touristSpot) {
      return res.status(404).json({ message: 'Tourist spot not found' });
    }
    res.json(touristSpot);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update tourist spot' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await TouristSpot.findByIdAndDelete(id);
    res.json({ message: 'Tourist spot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete tourist spot' });
  }
});

module.exports = router;