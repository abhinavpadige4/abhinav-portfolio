import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'An intelligent code review tool that uses NLP to analyze code quality and suggest improvements.',
    techStack: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=Code+Review+AI',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=E-Commerce',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates.',
    techStack: ['React', 'D3.js', 'WebSockets', 'Redis'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=Analytics',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Automated ML pipeline for data preprocessing, model training, and deployment.',
    techStack: ['Python', 'MLflow', 'Docker', 'AWS'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=ML+Pipeline',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Analytics Tool',
    description: 'Platform for analyzing social media engagement and sentiment across multiple channels.',
    techStack: ['React', 'Python', 'NLP', 'MongoDB'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=Social+Analytics',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Tool for managing and monitoring cloud resources across multiple providers.',
    techStack: ['Go', 'Terraform', 'AWS', 'Kubernetes'],
    imageUrl: 'https://placehold.co/600x400/111827/a855f7?text=Cloud+Manager',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-purple-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development, AI/ML, and cloud architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}