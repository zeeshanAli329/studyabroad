const prisma = require('../config/database');

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        country: true
      },
      orderBy: { name: 'asc' }
    });

    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
};

const getDestinationBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const destination = await prisma.destination.findUnique({
      where: { slug },
      include: {
        country: true,
        universities: {
          where: { status: 'PUBLISHED' },
          take: 10
        }
      }
    });

    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }

    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destination' });
  }
};

const createDestination = async (req, res) => {
  try {
    const data = req.body;

    const destination = await prisma.destination.create({
      data,
      include: {
        country: true
      }
    });

    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create destination' });
  }
};

const updateDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const destination = await prisma.destination.update({
      where: { id },
      data,
      include: {
        country: true
      }
    });

    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update destination' });
  }
};

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.destination.delete({
      where: { id }
    });

    res.json({ message: 'Destination deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete destination' });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationBySlug,
  createDestination,
  updateDestination,
  deleteDestination
};
