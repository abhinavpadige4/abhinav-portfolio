import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot',
    description: 'A full-stack chatbot using React, Node.js, and OpenAI GPT-4.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io']
  },
  {
    title: 'E-commerce Platform',
    description: 'Scalable online store with product management, cart, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind']
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with real-time data processing and custom charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'D3.js', 'Python', 'FastAPI']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors flex items-center gap-1 text-sm">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#a855f7] transition-colors flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;