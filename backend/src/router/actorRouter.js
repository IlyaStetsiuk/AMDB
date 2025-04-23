const express = require('express');
const router = express.Router();
const { createActor, linkActorToFilm, getActorsByFilm } = require('../controllers/actorController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, createActor);
router.post('/link', authenticateToken, linkActorToFilm);
router.get('/film/:filmId', getActorsByFilm);

module.exports = router;