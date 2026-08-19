// const express = require('express');
// const router = express.Router();
// const {
//   createUser,
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser
// } = require('../controllers/userController');
// const { adminAuth } = require('../middleware/auth');

// router.post('/', adminAuth, createUser);
// router.get('/', adminAuth, getAllUsers);
// router.get('/:id', adminAuth, getUserById);
// router.put('/:id', adminAuth, updateUser);
// router.delete('/:id', adminAuth, deleteUser);

// module.exports = router;

const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const { adminAuth, superAdminAuth } = require('../middleware/auth');


// ADMIN + SUPER_ADMIN
// Can view all users
router.get('/', adminAuth, getAllUsers);

// ADMIN + SUPER_ADMIN
// Can view a specific user
router.get('/:id', adminAuth, getUserById);

// ADMIN + SUPER_ADMIN
// Controller decides whether ADMIN can edit this specific user
// ADMIN -> only own account
// SUPER_ADMIN -> any account
router.put('/:id', adminAuth, updateUser);

// SUPER_ADMIN ONLY
// Only SUPER_ADMIN can create users/admins
// This also prevents ADMIN from creating a SUPER_ADMIN
router.post('/', superAdminAuth, createUser);

// SUPER_ADMIN ONLY
// Only SUPER_ADMIN can delete users
router.delete('/:id', superAdminAuth, deleteUser);


module.exports = router;