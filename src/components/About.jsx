import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate software developer with expertise in full-stack development, AI integration, and building scalable web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. With a strong foundation in modern web technologies and a keen interest in artificial intelligence, I strive to create impactful digital experiences that push the boundaries of what's possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;