// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');
// const { register, adminSignup, login, adminLogin, getProfile, updateProfile, changePassword, getAllUsers, updateUserRole } = require('../controllers/authController');
// const { auth, adminAuth } = require('../middleware/auth');

// // Public user routes
// router.post('/register', [
//   body('email').isEmail().withMessage('Valid email required'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
// ], register);

// router.post('/login', [
//   body('email').isEmail().withMessage('Valid email required'),
//   body('password').notEmpty().withMessage('Password required')
// ], login);

// // Admin routes
// router.post('/admin/signup', [
//   body('fullName').notEmpty().withMessage('Full name required'),
//   body('username').notEmpty().withMessage('Username required'),
//   body('email').isEmail().withMessage('Valid email required'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   body('confirmPassword').notEmpty().withMessage('Confirm password required')
// ], adminSignup);

// router.post('/admin/login', [
//   body('emailOrUsername').notEmpty().withMessage('Email or username required'),
//   body('password').notEmpty().withMessage('Password required')
// ], adminLogin);

// // Protected routes
// router.get('/profile', auth, getProfile);
// router.put('/profile', auth, updateProfile);
// router.put('/change-password', auth, changePassword);

// // Admin user management routes
// router.get('/admin/users', adminAuth, getAllUsers);
// router.put('/admin/users/role', adminAuth, updateUserRole);
// module.exports = router;
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  login,
  adminLogin,
  getProfile,
  updateProfile,
  changePassword,
  getAllUsers,
  updateUserRole,
} = require("../controllers/authController");

const { auth, adminAuth } = require("../middleware/auth");

// =====================================================
// PUBLIC LOGIN
// =====================================================

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  login
);

router.post(
  "/admin/login",
  [
    body("emailOrUsername")
      .notEmpty()
      .withMessage("Email or username required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  adminLogin
);

// =====================================================
// PROTECTED USER PROFILE
// =====================================================

router.get("/profile", auth, getProfile);

router.put("/profile", auth, updateProfile);

router.put("/change-password", auth, changePassword);

// =====================================================
// ADMIN ONLY
// =====================================================

router.get("/admin/users", adminAuth, getAllUsers);

router.put("/admin/users/role", adminAuth, updateUserRole);

module.exports = router;