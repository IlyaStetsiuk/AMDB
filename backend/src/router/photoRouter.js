const express = require('express');
const router = express.Router();
const { addPhoto, getPhotosByFilm, deletePhoto } = require('../controllers/photoController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, addPhoto);
router.get('/:filmId', getPhotosByFilm);
router.delete('/:id', authenticateToken, deletePhoto);

module.exports = router;