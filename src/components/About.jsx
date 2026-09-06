import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            About Me
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-8 text-white/90"
        >
          <p className="text-lg leading-relaxed max-w-3xl">
            I am a passionate software developer with expertise in full-stack development, AI integration, and building scalable web applications. I enjoy turning complex problems into elegant solutions through clean code and innovative thinking. My journey in technology has been driven by curiosity and a desire to create meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;