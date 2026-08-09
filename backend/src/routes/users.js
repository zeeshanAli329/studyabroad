const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { adminAuth } = require('../middleware/auth');

router.post('/', adminAuth, createUser);
router.get('/', adminAuth, getAllUsers);
router.get('/:id', adminAuth, getUserById);
router.put('/:id', adminAuth, updateUser);
router.delete('/:id', adminAuth, deleteUser);

module.exports = router;
