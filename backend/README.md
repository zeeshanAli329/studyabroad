# Study Abroad Backend

Backend API for the Study Abroad Platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp ENV_EXAMPLE.txt .env
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Run database migrations:
```bash
npm run prisma:migrate
```

5. Seed the database:
```bash
npm run prisma:seed
```

6. Start the server:
```bash
npm run dev
```

## Development Admin Account

After seeding, you can login with:
- Email: admin@studyabroad.com
- Password: admin123

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- PUT /api/auth/profile
- PUT /api/auth/change-password

### Scholarships
- GET /api/scholarships
- GET /api/scholarships/:slug
- POST /api/scholarships (admin)
- PUT /api/scholarships/:id (admin)
- DELETE /api/scholarships/:id (admin)
- POST /api/scholarships/:scholarshipId/save (auth)

### Blog
- GET /api/blog
- GET /api/blog/:slug
- POST /api/blog (admin)
- PUT /api/blog/:id (admin)
- DELETE /api/blog/:id (admin)
- POST /api/blog/:blogId/save (auth)

### Countries
- GET /api/countries
- GET /api/countries/:slug
- POST /api/countries (admin)
- PUT /api/countries/:id (admin)
- DELETE /api/countries/:id (admin)

### Contact
- POST /api/contact
- GET /api/contact (admin)
- PUT /api/contact/:id/status (admin)
- DELETE /api/contact/:id (admin)

### Appointments
- POST /api/appointments
- GET /api/appointments (admin)
- PUT /api/appointments/:id/status (admin)
- DELETE /api/appointments/:id (admin)
