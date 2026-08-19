const prisma = require('../config/database');
const crypto = require('crypto');
const { sendSubscriberWelcomeEmail, sendNewSubscriberNotification } = require('../utils/email');

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Check if already subscribed
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingSubscriber) {
      if (existingSubscriber.status === 'ACTIVE') {
        return res.status(400).json({ error: 'You are already subscribed to our newsletter.' });
      } else {
        // Reactivate unsubscribed user
        const reactivated = await prisma.subscriber.update({
          where: { email: normalizedEmail },
          data: {
            status: 'ACTIVE',
            unsubscribedAt: null,
            subscribedAt: new Date()
          }
        });
        return res.json({ message: 'Welcome back! You have been reactivated.', subscriber: reactivated });
      }
    }

    // Create new subscriber
    const unsubscribeToken = crypto.randomBytes(32).toString('hex');
    const subscriber = await prisma.subscriber.create({
      data: {
        email: normalizedEmail,
        status: 'ACTIVE',
        unsubscribeToken
      }
    });

    // Send welcome email to subscriber (non-blocking)
    sendSubscriberWelcomeEmail(normalizedEmail).catch(err => {
      console.error('Failed to send welcome email:', err);
    });

    // Send notification email to admin (non-blocking)
    sendNewSubscriberNotification(subscriber).catch(err => {
      console.error('Failed to send admin notification email:', err);
    });

    // Create notification for admin
    const admins = await prisma.user.findMany({
      where: { role: { in: ['ADMIN', 'SUPER_ADMIN'] } }
    });

    for (const admin of admins) {
      await prisma.notification.create({
        data: {
          title: 'New Newsletter Subscriber',
          message: `${normalizedEmail} subscribed to the StudyAbroad newsletter.`,
          type: 'subscriber',
          userId: admin.id,
          resourceId: subscriber.id,
          resourceType: 'Subscriber'
        }
      });
    }

    res.status(201).json({ message: 'Thank you for subscribing to StudyAbroad.', subscriber });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
};

const unsubscribe = async (req, res) => {
  try {
    const { token } = req.params;

    const subscriber = await prisma.subscriber.findFirst({
      where: { unsubscribeToken: token }
    });

    if (!subscriber) {
      return res.status(404).json({ error: 'Invalid unsubscribe link' });
    }

    if (subscriber.status === 'UNSUBSCRIBED') {
      return res.status(400).json({ error: 'Already unsubscribed' });
    }

    await prisma.subscriber.update({
      where: { id: subscriber.id },
      data: {
        status: 'UNSUBSCRIBED',
        unsubscribedAt: new Date()
      }
    });

    res.json({ message: 'Successfully unsubscribed' });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ error: 'Failed to unsubscribe' });
  }
};

const getAllSubscribers = async (req, res) => {
  try {
    const { status, search } = req.query;

    const where = {};
    if (status) where.status = status;
    if (search) where.email = { contains: search, mode: 'insensitive' };

    const subscribers = await prisma.subscriber.findMany({
      where,
      orderBy: { subscribedAt: 'desc' }
    });

    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
};

const updateSubscriberStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const subscriber = await prisma.subscriber.update({
      where: { id },
      data: { status }
    });

    res.json(subscriber);
  } catch (error) {
    console.error('Error updating subscriber:', error);
    res.status(500).json({ error: 'Failed to update subscriber' });
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.subscriber.delete({
      where: { id }
    });

    res.json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    res.status(500).json({ error: 'Failed to delete subscriber' });
  }
};

const getSubscriberCount = async (req, res) => {
  try {
    const count = await prisma.subscriber.count({
      where: { status: 'ACTIVE' }
    });

    res.json({ count });
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    res.status(500).json({ error: 'Failed to fetch subscriber count' });
  }
};

module.exports = {
  subscribe,
  unsubscribe,
  getAllSubscribers,
  updateSubscriberStatus,
  deleteSubscriber,
  getSubscriberCount
};
