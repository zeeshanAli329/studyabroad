const express = require('express');
const router = express.Router();
const {
  subscribe,
  unsubscribe,
  getAllSubscribers,
  updateSubscriberStatus,
  deleteSubscriber,
  getSubscriberCount
} = require('../controllers/subscriberController');
const { adminAuth } = require('../middleware/auth');

// Public subscription endpoint
router.post('/subscribe', subscribe);

// Unsubscribe (public with token)
router.get('/unsubscribe/:token', unsubscribe);

// Admin-only endpoints
router.get('/', adminAuth, getAllSubscribers);
router.get('/count', adminAuth, getSubscriberCount);
router.patch('/:id/status', adminAuth, updateSubscriberStatus);
router.delete('/:id', adminAuth, deleteSubscriber);

module.exports = router;
