import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <p className="text-sm text-gray-400">
          © 2026 Abhinav. All rights reserved.
        </p>
        <div className="mt-4 flex gap-6">
          <a
            href="https://github.com/abhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/abhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/abhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;