// Import certificate images
import FlyRankCert from '../images/certificates/flyrank-certificate-of-completion-machine-learning.jpg';
import SafeXCert from '../images/certificates/safeX-AIML.jpeg';
import InternshipFrontend from '../images/certificates/internshipfrontend.jpg';
import AdvancedWriting from '../images/certificates/Advanced_Writing.jpg';
import BusinessWriting from '../images/certificates/Buisness_Wrting.jpg';
import CreativeWriting from '../images/certificates/Creative_Writing.jpg';
import EssayWriting from '../images/certificates/Essay_Writing.jpg';
import GrammarPunctuation from '../images/certificates/Grammar_Punctuataion.jpg';
import GenAIWorkshop from '../images/certificates/genaiworkshop.jpg';
import Hackathon from '../images/certificates/hackathon.jpg';
import IEEEVolunteer from '../images/certificates/IEEE_Volnteer.jpg';
import dataScienceWebinar from '../images/certificates/data_Webinar.png';
import PowerBIWebinar from '../images/certificates/powerbi_Webinar.jpg';
import ProjectExpo from '../images/certificates/project_expo.png';
import SibafestVolunteer from '../images/certificates/sibafest_volunteer.jpg';
import SibathoneVolunteer from '../images/certificates/sibathonevolunteer.jpg';
import TableauTraining from '../images/certificates/Tableau_Training.jpg';
import WordPressWorkshop from '../images/certificates/wordpressWorkshop.jpg';

