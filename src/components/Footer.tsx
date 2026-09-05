import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900/80 to-gray-950/90 backdrop-blur-sm border-t border-gray-800/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abhinav Padige. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://linkedin.com/in/abhinav-padige"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-a855f7 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abhinavpadige"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-a855f7 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/abhinavpadige"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-a855f7 transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;