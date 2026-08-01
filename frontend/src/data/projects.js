// Mock projects data
const rawProjectsData = [
  {
    _id: '26',
    title: 'Phone Directory Management System',
    desc: 'A Java Swing-based phone directory management system developed during the third semester.',
    tag: 'Java',
    tech: ['Java', 'Swing', 'Desktop App'],
    github: 'https://github.com/ShahJahanBrohii/Phone-Directory-Management-System',
    difficulty: 'Medium',
    accent: 'var(--teal)'
  },
  {
    _id: '27',
    title: 'Summer Internship',
    desc: 'Frontend work and internship deliverables created during a summer internship period.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Internship'],
    github: 'https://github.com/ShahJahanBrohii/Summer-Internship',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '28',
    title: 'Advanced JavaScript',
    desc: 'JavaScript practice and revision work focused on strengthening core concepts for internship performance.',
    tag: 'Web',
    tech: ['JavaScript', 'Frontend', 'Practice'],
    github: 'https://github.com/ShahJahanBrohii/Advanced-JavaScript',
    difficulty: 'Easy',
    accent: 'var(--violet)'
  },
  {
    _id: '29',
    title: 'School Website',
    desc: 'A school website built from a reference design and improved independently as a self-led frontend project.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Website'],
    github: 'https://github.com/ShahJahanBrohii/School-Website',
    difficulty: 'Easy',
    accent: 'var(--rose)'
  },
  {
    _id: '30',
    title: 'Cuberto Website Clone',
    desc: 'A clone of the Cuberto website used to refresh and sharpen frontend skills.',
    tag: 'Web',
    tech: ['CSS', 'Frontend', 'Clone'],
    github: 'https://github.com/ShahJahanBrohii/Cuberto-Website-Clone',
    difficulty: 'Medium',
    accent: 'var(--teal)'
  },
  {
    _id: '31',
    title: 'Imagify',
    desc: 'A team-built MERN application created as the final project for Enterprise Application Development.',
    tag: 'Web',
    tech: ['JavaScript', 'MERN', 'Full Stack'],
    github: 'https://github.com/ShahJahanBrohii/Imagify',
    difficulty: 'Hard',
    accent: 'var(--amber)'
  },
  {
    _id: '32',
    title: 'Spam Email Detection Model',
    desc: 'A notebook-based spam email detection model built as a machine learning experiment.',
    tag: 'ML',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/ShahJahanBrohii/Spam-Email-Detection-Model',
    difficulty: 'Medium',
    accent: 'var(--rose)'
  },
  {
    _id: '33',
    title: 'Notepad Clone',
    desc: 'A Java desktop application that recreates a basic notepad experience.',
    tag: 'Java',
    tech: ['Java', 'Desktop App', 'GUI'],
    github: 'https://github.com/ShahJahanBrohii/Notepad-Clone',
    difficulty: 'Medium',
    accent: 'var(--violet)'
  },
  {
    _id: '34',
    title: 'Blog Website',
    desc: 'A basic blog website project focused on frontend structure and layout practice.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Frontend'],
    github: 'https://github.com/ShahJahanBrohii/Blog-Website',
    difficulty: 'Easy',
    accent: 'var(--teal)'
  },
  {
    _id: '35',
    title: 'Student Registration Form',
    desc: 'A simple student registration form project for frontend and form-handling practice.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Forms'],
    github: 'https://github.com/ShahJahanBrohii/Student-Registration-Form',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '36',
    title: 'Educational Website',
    desc: 'An educational website project aimed at strengthening responsive frontend layout skills.',
    tag: 'Web',
    tech: ['CSS', 'Frontend', 'Website'],
    github: 'https://github.com/ShahJahanBrohii/Educational-Webiste',
    difficulty: 'Easy',
    accent: 'var(--rose)'
  },
  {
    _id: '37',
    title: 'Balance Sheet Calculator',
    desc: 'A lightweight calculator-style project for financial or accounting-related practice.',
    tag: 'Web',
    tech: ['CSS', 'Calculator', 'Practice'],
    github: 'https://github.com/ShahJahanBrohii/Balance-Sheet-Calculator',
    difficulty: 'Easy',
    accent: 'var(--violet)'
  },
  {
    _id: '38',
    title: 'Password Toggler',
    desc: 'A small HTML frontend project focused on password visibility toggling behavior.',
    tag: 'Web',
    tech: ['HTML', 'JavaScript', 'Forms'],
    github: 'https://github.com/ShahJahanBrohii/Password-Toggler',
    difficulty: 'Easy',
    accent: 'var(--teal)'
  },
  {
    _id: '39',
    title: 'Digital Clock',
    desc: 'A simple clock project used to practice DOM updates and styling.',
    tag: 'Web',
    tech: ['CSS', 'JavaScript', 'DOM'],
    github: 'https://github.com/ShahJahanBrohii/Digital-Clock',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '40',
    title: 'Age Calculator',
    desc: 'A small age calculator project built as part of basic frontend practice.',
    tag: 'Web',
    tech: ['HTML', 'JavaScript', 'Calculator'],
    github: 'https://github.com/ShahJahanBrohii/Age-Calculator',
    difficulty: 'Easy',
    accent: 'var(--rose)'
  },
  {
    _id: '41',
    title: 'Weather App',
    desc: 'A basic HTML weather app project for working with UI and external data concepts.',
    tag: 'Web',
    tech: ['HTML', 'JavaScript', 'Weather'],
    github: 'https://github.com/ShahJahanBrohii/Weather-App',
    difficulty: 'Easy',
    accent: 'var(--violet)'
  },
  {
    _id: '42',
    title: 'Web Practice Tasks',
    desc: 'A collection of small frontend tasks created for practice and concept clearing.',
    tag: 'Web',
    tech: ['HTML', 'Frontend', 'Practice'],
    github: 'https://github.com/ShahJahanBrohii/Web-Practice-Tasks',
    difficulty: 'Easy',
    accent: 'var(--teal)'
  },
  {
    _id: '43',
    title: 'JavaScript Practice Repo',
    desc: 'A repository used for JavaScript learning practice and experimentation.',
    tag: 'Web',
    tech: ['HTML', 'JavaScript', 'Practice'],
    github: 'https://github.com/ShahJahanBrohii/JavaScript',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '44',
    title: 'Fan',
    desc: 'A small HTML project built for basic frontend practice and animation work.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Animation'],
    github: 'https://github.com/ShahJahanBrohii/Fan',
    difficulty: 'Easy',
    accent: 'var(--rose)'
  },
  {
    _id: '45',
    title: 'Calculator',
    desc: 'A simple calculator project for practicing UI interactions and basic logic.',
    tag: 'Web',
    tech: ['HTML', 'JavaScript', 'Calculator'],
    github: 'https://github.com/ShahJahanBrohii/Calculator',
    difficulty: 'Easy',
    accent: 'var(--violet)'
  },
  {
    _id: '46',
    title: 'Image Slider',
    desc: 'A small image slider project for frontend behavior and presentation practice.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Slider'],
    github: 'https://github.com/ShahJahanBrohii/Image-Slider',
    difficulty: 'Easy',
    accent: 'var(--teal)'
  },
  {
    _id: '47',
    title: 'Personal Portfolio',
    desc: 'An older personal portfolio project used to present earlier frontend work.',
    tag: 'Web',
    tech: ['HTML', 'CSS', 'Portfolio'],
    github: 'https://github.com/ShahJahanBrohii/Personal-Portfolio',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '10',
    title: 'Article Publishing Full Stack Platform',
    desc: 'A full-stack CMS and publishing platform for creating, managing, and publishing articles with a clean editorial workflow.',
    tag: 'Web',
    tech: ['JavaScript', 'Full Stack', 'CMS', 'Publishing'],
    github: 'https://github.com/ShahJahanBrohii/Article-Publishing-Full-Stack-Platform',
    difficulty: 'Medium',
    accent: 'var(--teal)'
  },
  {
    _id: '11',
    title: 'CV Filtering Feature Extraction',
    desc: 'A computer vision project focused on image restoration, filtering, and feature extraction techniques.',
    tag: 'CV',
    tech: ['Computer Vision', 'Image Processing', 'Feature Extraction', 'Jupyter Notebook'],
    github: 'https://github.com/ShahJahanBrohii/CV-Filtering-Feature-Extraction',
    difficulty: 'Medium',
    accent: 'var(--rose)'
  },
  {
    _id: '12',
    title: 'DeepCaries Detection YOLOv8',
    desc: 'Deep learning for automated dental cavity detection using YOLOv8-based workflows and annotated dental imagery.',
    tag: 'AI',
    tech: ['Python', 'YOLOv8', 'Computer Vision', 'Deep Learning'],
    github: 'https://github.com/ShahJahanBrohii/DeepCaries-Detection-YOLOv8',
    difficulty: 'Hard',
    accent: 'var(--amber)'
  },
  {
    _id: '13',
    title: 'YOLO Dental Caries Benchmark',
    desc: 'A benchmark and dataset project for auditing YOLO-based dental cavity detection across multiple model variants.',
    tag: 'AI',
    tech: ['Python', 'YOLO', 'Benchmarking', 'Dataset'],
    github: 'https://github.com/ShahJahanBrohii/YOLO-Dental-Caries-Benchmark',
    difficulty: 'Hard',
    accent: 'var(--violet)'
  },
  {
    _id: '14',
    title: 'Dental Cavity Detection DeepLearning',
    desc: 'A comparative deep learning study for dental cavity detection using transfer learning and classification models.',
    tag: 'AI',
    tech: ['Python', 'PyTorch', 'Transfer Learning', 'Computer Vision'],
    github: 'https://github.com/ShahJahanBrohii/Dental-Cavity-Detection-DeepLearning',
    difficulty: 'Hard',
    accent: 'var(--teal)'
  },
  {
    _id: '15',
    title: 'Medical Image Detection YOLOv8',
    desc: 'A YOLOv8-based object detection system for identifying dental cavities from medical imagery.',
    tag: 'AI',
    tech: ['Python', 'YOLOv8', 'Object Detection', 'Computer Vision'],
    github: 'https://github.com/ShahJahanBrohii/Medical-Image-Detection-YOLOv8',
    difficulty: 'Hard',
    accent: 'var(--rose)'
  },
  {
    _id: '16',
    title: 'Digital Rank Agency',
    desc: 'A website built for an SEO agency, focused on business presentation, service discovery, and client conversion.',
    tag: 'Web',
    tech: ['JavaScript', 'Website', 'SEO', 'Frontend'],
    github: 'https://github.com/ShahJahanBrohii/Digital-Rank-Agency',
    difficulty: 'Medium',
    accent: 'var(--amber)'
  },
  {
    _id: '17',
    title: 'Binary Object Detection Dataset Builder',
    desc: 'Tools for relabeling and unifying object detection datasets into a binary YOLO-compatible format.',
    tag: 'Data',
    tech: ['Python', 'Dataset Prep', 'YOLO', 'Computer Vision'],
    github: 'https://github.com/ShahJahanBrohii/binary-object-detection-dataset-builder',
    difficulty: 'Medium',
    accent: 'var(--violet)'
  },
  {
    _id: '18',
    title: 'BloodLink AI Based Blood Donor Matching System',
    desc: 'A health-tech platform that uses AI to connect blood donors with hospitals more efficiently.',
    tag: 'AI',
    tech: ['JavaScript', 'AI', 'HealthTech', 'Matching System'],
    github: 'https://github.com/ShahJahanBrohii/BloodLink-AI-Based-Blood-Donor-Matching-System',
    difficulty: 'Medium',
    accent: 'var(--rose)'
  },
  {
    _id: '19',
    title: 'E-learning Website with React and Tailwind CSS',
    desc: 'A React and Tailwind based e-learning frontend focused on course discovery and modern UI practice.',
    tag: 'Web',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Frontend'],
    github: 'https://github.com/ShahJahanBrohii/E-learning-website-using-React-and-Tailwind-CSS',
    difficulty: 'Easy',
    accent: 'var(--teal)'
  },
  {
    _id: '20',
    title: 'Weather Application using Python',
    desc: 'A Python weather application for fetching and displaying forecast data in a simple interface.',
    tag: 'Python',
    tech: ['Python', 'Weather API', 'CLI/Desktop App'],
    github: 'https://github.com/ShahJahanBrohii/Weather-Application-using-Python',
    difficulty: 'Easy',
    accent: 'var(--amber)'
  },
  {
    _id: '21',
    title: 'Library Management System Java Swing MySQL',
    desc: 'A Java Swing and MySQL library management system for books, members, and borrowing records.',
    tag: 'Java',
    tech: ['Java', 'Swing', 'MySQL', 'Desktop App'],
    github: 'https://github.com/ShahJahanBrohii/Library-Management-System-Java-Swing-MySQL-',
    difficulty: 'Medium',
    accent: 'var(--violet)'
  },
  {
    _id: '22',
    title: 'Property Distance and Acreage Finder',
    desc: 'A Python utility for measuring property distance and acreage calculations for client work.',
    tag: 'Python',
    tech: ['Python', 'Geospatial Logic', 'Client Work'],
    github: 'https://github.com/ShahJahanBrohii/Property-Distance-and-Acreage-Finder-Fiverr-',
    difficulty: 'Medium',
    accent: 'var(--rose)'
  },
  {
    _id: '23',
    title: 'ML Internship Flyrank',
    desc: 'Internship notebooks and work artifacts from machine learning work at FlyRank.',
    tag: 'ML',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/ShahJahanBrohii/ML-Internship-Flyrank',
    difficulty: 'Medium',
    accent: 'var(--amber)'
  },
  {
    _id: '24',
    title: 'Full Stack Clinic Platform',
    desc: 'A full-stack clinic platform project for managing healthcare workflows and clinic operations.',
    tag: 'Web',
    tech: ['JavaScript', 'Full Stack', 'Healthcare', 'Web App'],
    github: 'https://github.com/ShahJahanBrohii/full-stack-clinic-platform',
    difficulty: 'Hard',
    accent: 'var(--teal)'
  },
  {
    _id: '25',
    title: 'Multi Pager Personal Portfolio',
    desc: 'An earlier multi-page portfolio implementation showcasing web development and personal projects.',
    tag: 'Web',
    tech: ['JavaScript', 'Portfolio', 'Frontend'],
    github: 'https://github.com/ShahJahanBrohii/multi-pager-personal-portfolio',
    difficulty: 'Easy',
    accent: 'var(--violet)'
  },
  {
  _id: '1',
  title: 'AI-Powered Automated Caries Detection System',
  desc: 'A Final Year Project that uses deep learning to detect dental caries from intraoral images. The system was trained on a large annotated dataset and provides accurate caries detection to assist dentists with early diagnosis.',
  tag: 'AI',
  tech: ['Python', 'PyTorch', 'YOLOv8', 'EfficientNet', 'OpenCV', 'Flask'],
  github: 'https://github.com/ShahJahanBrohii/AI_Powered_Automated_Caries_Detection_FYP.git',
  difficulty: 'Hard',
  image: '/images/cariesdetection.jpg'
},
{
    _id: '2',
    title: 'AI Powered Essay Feedback Tool',
    desc: 'A Flask application that compares student essays against sample answers, generates structured AI feedback with strengths, weaknesses, and recommendations, creates polished PDF reports, and emails them automatically. Supports multiple file formats including PDF, DOCX, and images.',
    tag: 'AI',
    tech: ['Python', 'Flask', 'Gemini API', 'PDF Generation', 'Email Integration'],
    github: 'https://github.com/ShahJahanBrohii/ai-feedback-tool',
    difficulty: 'Medium',
    image: '/images/feedbacktool.jpg'
},
{
  _id: '3',
  title: 'Invoice AI Extractor',
  desc: "An AI-powered invoice processing system that extracts structured information from PDF invoices using OCR (EasyOCR) and Google's Gemini LLM, validates the extracted data with Pydantic, and exposes the functionality through a FastAPI REST API.",
  tag: 'AI',
  tech: ['Python', 'FastAPI', 'EasyOCR', 'Gemini API', 'PyMuPDF'],
  github: 'https://github.com/ShahJahanBrohii/invoice-ai-extractor.git',
  difficulty: 'Medium',
  image: '/images/invoiceextractor.jpg'
},
{
  _id: '4',
  title: 'ConvNeXt Dental Cavity Detection',
  desc: 'A deep learning project that uses the ConvNeXt architecture for automated dental cavity detection from intraoral images. The model is trained and evaluated to improve diagnostic accuracy using transfer learning techniques.',
  tag: 'AI',
  tech: ['Python', 'PyTorch', 'ConvNeXt', 'Transfer Learning', 'Computer Vision'],
  github: 'https://github.com/ShahJahanBrohii/convnext-dental-cavity-detection.git',
  difficulty: 'Hard',
  image: '/images/convnext.jpg'
},
{
  _id: '5',
  title: 'YOLOv8m Custom Object Detection',
  desc: 'A custom object detection project built with YOLOv8m for training and evaluating object detection models on custom datasets. Includes data preparation, training, validation, and performance evaluation.',
  tag: 'AI',
  tech: ['Python', 'YOLOv8', 'Ultralytics', 'OpenCV', 'Computer Vision'],
  github: 'https://github.com/ShahJahanBrohii/YOLOv8m-Custom-Object-Detection.git',
  difficulty: 'Medium',
  image: '/images/yolov8m.jpg'
},
{
  _id: '6',
  title: 'EffNet Optimized Transfer Learning',
  desc: 'A transfer learning project using EfficientNet to build an optimized image classification model. Focuses on improving accuracy through fine-tuning, preprocessing, and hyperparameter optimization.',
  tag: 'AI',
  tech: ['Python', 'PyTorch', 'EfficientNet', 'Transfer Learning', 'Deep Learning'],
  github: 'https://github.com/ShahJahanBrohii/EffNet-Optimized-Transfer-Learning.git',
  difficulty: 'Hard',
  image: '/images/efficientnet.jpg'
},
{
  _id: '7',
  title: 'Dental AI Automated Caries Detection with YOLO11s',
  desc: 'A computer vision project that leverages YOLO11s for real-time dental caries detection. The model is trained on annotated intraoral images to accurately identify cavities and assist in clinical diagnosis.',
  tag: 'AI',
  tech: ['Python', 'YOLO11', 'PyTorch', 'OpenCV', 'Computer Vision'],
  github: 'https://github.com/ShahJahanBrohii/Dental-AI-Automated-Caries-Detection-with-YOLO11s.git',
  difficulty: 'Hard',
  image: '/images/yolo11s.jpg'
},
{
  _id: '8',
  title: 'LLM Latency Predictor',
  desc: 'A machine learning project that predicts the inference latency of Large Language Models based on hardware and model characteristics, helping estimate deployment performance efficiently.',
  tag: 'AI',
  tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'],
  github: 'https://github.com/ShahJahanBrohii/LLM-Latency-Predictor.git',
  difficulty: 'Medium',
  image: '/images/llmlatency.jpg'
},
{
  _id: '9',
  title: 'Neural Style Transfer using PyTorch',
  desc: 'A PyTorch implementation of Neural Style Transfer that blends the artistic style of one image with the content of another using convolutional neural networks.',
  tag: 'AI',
  tech: ['Python', 'PyTorch', 'CNN', 'Computer Vision', 'Deep Learning'],
  github: 'https://github.com/ShahJahanBrohii/Neural-Style-Transfer-Pytorch-Implementation.git',
  difficulty: 'Medium',
  image: '/images/neuralstyletransfer.jpg'
}
];

