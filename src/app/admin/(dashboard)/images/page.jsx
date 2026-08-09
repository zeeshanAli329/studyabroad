"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import { api } from "@/lib/api";

export default function ImagesPage() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // all, country, university, destination, blog, scholarship

  useEffect(() => {
    checkAuth();
    fetchImages();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      
      // Fetch all content types with images
      const [countries, universities, destinations, blogs, scholarships] = await Promise.all([
        api.getCountries(),
        api.getUniversities(),
        api.getDestinations({ limit: 100 }),
        api.getBlogs({ limit: 100 }),
        api.getScholarships({ limit: 100 })
      ]);

      // Extract images from each content type
      const extractedImages = [];

      countries.forEach(country => {
        if (country.image) {
          extractedImages.push({
            id: country.id,
            url: country.image,
            title: country.name,
            type: 'Country',
            slug: country.slug,
            contentType: 'country'
          });
        }
        if (country.flag) {
          extractedImages.push({
            id: country.id + '-flag',
            url: country.flag,
            title: `${country.name} Flag`,
            type: 'Country Flag',
            slug: country.slug,
            contentType: 'country'
          });
        }
      });

      universities.forEach(university => {
        if (university.image) {
          extractedImages.push({
            id: university.id,
            url: university.image,
            title: university.name,
            type: 'University',
            slug: university.slug,
            contentType: 'university'
          });
        }
      });

      destinations.forEach(destination => {
        if (destination.image) {
          extractedImages.push({
            id: destination.id,
            url: destination.image,
            title: destination.name,
            type: 'Destination',
            slug: destination.slug,
            contentType: 'destination'
          });
        }
      });

      blogs.forEach(blog => {
        if (blog.image) {
          extractedImages.push({
            id: blog.id,
            url: blog.image,
            title: blog.title,
            type: 'Blog',
            slug: blog.slug,
            contentType: 'blog'
          });
        }
      });

      scholarships.forEach(scholarship => {
        if (scholarship.image) {
          extractedImages.push({
            id: scholarship.id,
            url: scholarship.image,
            title: scholarship.title,
            type: 'Scholarship',
            slug: scholarship.slug,
            contentType: 'scholarship'
          });
        }
      });

      setImages(extractedImages);
      setError(null);
    } catch (err) {
      setError('Failed to load images');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.contentType === filter);

  const getFilterColor = (type) => {
    switch (type) {
      case 'country': return 'bg-blue-100 text-blue-800';
      case 'university': return 'bg-purple-100 text-purple-800';
      case 'destination': return 'bg-green-100 text-green-800';
      case 'blog': return 'bg-orange-100 text-orange-800';
      case 'scholarship': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <AdminHeader 
        title="Images & Media" 
        subtitle="View all images used across the website"
      />
      <div className="p-6 lg:p-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "all" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All ({images.length})
            </button>
            <button
              onClick={() => setFilter("country")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "country" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Countries ({images.filter(i => i.contentType === 'country').length})
            </button>
            <button
              onClick={() => setFilter("university")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "university" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Universities ({images.filter(i => i.contentType === 'university').length})
            </button>
            <button
              onClick={() => setFilter("destination")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "destination" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Destinations ({images.filter(i => i.contentType === 'destination').length})
            </button>
            <button
              onClick={() => setFilter("blog")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "blog" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Blogs ({images.filter(i => i.contentType === 'blog').length})
            </button>
            <button
              onClick={() => setFilter("scholarship")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === "scholarship" 
                  ? "bg-[#8CC63F] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Scholarships ({images.filter(i => i.contentType === 'scholarship').length})
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading images...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchImages}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-lg hover:bg-[#6FA82F]"
              >
                Try Again
              </button>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFilterColor(image.contentType)}`}>
                        {image.type}
                      </span>
                    </div>
                    <h3 className="mt-2 font-medium text-gray-900 truncate">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {image.url}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
