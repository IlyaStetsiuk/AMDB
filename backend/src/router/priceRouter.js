const express = require('express');
const router = express.Router();
const { addPrice, getPricesByFilm} = require('../controllers/priceController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, addPrice);
router.get('/film/:filmId', getPricesByFilm);

module.exports = router;