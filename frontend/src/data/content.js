// Portfolio content & overview data
import { projectsData } from './projects';
import { certificatesData } from './certificates';
import FlyRankCert from '../images/certificates/flyrank-certificate-of-completion-machine-learning.jpg';
import SafeXCert from '../images/certificates/safeX-AIML.jpeg';
import InternshipFrontend from '../images/certificates/internshipfrontend.jpg';

export const internshipsData = [
  {
    id: 'flyrank',
    role: 'Machine Learning Engineering Intern',
    company: 'FlyRank Corp USA',
    companyUrl: 'https://flyrank.ai',
    period: 'Jul 2026 - Sep 2026',
    badge: 'Applied AI & ML',
    color: '#10B981',
    location: 'Remote (USA)',
    certImage: FlyRankCert,
    certId: 'FR-D11-F5B4E-AD983',
    summary: 'Applied machine learning engineering focused on AI workflows, production model experimentation, and technical competence.',
    bullets: [
      'Researched and integrated applied machine learning workflows for automated intelligence systems.',
      'Assisted in data preprocessing, feature engineering, and model validation across vision and tabular datasets.',
      'Demonstrated technical competency and collaborative delivery within a US-based AI engineering team.',
    ],
    skills: ['Machine Learning', 'Python', 'Model Evaluation', 'AI Workflows', 'Computer Vision'],
  },
  {
    id: 'safex',
    role: 'AI / Machine Learning Intern',
    company: 'SafeX Solutions',
    companyUrl: 'https://safexsolutions.com',
    period: 'Jul 2026 - Sep 2026',
    badge: 'Deep Learning & CV',
    color: '#0EA5E9',
    location: 'Remote',
    certImage: SafeXCert,
    certId: '#95%7@2&$41n6',
    summary: 'Completed the intensive Skills Development Internship Program in AI/ML, focusing on neural network architectures and pipelines.',
    bullets: [
      'Built and evaluated machine learning models as part of the specialized Skills Development Internship Program.',
      'Explored deep learning architectures, automated classification pipelines, and real-time inference logic.',
      'Applied proactive problem-solving to optimize data processing and model metrics.',
    ],
    skills: ['AI/ML', 'PyTorch', 'Data Processing', 'Neural Networks', 'Algorithms'],
  },
  {
    id: 'hightech',
    role: 'Web Developer Intern (Frontend)',
    company: 'High Tech Software House & Training Center',
    period: 'Jun 2025 - Aug 2025',
    badge: 'Frontend Engineering',
    color: '#F59E0B',
    location: 'Nawabshah / Hybrid',
    certImage: InternshipFrontend,
    certId: 'HTSH-Z555565-25-1744',
    summary: 'Completed a 2-month professional web development internship under Pakistan Software Export Board (PSEB) registration.',
    bullets: [
      'Engineered modular, responsive user interface components using modern web standards.',
      'Improved client-facing page loading speeds and cross-browser consistency across mobile and desktop devices.',
      'Worked closely with senior developers following agile practices and clean code conventions.',
    ],
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Responsive Design', 'PSEB Certified'],
  },
];

const stack = [
  { name: 'Python', level: 'Expert' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TensorFlow', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Docker', level: 'Intermediate' },
  { name: 'PyTorch', level: 'Advanced' },
  { name: 'OpenCV', level: 'Advanced' },
  { name: 'FastAPI', level: 'Advanced' },
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
    year: '2022 - 2026',
    tag: 'Education',
    title: 'BSc Computer Science at Sukkur IBA University',
    body: 'Academic focus on Data Structures, Algorithms, Machine Learning, Computer Vision, and Software Engineering.',
    color: '#3B82F6',
  },
  {
    year: '2024',
    tag: 'Certifications',
    title: 'Built Comprehensive AI & Technical Foundation',
    body: 'Earned specialized credentials across Generative AI, Data Science, Data Visualization, and Executive Technical Writing.',
    color: '#8E6CFF',
  },
  {
    year: '2025',
    tag: 'Internship',
    title: 'Web Developer Intern at High Tech Software House',
    body: 'Completed 2-month PSEB-registered internship engineering responsive frontend interfaces and client deliverables.',
    color: '#F59E0B',
  },
  {
    year: '2026',
    tag: 'Internship',
    title: 'AI / ML Intern at SafeX Solutions',
    body: 'Hands-on Skills Development Internship Program implementing deep learning pipelines and predictive models.',
    color: '#0EA5E9',
  },
  {
    year: '2026',
    tag: 'Internship',
    title: 'Machine Learning Intern at FlyRank Corp USA',
    body: 'Applied machine learning engineering, production AI workflows, and model architecture evaluation.',
    color: '#10B981',
  },
];

export const contentOverviewData = {
  heroRoles: ['Machine Learning Engineer', 'AI Specialist', 'Backend Developer'],
  highlights: {
    topTags: topKeys(projectsData, (project) => project.tag),
    credentialCategories: certificateCategories,
  },
  internships: internshipsData,
  skills,
  resume: {
    experience: [
      {
        role: 'Machine Learning Engineering Intern',
        company: 'FlyRank Corp USA',
        period: 'Jul 2026 - Sep 2026',
        bullets: [
          'Worked on applied machine learning workflows and production-level model evaluations.',
          'Researched and integrated data preprocessing and inference pipelines within an agile AI engineering team.',
        ],
      },
      {
        role: 'AI / Machine Learning Intern',
        company: 'SafeX Solutions',
        period: 'Jul 2026 - Sep 2026',
        bullets: [
          'Completed the Skills Development Internship Program focusing on artificial intelligence and neural networks.',
          'Developed machine learning pipelines for automated predictive and classification tasks.',
        ],
      },
      {
        role: 'Web Developer Intern (Frontend)',
        company: 'High Tech Software House & Training Center',
        period: 'Jun 2025 - Aug 2025',
        bullets: [
          'Delivered responsive web interfaces and modular frontend components under PSEB standards.',
          'Maintained high code quality, accessibility, and client-centric usability standards.',
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
          'Focused on AI/ML, computer vision, backend engineering, and distributed systems.',
          'Built an extensive portfolio of computer vision, deep learning, and web development projects.',
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
