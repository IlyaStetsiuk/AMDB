const express = require('express');
const router = express.Router();
const { addTrivia, getTriviaByFilm} = require('../controllers/triviaController.js');

router.post('/', addTrivia);
router.get('/:filmId', getTriviaByFilm);

module.exports = router;