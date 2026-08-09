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
    console.log('DESTINATION CREATE - Request body keys:', Object.keys(data));

    // Validate countryId - it's required by the schema
    if (!data.countryId || data.countryId === '') {
      return res.status(400).json({ 
        error: 'Country is required. Please select a valid country.' 
      });
    }

    // Verify the country exists
    const country = await prisma.country.findUnique({
      where: { id: data.countryId }
    });

    if (!country) {
      return res.status(400).json({ 
        error: 'Selected country does not exist. Please select a valid country.' 
      });
    }

    const destination = await prisma.destination.create({
      data,
      include: {
        country: true
      }
    });

    console.log('DESTINATION CREATE - Success:', destination.id);
    res.status(201).json(destination);
  } catch (error) {
    console.error('DESTINATION CREATE ERROR:', error.message);
    console.error('DESTINATION CREATE ERROR details:', error);
    
    // Provide specific error message
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid country selected. Please select a valid country.' });
    }
    
    res.status(500).json({ error: error.message || 'Failed to create destination' });
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
