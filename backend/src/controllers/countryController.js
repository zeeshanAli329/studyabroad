const prisma = require('../config/database');

const getAllCountries = async (req, res) => {
  try {
    const countries = await prisma.country.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        _count: {
          select: {
            universities: true,
            scholarships: true
          }
        }
      },
      orderBy: { name: 'asc' }
    });

    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

const getCountryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const country = await prisma.country.findUnique({
      where: { slug },
      include: {
        universities: {
          where: { status: 'PUBLISHED' },
          take: 10
        },
        scholarships: {
          where: { status: 'PUBLISHED' },
          take: 6,
          orderBy: { deadline: 'asc' }
        }
      }
    });

    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }

    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country' });
  }
};

const createCountry = async (req, res) => {
  try {
    const data = req.body;

    const country = await prisma.country.create({
      data
    });

    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create country' });
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const country = await prisma.country.update({
      where: { id },
      data
    });

    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update country' });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.country.delete({
      where: { id }
    });

    res.json({ message: 'Country deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete country' });
  }
};

module.exports = {
  getAllCountries,
  getCountryBySlug,
  createCountry,
  updateCountry,
  deleteCountry
};
