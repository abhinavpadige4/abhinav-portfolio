import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-32 h-32">
            <img
              src="https://ui-avatars.com/api/?name=AP&background=a855f7&color=fff&size=256&font-size=0.5"
              alt="Abhinav Padige"
              className="w-full h-full object-cover rounded-full border-4 border-purple-500/30 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
              2023
            </div>
          </div>
          <div className="text-center max-w-2xl">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">B.Tech in Computer Science and Engineering</h3>
            <p className="text-lg text-gray-400 mb-4">CVR College of Engineering</p>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center gap-2 text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h14m0 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h14m0 0a2 2 0 002 2v1a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-.707.707A1 1 0 009 17.414V19a2 2 0 002 2h2a2 2 0 002-2v-1.586l.707-.707A1 1 0 0013.414 15H17a2 2 0 002-2v-1a2 2 0 012-2z" />
                </svg>
                CGPA: 8.42/10
              </span>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Graduated with strong foundation in algorithms, data structures, and software engineering principles. 
              Developed expertise in machine learning, deep learning, and full-stack web development through academic projects and self-directed learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;