const FEATURED_PROJECTS = new Set([
  'https://github.com/ShahJahanBrohii/ML-Internship-Flyrank',
  'https://github.com/ShahJahanBrohii/Article-Publishing-Full-Stack-Platform',
  'https://github.com/ShahJahanBrohii/invoice-ai-extractor',
  'https://github.com/ShahJahanBrohii/ai-feedback-tool',
  'https://github.com/ShahJahanBrohii/Dental-AI-Automated-Caries-Detection-with-YOLO11s',
  'https://github.com/ShahJahanBrohii/AI_Powered_Automated_Caries_Detection_FYP',
  'https://github.com/ShahJahanBrohii/YOLO-Dental-Caries-Benchmark',
  'https://github.com/ShahJahanBrohii/EffNet-Optimized-Transfer-Learning',
  'https://github.com/ShahJahanBrohii/convnext-dental-cavity-detection',
  'https://github.com/ShahJahanBrohii/YOLOv8m-Custom-Object-Detection',
  'https://github.com/ShahJahanBrohii/DeepCaries-Detection-YOLOv8',
  'https://github.com/ShahJahanBrohii/LLM-Latency-Predictor',
  'https://github.com/ShahJahanBrohii/Imagify',
  'https://github.com/ShahJahanBrohii/full-stack-clinic-platform',
]);

