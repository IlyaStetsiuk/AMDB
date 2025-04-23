const express = require('express');
const router = express.Router();
const { addReview, getReviewsByFilm } = require('../controllers/reviewController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, addReview);
router.get('/film/:filmId', getReviewsByFilm);


module.exports = router;
