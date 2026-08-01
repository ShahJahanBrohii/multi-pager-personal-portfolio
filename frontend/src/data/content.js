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

export const contentOverviewData = {
  heroRoles: ['Backend Developer', 'ML Enthusiast', 'Data Engineer'],
  stats: {
    projects: projectsData.length,
    certificates: certificatesData.length,
    tags: new Set(projectsData.map((project) => project.tag)).size,
    technologies: stack.length,
  },
  stack,
};
