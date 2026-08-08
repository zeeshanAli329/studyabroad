const prisma = require('../config/database');

const createContactSubmission = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        userId: req.user?.id || null
      }
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

const getAllContactSubmissions = async (req, res) => {
  try {
    const { status } = req.query;

    const where = status ? { status } : {};

    const submissions = await prisma.contactSubmission.findMany({
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
      orderBy: { createdAt: 'desc' }
    });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact submissions' });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const submission = await prisma.contactSubmission.update({
      where: { id },
      data: { status }
    });

    res.json(submission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact submission' });
  }
};

const deleteContactSubmission = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.contactSubmission.delete({
      where: { id }
    });

    res.json({ message: 'Contact submission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact submission' });
  }
};

module.exports = {
  createContactSubmission,
  getAllContactSubmissions,
  updateContactStatus,
  deleteContactSubmission
};
