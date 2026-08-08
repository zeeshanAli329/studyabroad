const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all universities
router.get('/', async (req, res) => {
  try {
    const universities = await prisma.university.findMany({
      include: {
        country: true
      },
      orderBy: { name: 'asc' }
    });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

// Get university by slug
router.get('/:slug', async (req, res) => {
  try {
    const university = await prisma.university.findUnique({
      where: { slug: req.params.slug },
      include: {
        country: true
      }
    });
    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch university' });
  }
});

// Create university (admin only)
router.post('/', async (req, res) => {
  try {
    const university = await prisma.university.create({
      data: req.body,
      include: {
        country: true
      }
    });
    res.status(201).json(university);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create university' });
  }
});

// Update university (admin only)
router.put('/:id', async (req, res) => {
  try {
    const university = await prisma.university.update({
      where: { id: req.params.id },
      data: req.body,
      include: {
        country: true
      }
    });
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update university' });
  }
});

// Delete university (admin only)
router.delete('/:id', async (req, res) => {
  try {
    await prisma.university.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete university' });
  }
});

module.exports = router;
