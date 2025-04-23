const express = require('express');
const router = express.Router();
const { createAwardType, giveAwardToFilm, getAwardsByFilm } = require('../controllers/awardController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/type', authenticateToken, createAwardType);
router.post('/', authenticateToken, giveAwardToFilm);
router.get('/film/:filmId', getAwardsByFilm);

module.exports = router;