import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12"
    >
      <div className="text-center text-white/70">
        <p>© 2026 Abhinav. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-20.35C1.404 0 0 1.404 0 3.135v17.73c0 1.731 1.404 3.135 3.135 3.135h10.494V19.785h-3.56v-3.663h3.56v-2.858c0-2.478 1.55-4.04 3.693-4.04 1.01 0 1.888 0.106 2.055 0.12v2.862h-1.38c-1.223 0-1.494 0.57-1.494 1.41v2.56h2.39l-.36 3.663h-2.03V24h6.192c1.731 0 3.135-1.404 3.135-3.135V3.135C25.81 1.404 24.406 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.288-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.57 3.633 17.57c-1.087-.744.416-.73.416-.73 1.102.077 1.68 1.13 1.68 1.13 1.816 1.684 2.558 1.197 3.18.915.099-.714.38-1.202.63-1.478-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.381 1.24-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a9.546 9.546 0 012.84-.374c.953-.06 1.921.14 2.8.198.28-.58.47-1.22.47-2.48 0-1.334-.438-2.422-1.232-3.274-.4-.668-.88-1.336-1.47-1.648z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.223v5.619H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.016v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065z"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;