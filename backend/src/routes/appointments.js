const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment
} = require('../controllers/appointmentController');
const { auth, adminAuth } = require('../middleware/auth');

router.post('/', createAppointment);
router.get('/', adminAuth, getAllAppointments);
router.put('/:id/status', adminAuth, updateAppointmentStatus);
router.delete('/:id', adminAuth, deleteAppointment);

module.exports = router;
