const prisma = require('../config/database');

const getAllUniversities = async (req, res) => {
  try {
    const universities = await prisma.university.findMany({
      include: {
        country: true
      },
      orderBy: { name: 'asc' }
    });

    res.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
};

const getUniversityBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const university = await prisma.university.findUnique({
      where: { slug },
      include: {
        country: true
      }
    });

    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }

    res.json(university);
  } catch (error) {
    console.error('Error fetching university:', error);
    res.status(500).json({ error: 'Failed to fetch university' });
  }
};

const createUniversity = async (req, res) => {
  try {
    const data = req.body;
    console.log('UNIVERSITY CREATE - Request body keys:', Object.keys(data));

    // Convert ranking and founded to numbers if provided
    if (data.ranking) data.ranking = parseInt(data.ranking) || null;
    if (data.founded) data.founded = parseInt(data.founded) || null;

    // Validate countryId if provided
    if (data.countryId && data.countryId !== '') {
      // Verify the country exists
      const country = await prisma.country.findUnique({
        where: { id: data.countryId }
      });

      if (!country) {
        return res.status(400).json({ 
          error: 'Selected country does not exist. Please select a valid country.' 
        });
      }
    } else {
      // countryId is required by the schema but the relation can be nullable
      // If the frontend sends empty string, remove it
      delete data.countryId;
    }

    const university = await prisma.university.create({
      data,
      include: {
        country: true
      }
    });

    console.log('UNIVERSITY CREATE - Success:', university.id);
    res.status(201).json(university);
  } catch (error) {
    console.error('UNIVERSITY CREATE ERROR:', error.message);
    console.error('UNIVERSITY CREATE ERROR details:', error);
    
    // Provide specific error message
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid country selected. Please select a valid country.' });
    }
    
    res.status(500).json({ error: error.message || 'Failed to create university' });
  }
};

const updateUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const university = await prisma.university.update({
      where: { id },
      data,
      include: {
        country: true
      }
    });

    res.json(university);
  } catch (error) {
    console.error('Error updating university:', error);
    res.status(500).json({ error: 'Failed to update university' });
  }
};

const deleteUniversity = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.university.delete({
      where: { id }
    });

    res.json({ message: 'University deleted successfully' });
  } catch (error) {
    console.error('Error deleting university:', error);
    res.status(500).json({ error: 'Failed to delete university' });
  }
};

module.exports = {
  getAllUniversities,
  getUniversityBySlug,
  createUniversity,
  updateUniversity,
  deleteUniversity
};