// Certificates repository
export const certificatesData = [
  // ── INTERNSHIPS (Featured at top) ──────────────────────────────
  {
    _id: 'internship-flyrank',
    title: 'Machine Learning Internship',
    issuer: 'FlyRank Corp. AI (FlyRank.ai)',
    year: '2026',
    tag: 'ML / AI',
    category: 'Internships',
    color: '#10B981',
    imageUrl: FlyRankCert,
    desc: 'Completed applied Machine Learning internship focused on AI workflows, production model experimentation, and technical competence.',
    certId: 'FR-D11-F5B4E-AD983',
    period: '01.07.2026 - 21.09.2026',
  },
  {
    _id: 'internship-safex',
    title: 'AI/ML Internship',
    issuer: 'SafeX Solutions',
    year: '2026',
    tag: 'AI / ML',
    category: 'Internships',
    color: '#0EA5E9',
    imageUrl: SafeXCert,
    desc: 'Successfully completed the Skills Development Internship Program in AI/ML, focusing on hands-on artificial intelligence pipelines.',
    certId: '#95%7@2&$41n6',
    period: '23.07.2026 - 22.09.2026',
  },
  {
    _id: 'internship-hightech',
    title: 'Web Developer Internship',
    issuer: 'High Tech Software House & Training Center',
    year: '2025',
    tag: 'Web / UI',
    category: 'Internships',
    color: '#F59E0B',
    imageUrl: InternshipFrontend,
    desc: 'Completed a 2-month internship as Web Developer (PSEB registered), delivering responsive UI components and web applications.',
    certId: 'HTSH-Z555565-25-1744',
    period: 'Jun 2025 - Aug 2025',
  },

  // ── WORKSHOPS ──────────────────────────────────────────────────
  {
    _id: 'workshop-genai',
    title: 'GenAI Workshop',
    issuer: 'Sukkur IBA University',
    year: '2024',
    tag: 'AI',
    category: 'Workshops',
    color: '#8E6CFF',
    imageUrl: GenAIWorkshop,
    desc: 'Hands-on workshop exploring Generative AI architectures, prompt engineering, and LLM implementations.',
  },
  {
    _id: 'workshop-wordpress',
    title: 'WordPress Workshop',
    issuer: 'Web Development Community',
    year: '2024',
    tag: 'CMS',
    category: 'Workshops',
    color: '#0073AA',
    imageUrl: WordPressWorkshop,
    desc: 'Comprehensive WordPress development workshop covering custom themes, hooks, and content structures.',
  },

  // ── WEBINARS & SESSIONS ────────────────────────────────────────
  {
    _id: 'webinar-datascience',
    title: 'Data Science Webinar',
    issuer: 'Data Science Network',
    year: '2024',
    tag: 'Data Science',
    category: 'Webinars/Sessions',
    color: '#5B8DEF',
    imageUrl: dataScienceWebinar,
    desc: 'Exploration of practical data science workflows, EDA methodologies, and statistical modeling.',
  },
  {
    _id: 'webinar-powerbi',
    title: 'Power BI Webinar',
    issuer: 'Business Intelligence Community',
    year: '2024',
    tag: 'Power BI',
    category: 'Webinars/Sessions',
    color: '#F2C94C',
    imageUrl: PowerBIWebinar,
    desc: 'Interactive webinar on Power BI dashboard design, DAX expressions, and data storytelling.',
  },

  // ── COURSES & TRAINING ─────────────────────────────────────────
  {
    _id: 'training-tableau',
    title: 'Tableau Training',
    issuer: 'Data Analytics Training Center',
    year: '2024',
    tag: 'Tableau',
    category: 'Courses & Training',
    color: '#E67E22',
    imageUrl: TableauTraining,
    desc: 'Hands-on training for Tableau dashboards, visual analytics, and dataset integrations.',
  },

  // ── EVENTS & HACKATHONS ────────────────────────────────────────
  {
    _id: 'event-hackathon',
    title: 'Hackathon Participation',
    issuer: 'Sukkur IBA University',
    year: '2024',
    tag: 'Hackathon',
    category: 'Events & Hackathons',
    color: '#FF8A5B',
    imageUrl: Hackathon,
    desc: 'Participation in an intensive competitive hackathon solving real-world software challenges under time limits.',
  },
  {
    _id: 'event-projectexpo',
    title: 'Project Expo',
    issuer: 'Sukkur IBA University',
    year: '2024',
    tag: 'Expo',
    category: 'Events & Hackathons',
    color: '#2F80ED',
    imageUrl: ProjectExpo,
    desc: 'Showcased student software projects and technical solutions at the university-wide Project Expo.',
  },

  // ── VOLUNTEERING ───────────────────────────────────────────────
  {
    _id: 'vol-ieee',
    title: 'IEEE Volunteer Contribution',
    issuer: 'IEEE Student Branch',
    year: '2024',
    tag: 'Volunteer',
    category: 'Volunteering',
    color: '#4ECDC4',
    imageUrl: IEEEVolunteer,
    desc: 'Recognized volunteer contribution supporting technical sessions and organizational activities for IEEE.',
  },
  {
    _id: 'vol-sibafest',
    title: 'SIBA Fest Volunteer',
    issuer: 'Sukkur IBA University',
    year: '2024',
    tag: 'Volunteer',
    category: 'Volunteering',
    color: '#27AE60',
    imageUrl: SibafestVolunteer,
    desc: 'Volunteer support for student engagement, event coordination, and logistics during SIBA Fest.',
  },
  {
    _id: 'vol-sibathon',
    title: 'SIBA Thon Volunteer',
    issuer: 'Sukkur IBA University',
    year: '2024',
    tag: 'Volunteer',
    category: 'Volunteering',
    color: '#EB5757',
    imageUrl: SibathoneVolunteer,
    desc: 'Organized and supported participants throughout the SIBA Thon programming competition.',
  },

  // ── PROFESSIONAL WRITING ───────────────────────────────────────
  {
    _id: 'writing-advanced',
    title: 'Advanced Writing',
    issuer: 'Online Professional Learning',
    year: '2024',
    tag: 'Writing',
    category: 'Writing',
    color: '#FF6B6B',
    imageUrl: AdvancedWriting,
    desc: 'Advanced technical composition, structuring, and academic communication.',
  },
  {
    _id: 'writing-business',
    title: 'Business Writing',
    issuer: 'Online Professional Learning',
    year: '2024',
    tag: 'Business',
    category: 'Writing',
    color: '#4ECDC4',
    imageUrl: BusinessWriting,
    desc: 'Professional communication, executive report drafting, and business correspondence.',
  },
  {
    _id: 'writing-creative',
    title: 'Creative Writing',
    issuer: 'Online Professional Learning',
    year: '2024',
    tag: 'Creative',
    category: 'Writing',
    color: '#FFE66D',
    imageUrl: CreativeWriting,
    desc: 'Narrative structure, creative articulation, and expressive writing techniques.',
  },
  {
    _id: 'writing-essay',
    title: 'Essay Writing',
    issuer: 'Online Professional Learning',
    year: '2024',
    tag: 'Essay',
    category: 'Writing',
    color: '#95E1D3',
    imageUrl: EssayWriting,
    desc: 'Mastery in argument development, logical flow, and structured essay writing.',
  },
  {
    _id: 'writing-grammar',
    title: 'Grammar & Punctuation',
    issuer: 'Online Professional Learning',
    year: '2024',
    tag: 'Grammar',
    category: 'Writing',
    color: '#F38181',
    imageUrl: GrammarPunctuation,
    desc: 'Advanced precision in syntactic structure, grammar rules, and proofreading.',
  },
];
