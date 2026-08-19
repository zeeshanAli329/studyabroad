"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  ExternalLink,
  X,
} from "lucide-react";
import { api } from "@/lib/api";

const placements = [
  {
    value: "hero-top",
    label: "Hero Top",
  },
  {
    value: "hero-right",
    label: "Hero Right",
  },
  {
    value: "hero-bottom",
    label: "Hero Bottom",
  },
  {
    value: "hero-left",
    label: "Hero Left",
  },
  {
    value: "features-top",
    label: "Features Top",
  },
  {
    value: "features-right",
    label: "Features Right",
  },
  {
    value: "about-top",
    label: "About Top",
  },
  {
    value: "about-right",
    label: "About Right",
  },
  {
    value: "about-left",
    label: "About Left",
  },
  {
    value: "why-choose-us-top",
    label: "Why Choose Us Top",
  },
  {
    value: "countries-top",
    label: "Countries Top",
  },
  {
    value: "countries-right",
    label: "Countries Right",
  },
  {
    value: "services-top",
    label: "Services Top",
  },
  {
    value: "services-right",
    label: "Services Right",
  },
  {
    value: "global-offer-top",
    label: "Global Offer Top",
  },
  {
    value: "coaching-top",
    label: "Coaching Top",
  },
  {
    value: "blog-top",
    label: "Blog Top",
  },
  {
    value: "latest-news-right",
    label: "Latest News Right",
  },
  {
    value: "team-top",
    label: "Team Top",
  },
  {
    value: "faq-top",
    label: "FAQ Top",
  },
  {
    value: "testimonial-top",
    label: "Testimonial Top",
  },
  {
    value: "cta-top",
    label: "CTA Top",
  },
  {
    value: "home-top",
    label: "Home Top",
  },
  {
    value: "home-bottom",
    label: "Home Bottom",
  },
];

const emptyForm = {
  title: "",
  description: "",
  image: "",
  link: "",
  placement: "hero-top",
  isActive: true,
  startDate: "",
  endDate: "",
};

