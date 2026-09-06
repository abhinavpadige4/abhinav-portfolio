import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/40 backdrop-blur-sm border-b border-[#a855f7]/20 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-a855f7"
        >
          Abhinav
        </motion.h1>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-a855f7 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-a855f7 transition-colors duration-300">
            About
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-a855f7 transition-colors duration-300">
            Projects
          </Link>
          <Link to="/skills" className="text-gray-300 hover:text-a855f7 transition-colors duration-300">
            Skills
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-a855f7 transition-colors duration-300">
            Contact
          </Link>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="md:hidden p-2 rounded-full hover:bg-a855f7/20 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-a855f7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
};