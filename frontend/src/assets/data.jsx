/* ─── PROJECTS ──────────────────────────────────────────────── */
export const PROJECTS = [
  {
    id: 1,
    title: 'Neural Sentiment Analyzer',
    desc: 'Bidirectional LSTM trained on 50k+ Amazon reviews. 94.2% accuracy with FastAPI inference endpoint and live prediction demo.',
    tag: 'ML',
    tech: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'NumPy'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: '#architecture',
    accent: '#F5A623',
  },
  {
    id: 2,
    title: 'MERN E-Commerce API',
    desc: 'Production-grade REST API — JWT + refresh tokens, Stripe payments, Redis caching, rate limiting, full test suite.',
    tag: 'Backend',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: null,
    accent: '#4DD9C0',
  },
  {
    id: 3,
    title: 'Image Classification CNN',
    desc: 'ResNet50 transfer learning on CIFAR-100 with custom augmentation pipeline. 96.1% top-5 accuracy, exported to TensorFlow Lite.',
    tag: 'ML',
    tech: ['PyTorch', 'Python', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: '#architecture',
    accent: '#F56E6E',
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    desc: 'WebSocket-powered chat with rooms, DMs, typing indicators, read receipts, and file sharing — full MERN stack.',
    tag: 'Backend',
    tech: ['Socket.io', 'Node.js', 'React', 'MongoDB', 'JWT'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: null,
    accent: '#9B7FFF',
  },
  {
    id: 5,
    title: 'House Price Predictor',
    desc: 'Stacked ensemble (XGBoost + Random Forest + Ridge) on Kaggle dataset. R² = 0.918 with full EDA and feature engineering.',
    tag: 'ML',
    tech: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Seaborn'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: '#architecture',
    accent: '#F5A623',
  },
  {
    id: 6,
    title: 'Task Manager API',
    desc: 'Role-based access control, audit logs, recurring task scheduler, team workspaces, and Nodemailer notification system.',
    tag: 'Backend',
    tech: ['Express', 'MongoDB', 'Nodemailer', 'Bull Queue'],
    github: 'https://github.com/ShahJahanBrohii',
    archLink: null,
    accent: '#4DD9C0',
  },
];

/* ─── SKILLS ────────────────────────────────────────────────── */
export const SKILLS = {
  Languages: [
    { name: 'Python',       level: 90 },
    { name: 'JavaScript',   level: 85 },
    { name: 'SQL',          level: 78 },
    { name: 'Kotlin',       level: 58 },
  ],
  'ML / Deep Learning': [
    { name: 'TensorFlow',   level: 82 },
    { name: 'PyTorch',      level: 76 },
    { name: 'Scikit-learn', level: 88 },
    { name: 'Keras',        level: 80 },
    { name: 'Pandas',       level: 90 },
    { name: 'NumPy',        level: 88 },
  ],
  'Backend / APIs': [
    { name: 'Node.js',      level: 86 },
    { name: 'Express.js',   level: 88 },
    { name: 'Next.js',      level: 70 },
    { name: 'FastAPI',      level: 72 },
    { name: 'REST APIs',    level: 92 },
  ],
  'Database & Cloud': [
    { name: 'MongoDB',      level: 86 },
    { name: 'MySQL',        level: 78 },
    { name: 'AWS',          level: 60 },
    { name: 'Git / GitHub', level: 92 },
  ],
};

/* ─── STACK MARQUEE ─────────────────────────────────────────── */
export const STACK = [
  'Python', 'Node.js', 'TensorFlow', 'PyTorch', 'React',
  'Express', 'MongoDB', 'Next.js', 'Scikit-learn', 'FastAPI',
  'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'AWS',
  'MySQL', 'Redis', 'Socket.io', 'JWT', 'Git',
];

/* ─── TIMELINE ──────────────────────────────────────────────── */
export const TIMELINE = [
  { year: '2023', tag: 'Education',    title: 'BSc Computer Science',       body: 'Enrolled at Sukkur IBA University. Core CS: DSA, OOP, DBMS, Math. Current CGPA: 3.27 / 4.0.',            color: '#F5A623' },
  { year: '2023', tag: 'Frontend',     title: 'Web Foundations',            body: 'Mastered HTML, CSS, JavaScript. Built 10+ mini projects — calculators, sliders, UI clones.',                 color: '#4DD9C0' },
  { year: '2024', tag: 'Backend',      title: 'MERN Stack Deep-Dive',       body: 'Node.js, Express, MongoDB end-to-end. REST APIs, JWT auth, real-time apps with Socket.io.',                 color: '#9B7FFF' },
  { year: '2024', tag: 'ML',           title: 'Machine Learning Begins',    body: 'Discovered ML via Andrew Ng. First Scikit-learn models. Fell deep into data science and model tuning.',    color: '#F56E6E' },
  { year: '2025', tag: 'Deep Learning',title: 'Neural Networks & DL',       body: 'TensorFlow, Keras, PyTorch. CNNs for computer vision, LSTMs for NLP, real model deployments.',             color: '#F5A623' },
  { year: 'Now',  tag: 'Current',      title: 'Backend + AI/ML',            body: 'Specializing in production ML pipelines & scalable APIs. Actively seeking internship opportunities.',       color: '#4DD9C0' },
];

/* ─── CERTIFICATIONS ────────────────────────────────────────── */
export const CERTS = [
  { title: 'Machine Learning Specialization',     issuer: 'Coursera / DeepLearning.AI', year: '2024', color: '#F5A623', tag: 'ML' },
  { title: 'Deep Learning with TensorFlow',       issuer: 'Coursera',                   year: '2024', color: '#F56E6E', tag: 'ML' },
  { title: 'The Complete Node.js Dev Course',     issuer: 'Udemy',                      year: '2023', color: '#4DD9C0', tag: 'Backend' },
  { title: 'MERN Stack Front To Back',            issuer: 'Udemy',                      year: '2024', color: '#9B7FFF', tag: 'Backend' },
  { title: 'Python for Data Science & ML Bootcamp', issuer: 'Udemy',                    year: '2024', color: '#F5A623', tag: 'ML' },
  { title: 'AWS Cloud Practitioner Essentials',   issuer: 'AWS',                        year: '2024', color: '#4DD9C0', tag: 'Cloud' },
];

/* ─── RESUME ────────────────────────────────────────────────── */
export const RESUME = {
  education: [
    {
      degree: 'Bachelor of Science — Computer Science',
      institution: 'Sukkur IBA University',
      period: '2023 – Present',
      gpa: '3.27 / 4.0',
      notes: ['Coursework: DSA, OOP, DBMS, Discrete Math, AI Fundamentals'],
    },
  ],
  experience: [
    {
      role: 'Self-Directed Software Developer',
      company: 'Open Source & Personal Projects',
      period: '2023 – Present',
      bullets: [
        'Built 40+ GitHub repositories spanning web development, ML models, and data pipelines',
        'Developed production-grade MERN APIs featuring JWT auth, rate limiting, and Stripe integration',
        'Trained and evaluated multiple deep learning models for classification and NLP tasks',
        'Participated in Kaggle competitions, achieving top-15% results on structured data problems',
      ],
    },
  ],
};
