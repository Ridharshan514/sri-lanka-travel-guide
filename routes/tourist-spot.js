const express = require('express');
const router = express.Router();
const TouristSpot = require('../models/TouristSpot');

router.get('/', async (req, res) => {
  try {
    const touristSpots = await TouristSpot.find();
    res.json(touristSpots);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tourist spots' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const touristSpot = await TouristSpot.findById(id);
    if (!touristSpot) {
      res.status(404).json({ message: 'Tourist spot not found' });
    } else {
      res.json(touristSpot);
    }
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
      res.status(404).json({ message: 'Tourist spot not found' });
    } else {
      res.json(touristSpot);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update tourist spot' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await TouristSpot.findByIdAndRemove(id);
    res.json({ message: 'Tourist spot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete tourist spot' });
  }
});

module.exports = router;