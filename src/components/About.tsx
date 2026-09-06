import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-a855f7 mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 p-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-gray-300 leading-relaxed mb-6"
          >
            Passionate about building scalable web applications and AI-driven solutions. I specialize in crafting full-stack experiences with React, Node.js, and Python, integrating machine learning models to create intelligent, responsive systems. My focus is on clean architecture, performance optimization, and user-centric design that scales from MVP to enterprise.
          </motion.p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center px-6 py-3 bg-a855f7/20 hover:bg-a855f7/30 text-a855f7 font-medium rounded-lg border border-a855f7/50 backdrop-blur-sm transition-all duration-300"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M5 10h14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};