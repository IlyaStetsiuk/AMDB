const express = require('express');
const router = express.Router();
const { addKeyword, associateKeywordWithFilm,getFilmsByKeyword} = require('../controllers/keywordController.js');

router.post('/', addKeyword);
router.post('/associate', associateKeywordWithFilm);
router.get('/:keyword', getFilmsByKeyword);

module.exports = router;