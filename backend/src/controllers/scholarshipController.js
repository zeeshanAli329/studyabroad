const prisma = require('../config/database');

const getAllScholarships = async (req, res) => {
  try {
    const { country, degreeLevel, fieldOfStudy, search, featured, limit = 20, offset = 0, includeAll } = req.query;

    const where = {};
    
    // Only filter by status if not requesting all (for admin)
    if (includeAll !== 'true') {
      where.status = 'PUBLISHED';
    }
    
    if (country) {
      where.country = { slug: country };
    }
    if (degreeLevel) {
      where.degreeLevel = { contains: degreeLevel, mode: 'insensitive' };
    }
    if (fieldOfStudy) {
      where.fieldOfStudy = { contains: fieldOfStudy, mode: 'insensitive' };
    }
    if (featured) {
      where.featured = featured === 'true';
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { shortDescription: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [scholarships, total] = await Promise.all([
      prisma.scholarship.findMany({
        where,
        include: {
          country: true,
          university: true
        },
        orderBy: [{ featured: 'desc' }, { deadline: 'asc' }],
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.scholarship.count({ where })
    ]);

    res.json({ scholarships, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    res.status(500).json({ error: 'Failed to fetch scholarships' });
  }
};

const getScholarshipBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const scholarship = await prisma.scholarship.findUnique({
      where: { slug },
      include: {
        country: true,
        university: true
      }
    });

    if (!scholarship) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scholarship' });
  }
};

const createScholarship = async (req, res) => {
  try {
    const data = req.body;
    
    console.log('Creating scholarship with data:', JSON.stringify(data, null, 2));

    // Clean up empty strings to null for optional relations
    const cleanData = {
      ...data,
      universityId: data.universityId || null,
      countryId: data.countryId || null,
      deadline: data.deadline ? new Date(data.deadline) : null,
    };

    const scholarship = await prisma.scholarship.create({
      data: cleanData,
      include: {
        country: true,
        university: true
      }
    });

    console.log('Scholarship created successfully:', scholarship.id);
    res.status(201).json(scholarship);
  } catch (error) {
    console.error('Error creating scholarship:', error);
    console.error('Error details:', error.message);
    console.error('Error code:', error.code);
    
    res.status(500).json({ 
      error: 'Failed to create scholarship',
      details: error.message,
      code: error.code
    });
  }
};

const updateScholarship = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const scholarship = await prisma.scholarship.update({
      where: { id },
      data,
      include: {
        country: true,
        university: true
      }
    });

    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update scholarship' });
  }
};

const deleteScholarship = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.scholarship.delete({
      where: { id }
    });

    res.json({ message: 'Scholarship deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete scholarship' });
  }
};

const toggleSaveScholarship = async (req, res) => {
  try {
    const { scholarshipId } = req.params;
    const userId = req.user.id;

    const existing = await prisma.savedScholarship.findUnique({
      where: {
        userId_scholarshipId: {
          userId,
          scholarshipId
        }
      }
    });

    if (existing) {
      await prisma.savedScholarship.delete({
        where: { id: existing.id }
      });
      res.json({ saved: false });
    } else {
      await prisma.savedScholarship.create({
        data: { userId, scholarshipId }
      });
      res.json({ saved: true });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle scholarship save' });
  }
};

module.exports = {
  getAllScholarships,
  getScholarshipBySlug,
  createScholarship,
  updateScholarship,
  deleteScholarship,
  toggleSaveScholarship
};
