const express = require('express');
const router = express.Router();
const { addGoof, getGoofsByFilm} = require('../controllers/goofController.js');

router.post('/', addGoof);
router.get('/:filmId', getGoofsByFilm);

module.exports = router;