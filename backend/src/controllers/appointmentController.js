const prisma = require('../config/database');
const { sendInquiryEmail } = require('../utils/email');

const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, preferredDate, preferredTime, service, country, message } = req.body;

    // Save to database first
    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        preferredDate: new Date(preferredDate),
        preferredTime,
        service,
        country,
        message,
        userId: req.user?.id || null
      }
    });

    // Create notification for all admins
    try {
      const admins = await prisma.user.findMany({
        where: { role: { in: ['ADMIN', 'SUPER_ADMIN'] } }
      });

      for (const admin of admins) {
        await prisma.notification.create({
          data: {
            title: 'New Appointment Booking',
            message: `${name} booked an appointment for ${service || 'General'}`,
            type: 'appointment',
            userId: admin.id,
            resourceId: appointment.id,
            resourceType: 'Appointment'
          }
        });
      }
    } catch (notifError) {
      console.error('Failed to create notification:', notifError);
    }

    // Send email notification (don't fail if email fails)
    await sendInquiryEmail({
      name,
      email,
      phone,
      type: service || 'Appointment',
      country,
      preferredDate,
      preferredTime,
      message
    });

    res.status(201).json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const { status } = req.query;

    const where = status ? { status } : {};

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: { preferredDate: 'asc' }
    });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status }
    });

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update appointment' });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.appointment.delete({
      where: { id }
    });

    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment
};
