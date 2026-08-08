require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const scholarshipRoutes = require('./routes/scholarships');
const blogRoutes = require('./routes/blog');
const countryRoutes = require('./routes/countries');
const contactRoutes = require('./routes/contact');
const appointmentRoutes = require('./routes/appointments');
const universityRoutes = require('./routes/universities');
const destinationRoutes = require('./routes/destinations');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('Request body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/appointments', appointmentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Study Abroad API is running' });
});

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
