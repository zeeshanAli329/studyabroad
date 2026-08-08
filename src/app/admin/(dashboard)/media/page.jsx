import AdminHeader from "@/components/admin/AdminHeader";

export const metadata = {
  title: "RouteX Admin | Media",
  description: "Manage media files in the RouteX Study Abroad platform."
};

export default function AdminMediaPage() {
  return (
    <>
      <AdminHeader 
        title="Media Library" 
        subtitle="Manage images, videos and documents"
      />
      <div>
        <div className="flex justify-between items-center mb-8">
          <button className="bg-[#8CC63F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6FA82F] transition">
            Upload Media
          </button>
        </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <p className="text-center text-[var(--text-secondary)]">
          No media files uploaded yet
        </p>
      </div>
      </div>
    </>
  );
}
