const express = require('express');
const router = express.Router();
const LocalFoodModel = require('../models/local-food');

router.get('/', async (req, res) => {
  try {
    const localFoods = await LocalFoodModel.find();
    res.json(localFoods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch local foods' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const localFood = await LocalFoodModel.findById(req.params.id);
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
    const localFood = new LocalFoodModel(req.body);
    await localFood.save();
    res.json(localFood);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create local food' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const localFood = await LocalFoodModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    await LocalFoodModel.findByIdAndRemove(req.params.id);
    res.json({ message: 'Local food deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete local food' });
  }
});

module.exports = router;