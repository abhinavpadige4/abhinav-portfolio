import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Machine Learning', icon: '🧠' },
    { name: 'Deep Learning', icon: '🔬' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '☁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Git', icon: '🌐' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-500/50"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="ml-3 text-sm font-medium text-gray-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;