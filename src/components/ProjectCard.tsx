import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ title, description, tech, image, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full">
        <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" /> Live
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-white/20 hover:border-purple-500 text-gray-300 hover:text-purple-400 text-sm rounded-lg transition-colors">
            <Github className="w-4 h-4 mr-2" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}