const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  getDestinationBySlug,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');
const { adminAuth } = require('../middleware/auth');

router.get('/', getAllDestinations);
router.get('/:slug', getDestinationBySlug);
router.post('/', adminAuth, createDestination);
router.put('/:id', adminAuth, updateDestination);
router.delete('/:id', adminAuth, deleteDestination);

module.exports = router;
