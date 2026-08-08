const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleSaveBlog
} = require('../controllers/blogController');
const { auth, adminAuth } = require('../middleware/auth');

router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', adminAuth, createBlog);
router.put('/:id', adminAuth, updateBlog);
router.delete('/:id', adminAuth, deleteBlog);
router.post('/:blogId/save', auth, toggleSaveBlog);

module.exports = router;
