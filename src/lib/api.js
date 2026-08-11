export const API_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api');

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
      
      // Handle empty responses
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // For non-JSON responses, try to get text or return null
        const text = await response.text();
        data = text ? JSON.parse(text) : null;
      }

      console.log(`API: Response status ${response.status}:`, data);

      if (!response.ok) {
        throw new Error(data?.error || data?.details || `HTTP ${response.status}: ${response.statusText}`);
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      
      // Provide more specific error messages
      if (error.message === 'Failed to fetch') {
        throw new Error(`Unable to connect to API server. Please try again.`);
      }
      
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
      method: 'POST',
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
    console.log('API: Creating blog with data:', data);
    try {
      const result = await this.request('/blog', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      console.log('API: Blog created successfully');
      return result;
    } catch (error) {
      console.error('API: Failed to create blog:', error);
      throw error;
    }
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
    console.log('API: Creating country with data:', data);
    try {
      const result = await this.request('/countries', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      console.log('API: Country created successfully');
      return result;
    } catch (error) {
      console.error('API: Failed to create country:', error);
      throw error;
    }
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
    console.log('API: Creating university with data:', data);
    try {
      const result = await this.request('/universities', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      console.log('API: University created successfully');
      return result;
    } catch (error) {
      console.error('API: Failed to create university:', error);
      throw error;
    }
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

  async getAppointments() {
    return this.request('/appointments');
  }

  // Contact Submissions
  async getContactSubmissions() {
    return this.request('/contact');
  }

  // Users
  async getUsers() {
    return this.request('/users');
  }

  async getUserById(id) {
    return this.request(`/users/${id}`);
  }

  async createUser(data) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateUser(id, data) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Notifications
  async getNotifications(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/notifications${queryString ? `?${queryString}` : ''}`);
  }

  async getUnreadCount() {
    return this.request('/notifications/unread-count');
  }

  async markNotificationAsRead(id) {
    return this.request(`/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  async markAllNotificationsAsRead() {
    return this.request('/notifications/read-all', {
      method: 'PUT',
    });
  }
}

export const api = new ApiClient();