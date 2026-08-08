import AdminHeader from "@/components/admin/AdminHeader";

export const metadata = {
  title: "RouteX Admin | Settings",
  description: "Manage site configuration and preferences in the RouteX Study Abroad platform."
};

export default function AdminSettingsPage() {
  return (
    <>
      <AdminHeader 
        title="Settings" 
        subtitle="Manage site configuration and preferences"
      />
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">General Settings</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition"
                    placeholder="Study Abroad Platform"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition"
                    placeholder="info@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition"
                    rows="3"
                    placeholder="123 Main Street, City, Country"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200"
                >
                  Save Settings
                </button>
              </form>
            </div>
          </div>

          {/* Account Settings */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Change Password</span>
                  <span className="text-gray-400">→</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Update Profile</span>
                  <span className="text-gray-400">→</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Notification Preferences</span>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Two-Factor Auth</span>
                  <span className="text-gray-400">→</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Login History</span>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
