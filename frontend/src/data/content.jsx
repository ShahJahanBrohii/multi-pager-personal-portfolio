// Portfolio content & overview data
import { projectsData } from './projects';
import { certificatesData } from './certificates';
import FlyRankCert from '../images/certificates/flyrank-certificate-of-completion-machine-learning.jpg';
import SafeXCert from '../images/certificates/safeX-AIML.jpeg';
import InternshipFrontend from '../images/certificates/internshipfrontend.jpg';

export const currentRoleData = {
  id: 'reactive-space',
  role: 'Junior AI Engineer',
  company: 'Reactive Space',
  period: 'Sep 2026 - Present',
  badge: 'Speech AI & Voice Agents',
  color: '#22D3EE',
  location: 'On-site',
  summary: 'Building real-time speech AI for voice agents — from live microphone audio and voice activity detection through speech recognition, turn detection, and speech synthesis — with a focus on latency, accuracy, and GPU serving.',
  areas: [
    { title: 'Speech-to-Text', body: 'Streaming ASR on NVIDIA Riva / Parakeet; evaluated Qwen3-ASR and Faster-Whisper.' },
    { title: 'Text-to-Speech', body: 'Served Fish Audio Drama-3 on SGLang-Omni; benchmarked TTFA, RTF and throughput.' },
    { title: 'Voice Activity Detection', body: 'TEN VAD segmentation with pre-roll, hangover and endpointing.' },
    { title: 'Turn Detection', body: 'Prototyping Vogent-Turn-80M to predict when a caller has finished speaking.' },
  ],
  bullets: [
    'Built real-time speech-to-text pipelines with NVIDIA Riva, Parakeet CTC 1.1B, FastAPI and WebSockets — streaming 16 kHz PCM audio from the browser and delivering interim and final transcripts behind a swappable ASR-provider interface.',
    'Integrated and tuned TEN VAD (16 ms frames) with speech-start and continuation thresholds, pre-roll buffering and hangover-based endpointing, so utterances are neither clipped at the start nor cut off mid-pause.',
    'Designed an English-only gate for a Medicare call-center flow, combining acoustic language identification before ASR with post-ASR transcript validation to block non-English speech, Roman Urdu transliteration and background audio.',
    'Deployed Fish Audio Drama-3 on SGLang-Omni with FastAPI for streaming, voice-conditioned TTS; explored FP8/INT4 inference and load-tested 384 requests at 16 concurrent with zero failures, measuring TTFA, RTF and throughput.',
    'Benchmarked ASR alternatives — Qwen3-ASR-1.7B on vLLM and Faster-Whisper (tiny to large-v3-turbo) — on WER, CER, P50/P95 latency and GPU memory.',
    'Running a pretrained Parakeet CTC 1.1B vs RNNT 1.1B evaluation (WER, CER, inference time, peak VRAM) on a reviewed test set to select the model for domain fine-tuning.',
    'Prototyping conversational turn detection with Vogent-Turn-80M, using audio plus previous and current transcript context to decide whether a caller has finished their turn.',
  ],
  skills: ['NVIDIA Riva', 'NeMo / Parakeet', 'FastAPI', 'WebSockets', 'vLLM', 'SGLang', 'Faster-Whisper', 'TEN VAD', 'PyTorch'],
};

