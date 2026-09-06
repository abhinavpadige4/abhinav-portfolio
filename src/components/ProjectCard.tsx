import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  imageUrl, 
  liveUrl, 
  githubUrl,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden hover-lift gradient-border"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#a855f7]/20 to-purple-500/20">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/111827/a855f7?text=Project+Image';
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#a855f7]/10 text-[#a855f7] text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#a855f7] hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-400 hover:text-[#a855f7] transition-colors"
          >
            <Github size={18} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}