export default function AdvertisementsPage() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editingAd, setEditingAd] = useState(null);

  const [form, setForm] = useState(emptyForm);

  const loadAds = async () => {
    try {
      setLoading(true);

      const response = await api.getAllAdvertisements();

      setAds(response?.data || []);
    } catch (error) {
      console.error(
        "Failed to load advertisements:",
        error
      );

      alert(
        error.message ||
          "Failed to load advertisements"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  const openCreateModal = () => {
    setEditingAd(null);
    setForm({ ...emptyForm });
    setShowModal(true);
  };

  const openEditModal = (ad) => {
    setEditingAd(ad);

    setForm({
      title: ad.title || "",
      description: ad.description || "",
      image: ad.image || "",
      link: ad.link || "",
      placement: ad.placement || "hero-top",
      isActive: ad.isActive ?? true,
      startDate: ad.startDate
        ? ad.startDate.slice(0, 10)
        : "",
      endDate: ad.endDate
        ? ad.endDate.slice(0, 10)
        : "",
    });

    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingAd(null);
    setForm({ ...emptyForm });
  };

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.image.trim() ||
      !form.placement
    ) {
      alert(
        "Title, image URL and placement are required."
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        title: form.title.trim(),

        description:
          form.description.trim() || null,

        image: form.image.trim(),

        link:
          form.link.trim() || null,

        placement: form.placement,

        isActive: form.isActive,

        startDate:
          form.startDate || null,

        endDate:
          form.endDate || null,
      };

      if (editingAd) {
        await api.updateAdvertisement(
          editingAd.id,
          payload
        );
      } else {
        await api.createAdvertisement(payload);
      }

      setShowModal(false);
      setEditingAd(null);
      setForm({ ...emptyForm });

      await loadAds();
    } catch (error) {
      console.error(
        "Failed to save advertisement:",
        error
      );

      alert(
        error.message ||
          "Failed to save advertisement"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this advertisement?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.deleteAdvertisement(id);
      await loadAds();
    } catch (error) {
      console.error(
        "Failed to delete advertisement:",
        error
      );

      alert(
        error.message ||
          "Failed to delete advertisement"
      );
    }
  };

  const handleToggle = async (id) => {
    try {
      await api.toggleAdvertisement(id);
      await loadAds();
    } catch (error) {
      console.error(
        "Failed to toggle advertisement:",
        error
      );

      alert(
        error.message ||
          "Failed to update advertisement"
      );
    }
  };

  const getPlacementLabel = (placement) => {
    const item = placements.find(
      (p) => p.value === placement
    );

    return item?.label || placement;
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Advertisements
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your website advertisements
          </p>
        </div>

        {/* BIGGER ADD BUTTON */}
        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#8CC63F] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#79ad35] hover:shadow-md"
        >
          <Plus size={20} />
          Add Advertisement
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading advertisements...
          </div>
        ) : ads.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500">
              No advertisements found.
            </p>

            <button
              type="button"
              onClick={openCreateModal}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#8CC63F] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#79ad35]"
            >
              <Plus size={19} />
              Add Your First Advertisement
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b bg-gray-50 text-left">
                  <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                    Advertisement
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                    Placement
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                    Created
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {ads.map((ad) => (
                  <tr
                    key={ad.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="h-14 w-20 rounded-lg object-cover"
                        />

                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900">
                            {ad.title}
                          </p>

                          {ad.description && (
                            <p className="mt-1 max-w-[350px] truncate text-xs text-gray-500">
                              {ad.description}
                            </p>
                          )}

                          {ad.link && (
                            <a
                              href={ad.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#8CC63F]"
                            >
                              Visit link
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {getPlacementLabel(
                          ad.placement
                        )}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          ad.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {ad.isActive
                          ? "Active"
                          : "Inactive"}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-500">
                      {new Date(
                        ad.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleToggle(ad.id)
                          }
                          title={
                            ad.isActive
                              ? "Deactivate"
                              : "Activate"
                          }
                          className="rounded-lg border border-gray-200 p-2 text-gray-600 transition hover:border-[#8CC63F] hover:text-[#8CC63F]"
                        >
                          <Power size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            openEditModal(ad)
                          }
                          title="Edit"
                          className="rounded-lg border border-gray-200 p-2 text-gray-600 transition hover:border-[#8CC63F] hover:text-[#8CC63F]"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(ad.id)
                          }
                          title="Delete"
                          className="rounded-lg border border-gray-200 p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between border-b px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {editingAd
                    ? "Edit Advertisement"
                    : "Add Advertisement"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Configure the advertisement placement.
                </p>
              </div>

              {/* MODAL CROSS BUTTON */}
              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close"
                title="Close"
                className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6"
            >
              {/* TITLE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Advertisement Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Study in UK"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Advertisement Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Get expert guidance for studying in the UK..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Optional description for the advertisement.
                </p>
              </div>

              {/* IMAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/ad-image.jpg"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Use the URL of the advertisement image.
                </p>
              </div>

              {/* LINK */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Advertisement Link
                </label>

                <input
                  type="url"
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                />
              </div>

              {/* PLACEMENT */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Placement
                </label>

                <select
                  name="placement"
                  value={form.placement}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                >
                  {placements.map((item) => (
                    <option
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>

                <p className="mt-1 text-xs text-gray-500">
                  Select where this advertisement should appear.
                </p>
              </div>

              {/* DATES */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Start Date
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    End Date
                  </label>

                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#8CC63F]"
                  />
                </div>
              </div>

              {/* ACTIVE */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={form.isActive}
                  onChange={handleChange}
                  className="h-4 w-4 accent-[#8CC63F]"
                />

                <span className="text-sm font-medium text-gray-700">
                  Advertisement is active
                </span>
              </label>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 border-t pt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-[#8CC63F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#79ad35] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingAd
                      ? "Update Advertisement"
                      : "Create Advertisement"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}