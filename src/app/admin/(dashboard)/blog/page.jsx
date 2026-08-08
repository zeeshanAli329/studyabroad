import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export const metadata = {
  title: "RouteX Admin | Blogs",
  description: "Manage blog content in the RouteX Study Abroad platform."
};

export default function AdminBlogPage() {
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
          <button className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200">
            Add Post
          </button>
        </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
            <tr>
              <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                No blog posts found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
