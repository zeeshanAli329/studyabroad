const { verifyToken } = require('../config/jwt');
const prisma = require('../config/database');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true, role: true }
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});

    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    next();
  } catch (error) {
    res.status(403).json({ error: 'Admin access required' });
  }
};

const superAdminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});

    if (req.user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Super admin access required' });
    }

    next();
  } catch (error) {
    res.status(403).json({ error: 'Super admin access required' });
  }
};

module.exports = { auth, adminAuth, superAdminAuth };
