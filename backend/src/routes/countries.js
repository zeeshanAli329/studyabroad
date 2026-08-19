const express = require('express');
const router = express.Router();
const {
  getAllCountries,
  getCountryBySlug,
  createCountry,
  updateCountry,
  deleteCountry
} = require('../controllers/countryController');
const { adminAuth } = require('../middleware/auth');

router.get('/', getAllCountries);
router.get('/:slug', getCountryBySlug);
router.post('/', adminAuth, createCountry);
router.put('/:id', adminAuth, updateCountry);
router.delete('/:id', adminAuth, deleteCountry);

module.exports = router;
