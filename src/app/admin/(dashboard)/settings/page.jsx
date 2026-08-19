"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import ChangePassword from "@/components/admin/settings/ChangePassword";

export default function AdminSettingsPage() {
  const [notificationSoundEnabled, setNotificationSoundEnabled] = useState(true);
  const [notificationTone, setNotificationTone] = useState('tone1');
  const [notificationVolume, setNotificationVolume] = useState(70);
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);
  const [newsletterBlogs, setNewsletterBlogs] = useState(true);
  const [newsletterScholarships, setNewsletterScholarships] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('notificationSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setNotificationSoundEnabled(settings.soundEnabled ?? true);
      setNotificationTone(settings.tone ?? 'tone1');
      setNotificationVolume(settings.volume ?? 70);
    }

    const newsletterSettings = localStorage.getItem('newsletterSettings');
    if (newsletterSettings) {
      const settings = JSON.parse(newsletterSettings);
      setNewsletterEnabled(settings.enabled ?? true);
      setNewsletterBlogs(settings.blogs ?? true);
      setNewsletterScholarships(settings.scholarships ?? true);
    }
  }, []);

  const handleSaveSettings = async () => {
    setSaving(true);
    const settings = {
      soundEnabled: notificationSoundEnabled,
      tone: notificationTone,
      volume: notificationVolume
    };
    localStorage.setItem('notificationSettings', JSON.stringify(settings));

    const newsletterSettings = {
      enabled: newsletterEnabled,
      blogs: newsletterBlogs,
      scholarships: newsletterScholarships
    };
    localStorage.setItem('newsletterSettings', JSON.stringify(newsletterSettings));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setSaving(false);
    alert('Settings saved successfully!');
  };

  const handleTestSound = () => {
    if (!notificationSoundEnabled) {
      alert('Please enable notification sound first');
      return;
    }
    
    // Create audio context for test sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different tones based on selection
    const tones = {
      tone1: 800,
      tone2: 600,
      tone3: 1000,
      tone4: 400
    };
    
    oscillator.frequency.value = tones[notificationTone] || 800;
    gainNode.gain.value = notificationVolume / 100 * 0.5;
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  return (
    <>
      <AdminHeader 
        title="Settings" 
        subtitle="Manage site configuration and preferences"
      />
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Account Settings */}
          <div className="lg:col-span-2 space-y-6">
            <ChangePassword />

            {/* Notification Settings */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notification Sound
                    </label>
                    <p className="text-xs text-gray-500">Play sound when new notifications arrive</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotificationSoundEnabled(!notificationSoundEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSoundEnabled ? 'bg-[#8CC63F]' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSoundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notification Tone
                  </label>
                  <select
                    value={notificationTone}
                    onChange={(e) => setNotificationTone(e.target.value)}
                    disabled={!notificationSoundEnabled}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition disabled:opacity-50"
                  >
                    <option value="tone1">Tone 1 (High)</option>
                    <option value="tone2">Tone 2 (Medium)</option>
                    <option value="tone3">Tone 3 (Higher)</option>
                    <option value="tone4">Tone 4 (Low)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Volume: {notificationVolume}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={notificationVolume}
                    onChange={(e) => setNotificationVolume(parseInt(e.target.value))}
                    disabled={!notificationSoundEnabled}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8CC63F] disabled:opacity-50"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleTestSound}
                  disabled={!notificationSoundEnabled}
                  className="px-4 py-2 border border-[#8CC63F] text-[#8CC63F] rounded-xl font-medium hover:bg-[#8CC63F] hover:text-white transition-colors disabled:opacity-50"
                >
                  Test Sound
                </button>
              </div>
            </div>

            {/* Newsletter Settings */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Newsletter Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enable Newsletter Notifications
                    </label>
                    <p className="text-xs text-gray-500">Send email notifications when new content is published</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNewsletterEnabled(!newsletterEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      newsletterEnabled ? 'bg-[#8CC63F]' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        newsletterEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Send notifications for:</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={newsletterBlogs}
                        onChange={(e) => setNewsletterBlogs(e.target.checked)}
                        disabled={!newsletterEnabled}
                        className="w-4 h-4 text-[#8CC63F] rounded focus:ring-[#8CC63F] disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-700 disabled:opacity-50">New Blogs</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={newsletterScholarships}
                        onChange={(e) => setNewsletterScholarships(e.target.checked)}
                        disabled={!newsletterEnabled}
                        className="w-4 h-4 text-[#8CC63F] rounded focus:ring-[#8CC63F] disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-700 disabled:opacity-50">New Scholarships</span>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert('Test email functionality requires email service configuration')}
                  disabled={!newsletterEnabled}
                  className="px-4 py-2 border border-[#8CC63F] text-[#8CC63F] rounded-xl font-medium hover:bg-[#8CC63F] hover:text-white transition-colors disabled:opacity-50"
                >
                  Test Newsletter Email
                </button>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">View Profile</span>
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
