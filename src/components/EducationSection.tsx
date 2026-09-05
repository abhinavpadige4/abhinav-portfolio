import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <img
                src="https://cvrcollege.edu.in/wp-content/uploads/2021/06/cvr-logo.png"
                alt="CVR College Logo"
                className="w-24 h-24 object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150?text=CVR+College';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">
                B.Tech in Computer Science and Engineering
              </h3>
              <p className="text-gray-400 mb-4">
                CVR College of Engineering
              </p>
              <div className="flex items-center space-x-4 text-gray-300">
                <span>CGPA: 8.42</span>
                <span className="w-0.5 h-5 bg-gray-600 mx-2"></span>
                <span>Graduated: 2022</span>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Completed undergraduate studies with focus on software engineering, data structures, algorithms, and foundational machine learning concepts. Developed strong problem-solving skills through academic projects and coursework in Python, Java, and web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;