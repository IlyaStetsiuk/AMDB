const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/:userId', authenticateToken, getUserById);
router.put('/:userId', authenticateToken, updateUser);
router.delete('/:userId', authenticateToken, deleteUser);

module.exports = router;