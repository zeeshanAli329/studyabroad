const express = require('express');
const router = express.Router();
const {
  createContactSubmission,
  getAllContactSubmissions,
  updateContactStatus,
  deleteContactSubmission
} = require('../controllers/contactController');
const { auth, adminAuth } = require('../middleware/auth');

router.post('/', createContactSubmission);
router.get('/', adminAuth, getAllContactSubmissions);
router.put('/:id/status', adminAuth, updateContactStatus);
router.delete('/:id', adminAuth, deleteContactSubmission);

module.exports = router;
