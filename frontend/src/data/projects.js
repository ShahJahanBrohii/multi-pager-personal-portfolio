// Mock projects data
export const projectsData = [
  {
    _id: '1',
    title: 'AI Powered Essay Feedback Tool',
    desc: 'A Flask application that compares student essays against sample answers, generates structured AI feedback with strengths, weaknesses, and recommendations, creates polished PDF reports, and emails them automatically. Supports multiple file formats including PDF, DOCX, and images.',
    tag: 'AI',
    tech: ['Python', 'Flask', 'Gemini API', 'PDF Generation', 'Email Integration'],
    github: 'https://github.com/ShahJahanBrohii/ai-feedback-tool',
    difficulty: 'Medium',
    image: '/images/feedbacktool.jpg'
  },
  {
    _id: '2',
    title: 'AI Invoice Extractor',
    desc: "An AI-powered invoice processing system that extracts structured information from PDF invoices using OCR (EasyOCR) and Google's Gemini LLM, validates the extracted data with Pydantic, and exposes the functionality through a FastAPI REST API.",
    tag: 'AI',
    tech: ['Python', 'Flask', 'Gemini API', 'PDF Generation', 'Email Integration'],
    github: 'https://github.com/ShahJahanBrohii/invoice-ai-extractor.git',
    difficulty: 'Medium',
    image: '/images/invoiceextractor.jpg'
  },
  // Add more projects here
];