const PRACTICE_PROJECTS = new Set([
  'https://github.com/ShahJahanBrohii/Summer-Internship',
  'https://github.com/ShahJahanBrohii/Advanced-JavaScript',
  'https://github.com/ShahJahanBrohii/School-Website',
  'https://github.com/ShahJahanBrohii/Cuberto-Website-Clone',
  'https://github.com/ShahJahanBrohii/Fianl-Exam-Task',
  'https://github.com/ShahJahanBrohii/Spam-Email-Detection-Model',
  'https://github.com/ShahJahanBrohii/EAD_Mid_Exam',
  'https://github.com/ShahJahanBrohii/HelloWorld',
  'https://github.com/ShahJahanBrohii/Python',
  'https://github.com/ShahJahanBrohii/Blog-Website',
  'https://github.com/ShahJahanBrohii/Student-Registration-Form',
  'https://github.com/ShahJahanBrohii/Educational-Webiste',
  'https://github.com/ShahJahanBrohii/Balance-Sheet-Calculator',
  'https://github.com/ShahJahanBrohii/Password-Toggler',
  'https://github.com/ShahJahanBrohii/Digital-Clock',
  'https://github.com/ShahJahanBrohii/Age-Calculator',
  'https://github.com/ShahJahanBrohii/Weather-App',
  'https://github.com/ShahJahanBrohii/Web-Practice-Tasks',
  'https://github.com/ShahJahanBrohii/JavaScript',
  'https://github.com/ShahJahanBrohii/Fan',
  'https://github.com/ShahJahanBrohii/Calculator',
  'https://github.com/ShahJahanBrohii/Image-Slider',
  'https://github.com/ShahJahanBrohii/Personal-Portfolio',
  'https://github.com/ShahJahanBrohii/Notepad-Clone',
]);

const projectRank = (project, index) => {
  const featuredIndex = [...FEATURED_PROJECTS].indexOf(project.github);
  if (featuredIndex !== -1) return featuredIndex;

  const practiceIndex = [...PRACTICE_PROJECTS].indexOf(project.github);
  if (practiceIndex !== -1) return 1000 + practiceIndex;

  return 100 + index;
};

export const projectsData = [...rawProjectsData].sort((left, right) => {
  const leftRank = projectRank(left, rawProjectsData.indexOf(left));
  const rightRank = projectRank(right, rawProjectsData.indexOf(right));
  return leftRank - rightRank;
});


