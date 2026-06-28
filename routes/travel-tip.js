const express = require('express');
const router = express.Router();
const travelTipService = require('../services/travelTipService');

router.get('/', async (req, res) => {
  try {
    const travelTips = await travelTipService.getTravelTips();
    res.json(travelTips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve travel tips' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const travelTip = await travelTipService.getTravelTip(id);
    if (!travelTip) {
      res.status(404).json({ message: 'Travel tip not found' });
    } else {
      res.json(travelTip);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve travel tip' });
  }
});

router.post('/', async (req, res) => {
  try {
    const travelTip = await travelTipService.createTravelTip(req.body);
    res.json(travelTip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create travel tip' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const travelTip = await travelTipService.updateTravelTip(id, req.body);
    if (!travelTip) {
      res.status(404).json({ message: 'Travel tip not found' });
    } else {
      res.json(travelTip);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update travel tip' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await travelTipService.deleteTravelTip(id);
    res.json({ message: 'Travel tip deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete travel tip' });
  }
});

module.exports = router;