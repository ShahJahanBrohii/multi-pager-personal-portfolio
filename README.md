# Multi-Page Personal Portfolio

A sleek, responsive multi-page personal portfolio web application built with **React 19**, **Vite**, and modern CSS styling.

Designed to showcase machine learning, computer vision, backend engineering, and web development projects, credentials, and experience.

---

## 🌟 Pages & Features

- **Home (`/`)**: Hero section with typewriter role animation, real-time portfolio statistics, top featured projects, and core tech stack badges.
- **About (`/about`)**: Personal background, domain competencies, interactive categorized skills progress bars (Core, AI/ML, Backend, Tools), and career journey timeline.
- **Portfolio (`/portfolio`)**: Filterable project showcase with category tags (ML, Backend, Web, etc.), difficulty tags, technology chips, architecture links, and direct GitHub links.
- **Resume (`/resume`)**: Detailed breakdown of experience, education, GPA, technical proficiencies, and an optional one-click PDF resume download button.
- **Certifications (`/certifications`)**: Filterable credentials gallery categorized by Courses, Workshops, Webinars, Writing, Internships, and Volunteering with image previews.
- **Contact (`/contact`)**: Form with client-side validation, direct email launcher, and direct social links (GitHub, LinkedIn, Email).
- **Responsive Navigation**: Fixed navbar with mobile drawer navigation, active route styling, and a floating Back-to-Top button.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties, supplemented by [TailwindCSS](https://tailwindcss.com/)
- **Typography & Icons**: Modern SVG icons & web-safe / system fonts

---

## 📁 Project Structure

```text
multi-page-portfolio/
├── README.md
└── frontend/
    ├── index.html
    ├── package.json
    ├── vercel.json
    ├── vite.config.js
    ├── .env.example
    └── src/
        ├── App.jsx             # Main router and route definitions
        ├── main.jsx            # React root mount
        ├── index.css           # Global design system & theme variables
        ├── components/         # Reusable UI components
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── ProjectCard.jsx
        │   └── BackToTop.jsx
        ├── pages/              # Site pages
        │   ├── Home.jsx
        │   ├── About.jsx
        │   ├── Portfolio.jsx
        │   ├── Resume.jsx
        │   ├── Certifications.jsx
        │   └── Contact.jsx
        ├── data/               # Modular data sources
        │   ├── projects.js     # Project entries, tags, and links
        │   ├── certificates.js # Credentials, categories, and images
        │   └── content.js      # Bio, stats, skills, timeline, and resume
        └── images/             # Static image assets and certificate media
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` (bundled with Node.js)

### Installation & Local Development

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   *Set `VITE_RESUME_URL` if you want the "Download Resume" buttons to link to an external PDF or hosted file.*

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

From the `frontend` directory, you can run:

- `npm run dev` — Starts Vite dev server with hot module replacement (HMR).
- `npm run build` — Compiles and minifies the app into `dist/` for production.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs ESLint across the codebase.

---

## 🌐 Deployment (e.g. Vercel)

This frontend is a single-page application (SPA) ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying to Vercel:
1. Import this repository into Vercel.
2. Set the **Root Directory** to `frontend`.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. (Optional) Under Environment Variables, add `VITE_RESUME_URL`.
7. `frontend/vercel.json` is already configured for SPA rewrites.
