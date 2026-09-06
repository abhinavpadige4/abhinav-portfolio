import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#111827] py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-a855f7 mb-4"
        >
          AI Engineer & Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 text-lg mb-8 max-w-xl"
        >
          Passionate about building scalable web applications and AI-driven solutions.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="inline-block bg-gradient-to-r from-a855f7 to-9333ea px-8 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-a855f7/40 transition-all duration-300 transform"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};