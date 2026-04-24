# Portfolio Backend

Backend API for the multi-page portfolio project.

## Features
- Projects CRUD with GitHub, Kaggle, and optional image upload.
- Certificates CRUD with image upload and description.
- Contact form endpoint for frontend integration.
- Admin JWT authentication for protected write operations.
- MongoDB persistence with Mongoose.

## Quick Start
1. Install dependencies:
   npm install
2. Copy env file:
   copy .env.example .env
3. Update `.env` values.
4. Start development server:
   npm run dev

## API Base URL
`http://localhost:5000/api`

## Endpoints
- `POST /api/auth/login`
- `GET /api/auth/me` (admin token required)

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects` (admin token + multipart/form-data, field `image` optional)
- `PUT /api/projects/:id` (admin token + multipart/form-data, field `image` optional)
- `DELETE /api/projects/:id` (admin token)

- `GET /api/certificates`
- `GET /api/certificates/:id`
- `POST /api/certificates` (admin token + multipart/form-data, field `image` required)
- `PUT /api/certificates/:id` (admin token + multipart/form-data, field `image` optional)
- `DELETE /api/certificates/:id` (admin token)

- `POST /api/contact`
- `GET /api/contact` (admin token)

## Notes
- Uploaded files are served from `/uploads`.
- Frontend can use `VITE_API_URL=http://localhost:5000/api`.
- Add `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `.env` before startup.
