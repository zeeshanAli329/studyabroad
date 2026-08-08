const prisma = require('../config/database');

const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, preferredDate, preferredTime, service, country, message } = req.body;

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

    res.status(201).json(appointment);
  } catch (error) {
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
