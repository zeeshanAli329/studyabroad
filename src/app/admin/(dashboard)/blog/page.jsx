"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";
import { api } from "@/lib/api";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await api.getBlogs({ limit: 100 });
      setBlogs(data.blogs || data || []);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    
    try {
      await api.deleteBlog(id);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
      alert('Failed to delete blog post');
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
      await api.updateBlog(id, { status: newStatus });
      setBlogs(blogs.map(blog => 
        blog.id === id ? { ...blog, status: newStatus } : blog
      ));
    } catch (error) {
      console.error('Failed to update blog status:', error);
      alert('Failed to update blog status');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <AdminHeader 
        title="Blog Posts" 
        subtitle="Manage and publish blog content"
      />
      <div className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">All Blog Posts</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage all blog content</p>
          </div>
          <Link
            href="/admin/blog/create"
            className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200"
          >
            Add Post
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="px-6 py-8 text-center text-gray-500">
              Loading...
            </div>
          ) : blogs.length === 0 ? (
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-6 py-8 text-center text-gray-500">
                    No blog posts found
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{blog.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        {blog.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{blog.author || 'Admin'}</td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(blog.createdAt)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        blog.status === 'PUBLISHED' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {blog.status || 'DRAFT'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/blog/${blog.id}/edit`}
                          className="text-gray-600 hover:text-gray-900 text-sm"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleToggleStatus(blog.id, blog.status)}
                          className="text-gray-600 hover:text-gray-900 text-sm"
                        >
                          {blog.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
