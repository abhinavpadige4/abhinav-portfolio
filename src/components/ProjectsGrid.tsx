import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A full-stack application that uses NLP to prioritize tasks and suggest deadlines.',
    tech: ['React', 'Node.js', 'Python', 'TensorFlow'],
    image: 'https://via.placeholder.com/400x300.png?text=AI+Task+Manager',
    link: 'https://github.com/abhinav/ai-task-manager',
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Dashboard',
    description: 'A scalable web app for teams to edit documents simultaneously with WebSocket sync.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'Socket.io'],
    image: 'https://via.placeholder.com/400x300.png?text=Collab+Dashboard',
    link: 'https://github.com/abhinav/collab-dashboard',
  },
  {
    id: 3,
    title: 'Cloud Cost Optimizer',
    description: 'Tool that analyzes AWS usage and recommends cost-saving actions using machine learning.',
    tech: ['React', 'TypeScript', 'AWS', 'Python', 'Docker'],
    image: 'https://via.placeholder.com/400x300.png?text=Cloud+Cost+Optimizer',
    link: 'https://github.com/abhinav/cloud-cost-optimizer',
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;