"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function CreateScholarshipPage() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    description: "",
    universityId: "",
    countryId: "",
    degreeLevel: "",
    fieldOfStudy: "",
    funding: "",
    amount: "",
    currency: "USD",
    deadline: "",
    eligibility: "",
    requirements: "",
    benefits: "",
    applicationUrl: "",
    image: "",
    featured: false,
    status: "DRAFT",
  });

  useEffect(() => {
    fetchCountries();
    fetchUniversities();
  }, []);

  const fetchCountries = async () => {
    try {
      const data = await api.getCountries();
      setCountries(data || []);
    } catch (err) {
      console.error("Failed to fetch countries:", err);
    }
  };

  const fetchUniversities = async () => {
    try {
      const data = await api.getUniversities();
      setUniversities(data || []);
    } catch (err) {
      console.error("Failed to fetch universities:", err);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Submitting scholarship data:", formData);

    try {
      const result = await api.createScholarship(formData);
      console.log("Scholarship created successfully:", result);

      // Show success message
      alert("Scholarship created successfully!");
      router.push("/admin/scholarships");
    } catch (err) {
      console.error("Scholarship creation error:", err);

      // Provide more specific error messages
      if (err.message === "Failed to fetch") {
        setError(
          "Unable to connect to the server. Please ensure the backend is running on port 5000.",
        );
      } else if (err.message.includes("Authentication")) {
        setError("Authentication required. Please log in again.");
      } else if (err.message.includes("Admin access")) {
        setError(
          "Admin access required. You do not have permission to create scholarships.",
        );
      } else {
        setError(
          `Failed to create scholarship: ${err.message || "Unknown error"}`,
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl text-[var(--text-primary)]">
          Create Scholarship
        </h1>
        <Link
          href="/admin/scholarships"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          Back to Scholarships
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Scholarship title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="scholarship-slug"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Short Description
              </label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) =>
                  setFormData({ ...formData, shortDescription: e.target.value })
                }
                rows={2}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                placeholder="Brief description for cards"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Full Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                placeholder="Detailed scholarship description"
              />
            </div>
          </div>

          {/* University & Country */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              University & Country
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Country
                </label>
                <select
                  value={formData.countryId}
                  onChange={(e) =>
                    setFormData({ ...formData, countryId: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  University
                </label>
                <select
                  value={formData.universityId}
                  onChange={(e) =>
                    setFormData({ ...formData, universityId: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Select university</option>
                  {universities.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Academic Details */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Academic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Degree Level
                </label>
                <select
                  value={formData.degreeLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, degreeLevel: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Select degree level</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                  <option value="Postdoc">Postdoc</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  value={formData.fieldOfStudy}
                  onChange={(e) =>
                    setFormData({ ...formData, fieldOfStudy: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="e.g., Engineering, Business, Medicine"
                />
              </div>
            </div>
          </div>

          {/* Funding */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Funding Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Amount
                </label>
                <input
                  type="text"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="e.g., $50,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Currency
                </label>
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Funding Type
                </label>
                <input
                  type="text"
                  value={formData.funding}
                  onChange={(e) =>
                    setFormData({ ...formData, funding: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="e.g., Full tuition + stipend"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Deadline *
              </label>
              <input
                type="date"
                required
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          {/* Requirements & Benefits */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Requirements & Benefits
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Eligibility
                </label>
                <textarea
                  value={formData.eligibility}
                  onChange={(e) =>
                    setFormData({ ...formData, eligibility: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  placeholder="Who can apply"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Requirements
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) =>
                    setFormData({ ...formData, requirements: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  placeholder="Application requirements"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Benefits
                </label>
                <textarea
                  value={formData.benefits}
                  onChange={(e) =>
                    setFormData({ ...formData, benefits: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  placeholder="What the scholarship covers"
                />
              </div>
            </div>
          </div>

          {/* Application */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Application
            </h2>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Application URL
              </label>
              <input
                type="url"
                value={formData.applicationUrl}
                onChange={(e) =>
                  setFormData({ ...formData, applicationUrl: e.target.value })
                }
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="https://example.com/apply"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Image
            </h2>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Status */}
          {/* <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Publication Status</h2>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                    />
                    <span className="text-[var(--text-primary)]">Featured Scholarship</span>
                  </label>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    >
                      <option value="DRAFT">Draft</option>
                      <option value="PUBLISHED">Published</option>
                    </select>
                  </div>
                </div>
              </div> */}

          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Publication Status
            </h2>
            <div className="flex items-center gap-6 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isLatest}
                  onChange={(e) =>
                    setFormData({ ...formData, isLatest: e.target.checked })
                  }
                  className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                />
                <span className="text-[var(--text-primary)]">
                  Latest Scholarship
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                />
                <span className="text-[var(--text-primary)]">Featured</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isAll}
                  onChange={(e) =>
                    setFormData({ ...formData, isAll: e.target.checked })
                  }
                  className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                />
                <span className="text-[var(--text-primary)]">All</span>
              </label>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Scholarship"}
            </button>
            <Link
              href="/admin/scholarships"
              className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
