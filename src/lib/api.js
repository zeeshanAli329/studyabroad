const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

class ApiClient {
  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
        console.log('API: Adding auth token');
      } else {
        console.log('API: No auth token found');
      }
    }

    const config = {
      ...options,
      headers,
    };

    console.log(`API: ${options.method || 'GET'} ${url}`);

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      console.log(`API: Response status ${response.status}:`, data);

      if (!response.ok) {
        throw new Error(data.error || data.details || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth
  async register(data) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getProfile() {
    return this.request('/auth/profile');
  }

  async updateProfile(data) {
    return this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async changePassword(data) {
    return this.request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Scholarships
  async getScholarships(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/scholarships${queryString ? `?${queryString}` : ''}`);
  }

  async getScholarshipBySlug(slug) {
    return this.request(`/scholarships/${slug}`);
  }

  async createScholarship(data) {
    console.log('API: Creating scholarship with data:', data);
    try {
      const result = await this.request('/scholarships', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      console.log('API: Scholarship created successfully');
      return result;
    } catch (error) {
      console.error('API: Failed to create scholarship:', error);
      throw error;
    }
  }

  async updateScholarship(id, data) {
    return this.request(`/scholarships/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteScholarship(id) {
    return this.request(`/scholarships/${id}`, {
      method: 'DELETE',
    });
  }

  async toggleSaveScholarship(scholarshipId) {
    return this.request(`/scholarships/${scholarshipId}/save`, {
      method: 'POST',
    });
  }

  // Blogs
  async getBlogs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/blog${queryString ? `?${queryString}` : ''}`);
  }

  async getBlogBySlug(slug) {
    return this.request(`/blog/${slug}`);
  }

  async createBlog(data) {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateBlog(id, data) {
    return this.request(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteBlog(id) {
    return this.request(`/blog/${id}`, {
      method: 'DELETE',
    });
  }

  async toggleSaveBlog(blogId) {
    return this.request(`/blog/${blogId}/save`, {
      method: 'POST',
    });
  }

  // Countries
  async getCountries() {
    return this.request('/countries');
  }

  async getCountryBySlug(slug) {
    return this.request(`/countries/${slug}`);
  }

  async createCountry(data) {
    return this.request('/countries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCountry(id, data) {
    return this.request(`/countries/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCountry(id) {
    return this.request(`/countries/${id}`, {
      method: 'DELETE',
    });
  }

  // Universities
  async getUniversities() {
    return this.request('/universities');
  }

  async getUniversityBySlug(slug) {
    return this.request(`/universities/${slug}`);
  }

  async createUniversity(data) {
    return this.request('/universities', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateUniversity(id, data) {
    return this.request(`/universities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteUniversity(id) {
    return this.request(`/universities/${id}`, {
      method: 'DELETE',
    });
  }

  // Destinations
  async getDestinations(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/destinations${queryString ? `?${queryString}` : ''}`);
  }

  async getDestinationBySlug(slug) {
    return this.request(`/destinations/${slug}`);
  }

  async createDestination(data) {
    return this.request('/destinations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateDestination(id, data) {
    return this.request(`/destinations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteDestination(id) {
    return this.request(`/destinations/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact
  async submitContact(data) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Appointments
  async createAppointment(data) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiClient();
