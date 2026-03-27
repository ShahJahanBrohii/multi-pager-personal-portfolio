/* ─── PROJECTS ──────────────────────────────────────────────── */
export const PROJECTS = [
  {
    id: 1,
    title: 'YOLOv8m Custom Object Detection',
    desc: 'A high-performance object detection model trained using YOLOv8 architecture, achieving a 0.65 mAP50 on a custom dataset through optimized hyperparameter tuning and 80-epoch training',
    tag: 'ML',
    tech: ['Python', 'Yolo'],
    github: 'https://github.com/ShahJahanBrohii/YOLOv8m-Custom-Object-Detection',
    archLink: '#architecture',
    accent: '#F5A623',
  },
  {
    id: 2,
    title: 'EfficientNet Optimized Transfer Learning',
    desc: 'Implementation of Transfer Learning using the EfficientNet-B0 architecture. The project focuses on binary classification, leveraging pre-trained weights and architectural fine-tuning to achieve high-performance results.',
    tag: 'ML',
    tech: ['Python', 'tensorflow', 'numpy', 'pandas', 'scikit-learn'],
    github: 'https://github.com/ShahJahanBrohii/EffNet-Optimized-Transfer-Learning',
    archLink: null,
    accent: '#4DD9C0',
  },
  {
    id: 3,
    title: 'ConvNext-tiny Dental Cavity Detection',
    desc: 'Medical image classification project for dental caries detection using ConvNeXt-Tiny, transfer learning, and Grad-CAM interpretability.',
    tag: 'ML',
    tech: ['ConvNeXt-Tiny', 'Grad-CAM', 'PyTorch', 'Scikit-learn','OpenCV'],
    github: 'https://github.com/ShahJahanBrohii/convnext-dental-cavity-detection',
    archLink: '#architecture',
    accent: '#F56E6E',
  },
  {
    id: 4,
    title: 'Dental Cavity Detection EfficientNet-B0 and ResNet-50',
    desc: 'A comparative study of EfficientNet-B0 and ResNet-50 for automated dental cavity detection in oral images, achieving 97.3% AUC using PyTorch.',
    tag: 'ML',
    tech: ['Python', 'PyTorch'],
    github: 'https://github.com/ShahJahanBrohii/Dental-Cavity-Detection-DeepLearning',
    archLink: null,
    accent: '#9B7FFF',
  },
  {
    id: 5,
    title: 'Dental Cavity Detection using YOLOv8s',
    desc: 'YOLOv8-based object detection system for automatic dental cavity detection from intraoral images, trained and evaluated on a custom labeled dataset',
    tag: 'ML',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    github: 'https://github.com/ShahJahanBrohii/Medical-Image-Detection-YOLOv8',
    archLink: '#architecture',
    accent: '#F5A623',
  },
  {
    id: 6,
    title: 'LLM Latency Predictor',
    desc: 'A predictive modeling framework using Ridge Regression to estimate per-token inference latency in Large Language Models (Mistral-7B) based on prompt-level features and context size.',
    tag: 'ML',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Hugging Face'],
    github: 'https://github.com/ShahJahanBrohii/LLM-Latency-Predictor',
    archLink: null,
    accent: '#4DD9C0',
  },
   {
    id: 7,
    title: 'Neural Style Transfer Pytorch Implementation',
    desc: 'This is the implementation of Neural Style Transfer in Pytorch',
    tag: 'ML',
    tech: ['Python','Pytorch'],
    github: 'https://github.com/ShahJahanBrohii/Neural-Style-Transfer-Pytorch-Implementation',
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
  { title: 'Internship Certificate',     issuer: 'Your Company', year: '2024', color: '#F5A623', tag: 'Internship', image: '/src/images/internship.jpg' },
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
