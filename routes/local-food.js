const express = require('express');
const router = express.Router();
const LocalFood = require('../models/local-food');

router.get('/', async (req, res) => {
  try {
    const localFoods = await LocalFood.find();
    res.json(localFoods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch local foods' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const localFood = await LocalFood.findById(req.params.id);
    if (!localFood) {
      return res.status(404).json({ message: 'Local food not found' });
    }
    res.json(localFood);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch local food' });
  }
});

router.post('/', async (req, res) => {
  try {
    const localFood = new LocalFood(req.body);
    await localFood.save();
    res.json(localFood);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create local food' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const localFood = await LocalFood.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!localFood) {
      return res.status(404).json({ message: 'Local food not found' });
    }
    res.json(localFood);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update local food' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await LocalFood.findByIdAndDelete(req.params.id);
    res.json({ message: 'Local food deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete local food' });
  }
});

module.exports = router;