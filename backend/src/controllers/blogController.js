const prisma = require('../config/database');

const getAllBlogs = async (req, res) => {
  try {
    const { category, search, featured, limit = 20, offset = 0 } = req.query;

    const where = {
      status: 'PUBLISHED',
      ...(category && { category }),
      ...(featured && { featured: featured === 'true' }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { excerpt: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } }
        ]
      })
    };

    const [blogs, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.blogPost.count({ where })
    ]);

    res.json({ blogs, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await prisma.blogPost.findUnique({
      where: { slug }
    });

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
};

const createBlog = async (req, res) => {
  try {
    const data = req.body;

    const blog = await prisma.blogPost.create({
      data: {
        ...data,
        publishedAt: data.status === 'PUBLISHED' ? new Date() : null
      }
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const blog = await prisma.blogPost.update({
      where: { id },
      data: {
        ...data,
        publishedAt: data.status === 'PUBLISHED' && !data.publishedAt ? new Date() : data.publishedAt
      }
    });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.blogPost.delete({
      where: { id }
    });

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};

const toggleSaveBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.user.id;

    const existing = await prisma.savedBlog.findUnique({
      where: {
        userId_blogId: {
          userId,
          blogId
        }
      }
    });

    if (existing) {
      await prisma.savedBlog.delete({
        where: { id: existing.id }
      });
      res.json({ saved: false });
    } else {
      await prisma.savedBlog.create({
        data: { userId, blogId }
      });
      res.json({ saved: true });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle blog save' });
  }
};

module.exports = {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleSaveBlog
};
