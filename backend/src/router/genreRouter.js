const express = require('express');
const router = express.Router();
const { createGenre, deleteGenre, linkGenreToMovie, getGenresByMovie}  = require('../controllers/genreController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, createGenre);
router.delete('/:id', authenticateToken, deleteGenre);
router.post('/link', authenticateToken, linkGenreToMovie);
router.get('/movie/:filmId', getGenresByMovie);

module.exports = router;