import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/60 text-sm">
          © 2026 Abhinav. All rights reserved.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;