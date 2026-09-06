import { motion } from "framer-motion";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-a855f7 mb-12"
        >
          Technical Expertise
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 p-6"
          >
            <h3 className="text-xl font-semibold text-a855f7 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Framer Motion</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Recharts</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">HTML5</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">CSS3</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 p-6"
          >
            <h3 className="text-xl font-semibold text-a855f7 mb-4">Backend & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Python</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Firebase</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">AWS</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Docker</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Git</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 p-6 col-span-2"
          >
            <h3 className="text-xl font-semibold text-a855f7 mb-4">AI & Data Science</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">TensorFlow.js</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Scikit-learn</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Pandas</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">NumPy</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">OpenCV</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">NLTK</span>
              <span className="px-3 py-1 bg-a855f7/20 text-a855f7 text-xs rounded-full">Spacy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};