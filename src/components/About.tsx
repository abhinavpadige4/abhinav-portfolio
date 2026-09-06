import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Passionate about building scalable web applications and AI-driven solutions.
            I specialize in crafting intuitive user experiences and robust backend architectures
            that solve real-world problems. With a strong foundation in modern web technologies
            and machine learning, I continuously push the boundaries of what's possible in software development.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}