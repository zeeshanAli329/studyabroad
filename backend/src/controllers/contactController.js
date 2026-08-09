const prisma = require('../config/database');
const { sendInquiryEmail } = require('../utils/email');

const createContactSubmission = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Save to database first
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

    // Create notification for admin
    try {
      await prisma.notification.create({
        data: {
          title: 'New Contact Form Submission',
          message: `${name} submitted a new inquiry about "${subject || 'General inquiry'}"`,
          type: 'contact',
          resourceId: submission.id,
          resourceType: 'ContactSubmission'
        }
      });
    } catch (notifError) {
      console.error('Failed to create notification:', notifError);
    }

    // Send email notification (don't fail if email fails)
    await sendInquiryEmail({
      name,
      email,
      phone,
      subject,
      message,
      type: 'Contact Form'
    });

    res.status(201).json(submission);
  } catch (error) {
    console.error('Error creating contact submission:', error);
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
