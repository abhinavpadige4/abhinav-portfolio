import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Abhinav Padige. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://linkedin.com/in/abhinav-padige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-4 hover:text-purple-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/abhinavpadige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://twitter.com/abhinavpadige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4.01c-1.49.4-3.05.66-4.73.73 1.7-1.02 2.97-2.57 2.97-4.31 0-.41-.04-.82-.12-1.21-1.6.29-2.98.8-3.91 1.44-1.51-.16-2.8-.56-3.75-1.24-1.56.93-2.29 2.38-2.29 3.78 0 .29.03.58.04.85A5.547 5.547 0 0 1 4.5 9.2a5.53 5.53 0 0 1-1.5-3.77v.06c0 1.91.69 3.57 1.81 4.56-.64-.02-1.24-.19-1.75-.43 0 .01 0 .04 0 .06 0 2.12 1.51 3.89 3.45 4.29-.37.1-.76.18-1.17.18-.29 0-.58-.02-.85-.06.59 1.84 2.26 3.18 4.25 3.22-1.49 1.17-3.25 1.88-5.25 1.88-.34 0-.68-.02-1.02-.06 2.16 1.39 4.73 2.21 7.47 2.21 8.95 0 13.85-7.41 13.85-13.85 0-.21-.01-.42-.03-.63.91-.65 1.7-1.47 2.21-2.41z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;