const express = require('express');
const router = express.Router();
const { markAsWatched, updateRatings, getWatchedByUser } = require('../controllers/watchedMoviesController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, markAsWatched);
router.put('/rate', authenticateToken, updateRatings);
router.get('/', authenticateToken, getWatchedByUser);

module.exports = router;