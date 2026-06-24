const express = require('express');
const router = express.Router();
const { getHotels, getHotel, createHotel, updateHotel, deleteHotel } = require('../services/hotel');

router.get('/', async (req, res) => {
    try {
        const hotels = await getHotels();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve hotels' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hotel = await getHotel(req.params.id);
        if (!hotel) {
            res.status(404).json({ message: 'Hotel not found' });
        } else {
            res.json(hotel);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve hotel' });
    }
});

router.post('/', async (req, res) => {
    try {
        const hotel = await createHotel(req.body);
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create hotel' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const hotel = await updateHotel(req.params.id, req.body);
        if (!hotel) {
            res.status(404).json({ message: 'Hotel not found' });
        } else {
            res.json(hotel);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update hotel' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const hotel = await deleteHotel(req.params.id);
        if (!hotel) {
            res.status(404).json({ message: 'Hotel not found' });
        } else {
            res.json({ message: 'Hotel deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete hotel' });
    }
});

module.exports = router;