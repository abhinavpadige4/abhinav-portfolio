import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'Tailwind CSS'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.key
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-sm font-medium text-white/90 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            {skill}
          </motion.key>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;