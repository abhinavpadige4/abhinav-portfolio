import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  demoUrl: string;
}

export const ProjectCard = ({ title, description, techStack, imageUrl, liveUrl, demoUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 overflow-hidden hover:border-a855f7/50 transition-all duration-500"
    >
      <div className="h-48 bg-gradient-to-r from-a855f7/20 to-9333ea/20">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xl font-bold text-white mb-3"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 mb-4 line-clamp-3"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-3">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex-1 px-4 py-2 bg-a855f7/20 hover:bg-a855f7/30 text-a855f7 font-medium rounded-lg border border-a855f7/50 backdrop-blur-sm transition-all duration-300"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex-1 px-4 py-2 bg-transparent hover:bg-a855f7/20 text-a855f7 font-medium rounded-lg border border-a855f7/50 backdrop-blur-sm transition-all duration-300"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};