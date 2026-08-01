// Mock content/overview data
import { projectsData } from './projects';
import { certificatesData } from './certificates';

const stack = [
  { name: 'Python', level: 'Expert' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TensorFlow', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Docker', level: 'Intermediate' },
];

function countBy(items, getter) {
  return items.reduce((counts, item) => {
    const key = getter(item);
    counts.set(key, (counts.get(key) || 0) + 1);
    return counts;
  }, new Map());
}

function topKeys(items, getter, limit = 3) {
  return [...countBy(items, getter).entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit)
    .map(([key]) => key);
}

const uniqueProjectTechnologies = new Set([
  ...stack.map((item) => item.name),
  ...projectsData.flatMap((project) => project.tech || []),
]);

const certificateCategories = [...new Set(certificatesData.map((cert) => cert.category))];

const skills = {
  Core: [
    { name: 'Python', level: 92 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 84 },
  ],
  AI: [
    { name: 'PyTorch', level: 90 },
    { name: 'YOLO', level: 88 },
    { name: 'OpenCV', level: 82 },
  ],
  Backend: [
    { name: 'FastAPI', level: 84 },
    { name: 'Flask', level: 80 },
    { name: 'MongoDB', level: 76 },
  ],
  Tools: [
    { name: 'Git / GitHub', level: 90 },
    { name: 'Docker', level: 72 },
    { name: 'Linux', level: 68 },
  ],
};

const timeline = [
  {
    year: '2024',
    tag: 'Certificates',
    title: 'Built a certification base',
    body: 'Collected writing, workshop, webinar, and volunteering credentials while expanding practical skills.',
    color: '#8E6CFF',
  },
  {
    year: '2025',
    tag: 'Projects',
    title: 'Expanded the AI and web portfolio',
    body: 'Shipped multiple computer vision, ML, and frontend projects alongside internships and practice repos.',
    color: '#2F80ED',
  },
  {
    year: '2026',
    tag: 'Internship',
    title: 'ML Engineering Intern at FlyRank',
    body: 'Focused on applied machine learning and production engineering while keeping the portfolio active.',
    color: '#27AE60',
  },
];

export const contentOverviewData = {
  heroRoles: ['Backend Developer', 'ML Enthusiast', 'Data Engineer'],
  highlights: {
    topTags: topKeys(projectsData, (project) => project.tag),
    credentialCategories: certificateCategories,
  },
  skills,
  resume: {
    experience: [
      {
        role: 'ML Engineering Intern',
        company: 'FlyRank Corp USA',
        period: '2026 - Present',
        bullets: [
          'Working on applied machine learning workflows and portfolio-level implementation details.',
          'Building production-minded AI and backend projects with a focus on practical delivery.',
        ],
      },
    ],
    education: [
      {
        degree: 'BSc Computer Science',
        institution: 'Sukkur IBA University',
        period: '2022 - 2026',
        gpa: '3.27 / 4.00',
        notes: [
          'Focused on AI/ML, backend engineering, and full-stack project work.',
          'Built a portfolio of computer vision, web, and automation projects.',
        ],
      },
    ],
  },
  timeline,
  stats: {
    projects: projectsData.length,
    certificates: certificatesData.length,
    tags: new Set(projectsData.map((project) => project.tag)).size,
    technologies: uniqueProjectTechnologies.size,
  },
  stack,
};
