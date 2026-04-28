# Portfolio Backend

Backend API for the multi-page portfolio project.

## Features
- Projects CRUD with GitHub, Kaggle, live demo, architecture link, and optional image upload.
- Certificates CRUD with image upload and description.
- Contact form endpoint for frontend integration.
- Admin JWT authentication for protected write operations.
- MongoDB persistence with Mongoose.
- Public listings default to published projects only.
- Admin can update project and certificate details after creation.

## Quick Start
1. Install dependencies:
   npm install
2. Copy env file:
   copy .env.example .env
3. Update `.env` values.
4. Start development server:
   npm run dev

## Deploy on Render
1. Create a Render Web Service from this repo.
2. Set Root Directory to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Health Check Path: `/api/health`
6. Add required environment variables from `.env.example`.
7. Set `MONGODB_URI` to your MongoDB Atlas connection string, not a local URI.
8. Set `CORS_ORIGIN` to your Vercel domain(s) as comma-separated values.

Example:
`CORS_ORIGIN=https://your-frontend.vercel.app,https://your-frontend-git-main-yourteam.vercel.app`

## API Base URL
`http://localhost:5000/api`

## Endpoints
- `GET /api/health`

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

- `GET /api/content/overview`
- `GET /api/content/site`

## Notes
- Uploaded files are served from `/uploads`.
- Frontend can use `VITE_API_URL=http://localhost:5000/api`.
- Frontend can optionally use `VITE_RESUME_URL` to show resume download buttons.
- Add `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `.env` before startup.
- Render file storage is ephemeral. Move uploads to object storage for production durability.
