import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-950/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Abhinav Padige
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link to="#about" className="hover:text-purple-400 transition-colors duration-300">
              About Me
            </Link>
            <Link to="#skills" className="hover:text-purple-400 transition-colors duration-300">
              Skills
            </Link>
            <Link to="#education" className="hover:text-purple-400 transition-colors duration-300">
              Education
            </Link>
            <Link to="#projects" className="hover:text-purple-400 transition-colors duration-300">
              Projects
            </Link>
            <Link to="#contact" className="hover:text-purple-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-xl" aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;