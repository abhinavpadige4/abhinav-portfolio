import React from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="hero-gradient-bg absolute inset-0 z-0"></div>
      <div className="hero-glass-card relative z-10 flex flex-col items-center space-y-6 max-w-2xl w-full px-4">
        <h1 className="hero-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Abhinav Padige
        </h1>
        <p className="hero-subtitle text-xl text-gray-300 max-w-md">
          Passionate Software Engineer specializing in Python, Machine Learning, Deep Learning, FastAPI, Docker, AWS & Azure
        </p>
        <div className="hero-cta flex space-x-4">
          <a href="#projects" className="btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary px-6 py-3 rounded-lg font-medium border border-gray-600/50 bg-black/30 transition-all duration-300 hover:bg-black/50 hover:border-white/20">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;