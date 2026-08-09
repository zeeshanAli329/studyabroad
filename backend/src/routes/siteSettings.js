const express = require('express');
const router = express.Router();
const { getSiteSettings, updateSiteSettings } = require('../controllers/siteSettingsController');
const { authenticate, adminAuth } = require('../middleware/auth');

// Public route - for frontend to fetch site settings
router.get('/', getSiteSettings);

// Admin only - update site settings
router.put('/', authenticate, adminAuth, updateSiteSettings);

module.exports = router;
