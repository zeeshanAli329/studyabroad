const express = require('express');
const router = express.Router();
const {
  getAllUniversities,
  getUniversityBySlug,
  createUniversity,
  updateUniversity,
  deleteUniversity
} = require('../controllers/universityController');
const { adminAuth } = require('../middleware/auth');

router.get('/', getAllUniversities);
router.get('/:slug', getUniversityBySlug);
router.post('/', adminAuth, createUniversity);
router.put('/:id', adminAuth, updateUniversity);
router.delete('/:id', adminAuth, deleteUniversity);

module.exports = router;