export const internshipsData = [
  {
    id: 'flyrank',
    role: 'Machine Learning Engineering Intern',
    company: 'FlyRank Corp USA',
    companyUrl: 'https://flyrank.ai',
    period: 'Jul 2026 - Sep 2026',
    badge: 'Applied AI & ML',
    color: '#22D3EE',
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
    color: '#22D3EE',
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
    color: '#22D3EE',
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

// ── Bio paragraphs (moved from About.jsx) ────────────────────────────────────
export const bioParagraphs = [
  <>
    I am a Computer Science graduate from <strong>Sukkur IBA University</strong> with a deep passion for
    applied artificial intelligence, computer vision, and high-performance software engineering.
  </>,
  <>
    I currently work as a <strong>Junior AI Engineer at Reactive Space</strong>, building real-time speech AI:
    streaming speech recognition, voice activity detection, conversational turn detection, and text-to-speech.
  </>,
  <>
    Before that, I completed <strong>three industry internships</strong> across Machine Learning Engineering at{' '}
    <strong>FlyRank Corp USA</strong>, AI/ML development at <strong>SafeX Solutions</strong>, and responsive
    web development at <strong>High Tech Software House</strong>.
  </>,
  <>
    I focus on translating complex machine learning models into practical, deployable tools—ranging from
    real-time object detection systems to full-stack web applications.
  </>,
];

// ── Technical Pillars (moved from About.jsx) ─────────────────────────────────
export const technicalPillars = [
  {
    iconPath: 'applied-ai',
    accent: 'var(--accent)',
    title: 'Applied AI & Computer Vision',
    tags: ['YOLO', 'PyTorch', 'OpenCV'],
    body: 'Developing accurate object detection pipelines, image segmentation models, and real-time vision algorithms with deep learning frameworks.',
  },
  {
    iconPath: 'backend',
    accent: 'var(--teal)',
    title: 'Backend Systems & APIs',
    tags: ['FastAPI', 'Flask', 'Node.js', 'MongoDB'],
    body: 'Architecting fast, modular REST APIs, scalable service endpoints, database schemas, and data ingestion services.',
  },
  {
    iconPath: 'web',
    accent: 'var(--violet)',
    title: 'Modern Web Engineering',
    tags: ['React 19', 'Vite', 'Modern CSS', 'SPA'],
    body: 'Building fluid, accessible, high-performance web applications with modular component architecture and responsive design systems.',
  },
  {
    iconPath: 'data',
    accent: 'var(--rose)',
    title: 'Data Pipelines & Analytics',
    tags: ['Pandas', 'Power BI', 'Tableau'],
    body: 'Transforming raw unstructured data into actionable insights through robust preprocessing, feature engineering, and interactive dashboards.',
  },
];

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
    color: '#A78BFA',
  },
  {
    year: '2024',
    tag: 'Certifications',
    title: 'Built Comprehensive AI & Technical Foundation',
    body: 'Earned specialized credentials across Generative AI, Data Science, Data Visualization, and Executive Technical Writing.',
    color: '#A78BFA',
  },
  {
    year: '2025',
    tag: 'Internship',
    title: 'Web Developer Intern at High Tech Software House',
    body: 'Completed 2-month PSEB-registered internship engineering responsive frontend interfaces and client deliverables.',
    color: '#22D3EE',
  },
  {
    year: '2026',
    tag: 'Internship',
    title: 'AI / ML Intern at SafeX Solutions',
    body: 'Hands-on Skills Development Internship Program implementing deep learning pipelines and predictive models.',
    color: '#22D3EE',
  },
  {
    year: '2026',
    tag: 'Internship',
    title: 'Machine Learning Intern at FlyRank Corp USA',
    body: 'Applied machine learning engineering, production AI workflows, and model architecture evaluation.',
    color: '#22D3EE',
  },
  {
    year: '2026 - Present',
    tag: 'Full-time',
    title: 'Junior AI Engineer at Reactive Space',
    body: 'Building real-time speech AI pipelines — streaming ASR, voice activity detection, turn detection, and TTS serving and benchmarking.',
    color: '#22D3EE',
  },
];

// ── Lazily-computed stats (avoid module-level heavy computation on every import) ─
let _cachedStats = null;
function getStats() {
  if (_cachedStats) return _cachedStats;
  const uniqueTechs = new Set([
    ...stack.map((item) => item.name),
    ...projectsData.flatMap((p) => p.tech || []),
  ]);
  _cachedStats = {
    projects: projectsData.length,
    certificates: certificatesData.length,
    tags: new Set(projectsData.map((p) => p.tag)).size,
    technologies: uniqueTechs.size,
  };
  return _cachedStats;
}

export const contentOverviewData = {
  heroRoles: ['Junior AI Engineer', 'Speech AI Engineer', 'Machine Learning Engineer', 'Backend Developer'],
  highlights: {
    get topTags() {
      return [...new Map(
        projectsData.reduce((counts, p) => {
          counts.set(p.tag, (counts.get(p.tag) || 0) + 1);
          return counts;
        }, new Map())
      ).entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key]) => key);
    },
    get credentialCategories() {
      return [...new Set(certificatesData.map((c) => c.category))];
    },
  },
  currentRole: currentRoleData,
  internships: internshipsData,
  skills,
  resume: {
    experience: [
      {
        role: 'Junior AI Engineer',
        company: 'Reactive Space',
        period: 'Sep 2026 - Present',
        bullets: [
          'Building real-time speech-to-text pipelines with NVIDIA Riva, Parakeet, FastAPI and WebSockets, with TEN VAD for segmentation and endpointing.',
          'Designed English-only language gating and post-ASR transcript validation for a Medicare call-center voice flow.',
          'Deployed and load-tested Fish Audio Drama-3 TTS on SGLang-Omni (384 requests, 16 concurrent, zero failures), measuring TTFA, RTF and throughput.',
          'Benchmarking ASR models (Parakeet CTC vs RNNT, Qwen3-ASR, Faster-Whisper) on WER, CER, latency and GPU memory to select a model for fine-tuning.',
        ],
      },
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
  get stats() {
    return getStats();
  },
  stack,
};
