// const express = require('express');
// const router = express.Router();
// const {
//   getAllScholarships,
//   getScholarshipBySlug,
//   createScholarship,
//   updateScholarship,
//   deleteScholarship,
//   toggleSaveScholarship
// } = require('../controllers/scholarshipController');
// const { auth, adminAuth } = require('../middleware/auth');

// router.get('/', getAllScholarships);
// router.get('/:slug', getScholarshipBySlug);
// router.post('/', adminAuth, createScholarship);
// router.put('/:id', adminAuth, updateScholarship);
// router.delete('/:id', adminAuth, deleteScholarship);
// router.post('/:scholarshipId/save', auth, toggleSaveScholarship);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getAllScholarships,
  getLatestScholarships,
  getFeaturedScholarships,
  getScholarshipBySlug,
  createScholarship,
  updateScholarship,
  deleteScholarship,
  toggleSaveScholarship
} = require('../controllers/scholarshipController');
const { auth, adminAuth } = require('../middleware/auth');

// Specific routes FIRST
router.get('/latest', getLatestScholarships);
router.get('/featured', getFeaturedScholarships);

// General list
router.get('/', getAllScholarships);

// Admin routes
router.post('/', adminAuth, createScholarship);
router.put('/:id', adminAuth, updateScholarship);
router.delete('/:id', adminAuth, deleteScholarship);
router.post('/:scholarshipId/save', auth, toggleSaveScholarship);

// Catch-all by slug — must stay LAST
router.get('/:slug', getScholarshipBySlug);

module.exports = router;