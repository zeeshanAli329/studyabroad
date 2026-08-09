const prisma = require('../config/database');

const getAllNotifications = async (req, res) => {
  try {
    const { userId, unreadOnly } = req.query;
    const where = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (unreadOnly === 'true') {
      where.isRead = false;
    }

    const notifications = await prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

const getUnreadCount = async (req, res) => {
  try {
    const userId = req.user?.id;
    
    const count = await prisma.notification.count({
      where: {
        userId,
        isRead: false
      }
    });

    res.json({ count });
  } catch (error) {
    console.error('Error fetching unread count:', error);
    res.status(500).json({ error: 'Failed to fetch unread count' });
  }
};

const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await prisma.notification.update({
      where: { id },
      data: { isRead: true }
    });

    res.json(notification);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
};

const markAllAsRead = async (req, res) => {
  try {
    const userId = req.user?.id;

    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false
      },
      data: { isRead: true }
    });

    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    res.status(500).json({ error: 'Failed to mark all notifications as read' });
  }
};

const createNotification = async (data) => {
  try {
    const notification = await prisma.notification.create({
      data
    });
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

module.exports = {
  getAllNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  createNotification
};
