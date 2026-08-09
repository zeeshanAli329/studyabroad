const express = require('express');
const router = express.Router();
const {
  getAllScholarships,
  getScholarshipBySlug,
  createScholarship,
  updateScholarship,
  deleteScholarship,
  toggleSaveScholarship
} = require('../controllers/scholarshipController');
const { auth, adminAuth } = require('../middleware/auth');

router.get('/', getAllScholarships);
router.get('/:slug', getScholarshipBySlug);
router.post('/', adminAuth, createScholarship);
router.put('/:id', adminAuth, updateScholarship);
router.delete('/:id', adminAuth, deleteScholarship);
router.post('/:scholarshipId/save', auth, toggleSaveScholarship);

module.exports = router;
