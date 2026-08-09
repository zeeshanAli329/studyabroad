const express = require('express');
const router = express.Router();
const {
  getAllNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead
} = require('../controllers/notificationController');
const { auth, adminAuth } = require('../middleware/auth');

router.get('/', auth, getAllNotifications);
router.get('/unread-count', auth, getUnreadCount);
router.put('/:id/read', auth, markAsRead);
router.put('/read-all', auth, markAllAsRead);

module.exports = router;
