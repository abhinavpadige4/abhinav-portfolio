import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-[#111827]/80 backdrop-blur-sm border-t border-[#a855f7]/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-sm"
        >
          © 2026 Abhinav. All rights reserved.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full hover:bg-a855f7/20 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-a855f7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V10a2 2 0 00-2-2H6a2 2 0 00-2 2v3m12 4a2 2 0 01-2-2h-1a4 4 0 00-4 4H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full hover:bg-a855f7/20 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-a855f7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14h.01M12 14h.01M16 14h.01M20 12a6 6 0 00-6-6h-1a3 3 0 01-3-3H6a3 3 0 00-3 3v6.58a3 3 0 00-.894 2.894A11.985 11.985 0 0012 21c1.297 0 2.55-.28 3.694-.777a3 3 0 00-.894-2.894V9a3 3 0 013-3h1a6 6 0 006 6z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full hover:bg-a855f7/20 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-a855f7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a.5.5 0 000 1h.01zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM12 16a.5.5 0 000-1h.01z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};