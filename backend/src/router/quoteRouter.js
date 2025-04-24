const express = require('express');
const router = express.Router();
const { addQuote, getQuotesByFilm} = require('../controllers/quoteController.js');

router.post('/', addQuote);
router.get('/:filmId', getQuotesByFilm);

module.exports = router;