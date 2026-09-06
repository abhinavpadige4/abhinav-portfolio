import { motion } from 'framer-motion';
import { Download, Code, Brain, Cloud, Database } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Code, title: 'Full Stack Development', description: 'Building end-to-end web applications' },
    { icon: Brain, title: 'AI & Machine Learning', description: 'Implementing intelligent solutions' },
    { icon: Cloud, title: 'Cloud Architecture', description: 'Designing scalable cloud infrastructure' },
    { icon: Database, title: 'Data Engineering', description: 'Building robust data pipelines' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Passionate about building scalable web applications and AI-driven solutions. 
              With expertise in modern web technologies and machine learning, I create 
              innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              My journey in software development has been driven by a curiosity for emerging 
              technologies and a desire to create impactful digital experiences. I specialize 
              in full-stack development, AI/ML implementation, and cloud architecture.
            </p>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 hover-lift"
              >
                <feature.icon className="text-[#a855f7] mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}