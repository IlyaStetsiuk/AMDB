const express = require('express');
const router = express.Router();
const { createComment, getCommentsByMovie, deleteComment } = require('../controllers/commentController.js');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, createComment);
router.get('/:movieID', getCommentsByMovie);
router.delete('/:id', authenticateToken, deleteComment);


module.exports = router;