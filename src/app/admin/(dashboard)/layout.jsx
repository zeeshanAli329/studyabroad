import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper";

export default function DashboardLayout({ children }) {
  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar />
        <div className="lg:ml-72">
          <div className="min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </AdminAuthWrapper>
  );
}
