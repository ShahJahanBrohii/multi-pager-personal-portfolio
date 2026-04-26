# Multi-Page Portfolio

A responsive multi-page portfolio app with a React/Vite frontend and an Express/MongoDB backend.

## Overview

- Public site pages for Home, About, Portfolio, Resume, Certifications, and Contact.
- Admin dashboard for creating, editing, and deleting projects and certificates.
- Backend-powered content overview for stats, skills, timeline, and resume sections.
- Social links for GitHub, LinkedIn, and Kaggle.
- Responsive layout tuned for mobile, tablet, and desktop.

## Tech Stack

- Frontend: React 19, React Router, Vite
- Backend: Node.js, Express, Mongoose, MongoDB
- Media: Multer uploads served from `/uploads`

## Project Structure

- `frontend/` React app
- `backend/` API server
- `backend/uploads/` uploaded project and certificate images

## Setup

### Backend

1. Open `backend/`
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env`
4. Fill in the required values
5. Start the API with `npm run dev`

### Frontend

1. Open `frontend/`
2. Install dependencies with `npm install`
3. Set frontend environment variables in `.env`
4. Start the app with `npm run dev`

## Environment Variables

### Backend `backend/.env`

- `PORT`
- `MONGODB_URI`
- `CORS_ORIGIN`
- `MAX_FILE_SIZE_MB`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

### Frontend `frontend/.env`

- `VITE_API_URL=http://localhost:5000/api`
- `VITE_RESUME_URL` optional direct URL for the resume download button

## Scripts

### Backend

- `npm run dev` - start the API with nodemon
- `npm start` - start the API with Node

### Frontend

- `npm run dev` - start the Vite dev server
- `npm run build` - build for production
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build

## Backend Features

- Public project listing defaults to published projects only
- Project CRUD with optional image upload
- Certificate CRUD with required image upload on create
- Contact form storage
- Admin JWT authentication
- Content overview endpoint for stats, skills, timeline, and resume sections

## Frontend Notes

- Admin can update project and certificate details after creation
- Resume download links only show when `VITE_RESUME_URL` is set
- The layout is responsive across the main pages and navigation

## Useful API Base URL

`http://localhost:5000/api`

## Key Endpoints

- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/projects`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/certificates`
- `POST /api/certificates`
- `PUT /api/certificates/:id`
- `DELETE /api/certificates/:id`
- `GET /api/content/overview`
- `POST /api/contact`
- `GET /api/contact`

## Notes

- Uploaded files are served from `/uploads`
- Public routes show published content by default
- Admin routes require a valid Bearer token
