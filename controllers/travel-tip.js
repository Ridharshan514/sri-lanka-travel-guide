const express = require('express');
const router = express.Router();
const TravelTip = require('../models/travel-tip');

router.get('/', async (req, res) => {
    try {
        const travelTips = await TravelTip.find();
        res.json(travelTips);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching travel tips' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const travelTip = await TravelTip.findById(req.params.id);
        if (!travelTip) {
            return res.status(404).json({ message: 'Travel tip not found' });
        }
        res.json(travelTip);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching travel tip' });
    }
});

router.post('/', async (req, res) => {
    try {
        const travelTip = new TravelTip(req.body);
        await travelTip.save();
        res.json(travelTip);
    } catch (error) {
        res.status(500).json({ message: 'Error creating travel tip' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const travelTip = await TravelTip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!travelTip) {
            return res.status(404).json({ message: 'Travel tip not found' });
        }
        res.json(travelTip);
    } catch (error) {
        res.status(500).json({ message: 'Error updating travel tip' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await TravelTip.findByIdAndDelete(req.params.id);
        res.json({ message: 'Travel tip deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting travel tip' });
    }
});

module.exports = router;