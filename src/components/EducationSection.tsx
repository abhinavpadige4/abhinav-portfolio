import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="relative flex items-center justify-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <img
                src="https://ui-avatars.com/api/?name=AP&background=a855f7&color=fff&size=128&font-size=0.6"
                alt="Abhinav Padige"
                className="w-full h-full object-cover rounded-full border-4 border-purple-500/30"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2023
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">Abhinav Padige</h3>
            <p className="text-lg text-gray-300">B.Tech in Computer Science and Engineering</p>
            <p className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="flex items-center">
                🏫 CVR College of Engineering
              </span>
              <span className="w-0.5 h-4 bg-gray-600 mx-2"></span>
              <span className="flex items-center">
                📊 CGPA: 8.42
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;