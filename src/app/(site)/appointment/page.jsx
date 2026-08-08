"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function AppointmentPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredDate: formData.get('preferredDate'),
      preferredTime: formData.get('preferredTime'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      await api.createAppointment(data);
      setSuccessMessage('Thank you! Your appointment request has been submitted. We will contact you shortly.');
      e.target.reset();
    } catch (error) {
      setErrorMessage('Failed to submit appointment. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        <h1 className="font-serif text-4xl text-[var(--text-primary)] lg:text-5xl mb-4">
          Book an Appointment
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Schedule a consultation with our visa and study abroad experts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-6">Request Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="">Select a service</option>
                    <option value="Student Visa">Student Visa Consultation</option>
                    <option value="Work Visa">Work Visa Consultation</option>
                    <option value="Tourist Visa">Tourist Visa Consultation</option>
                    <option value="Scholarship">Scholarship Guidance</option>
                    <option value="University">University Selection</option>
                    <option value="General">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>

              {successMessage && (
                <div className="text-green-600 text-center font-medium">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="text-red-600 text-center font-medium">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--background-light)] rounded-xl p-8">
              <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-6">Why Book with Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Expert Guidance</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Our team has years of experience in study abroad and visa processing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Personalized Service</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Tailored advice based on your specific needs and goals.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">High Success Rate</h3>
                    <p className="text-[var(--text-secondary)] text-sm">We have helped thousands of students achieve their study abroad dreams.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Free Consultation</h3>
                    <p className="text-[var(--text-secondary)] text-sm">First consultation is free to help you understand your options.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--secondary)] rounded-xl p-8 text-white">
              <h2 className="font-serif text-2xl mb-4">Contact Us Directly</h2>
              <p className="mb-6 text-white/80">
                Prefer to talk to us immediately? Give us a call or send us an email.
              </p>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="block text-white hover:text-[var(--primary)]">
                  📞 +1 234 567 890
                </a>
                <a href="mailto:info@studyabroad.com" className="block text-white hover:text-[var(--primary)]">
                  ✉️ info@studyabroad.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
