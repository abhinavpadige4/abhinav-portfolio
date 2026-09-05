import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(168,85,247,0.05)_0%,_transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M30,0 L30,60 M0,30 L60,30 Z%22 stroke=%22rgba(168,85,247,0.03)%22 stroke-width=%220.5%22/%3E</svg>')]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[1fr_1fr] gap-16 items-start">
        {/* Circular Profile Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] animate-[pulse_3s_ease_infinite]"></div>
            <div className="relative z-10 flex items-center justify-center w-48 h-48 rounded-full bg-[rgba(15,23,42,0.8)] border-[2px] border-[rgba(168,85,247,0.3)] overflow-hidden">
              {/* Placeholder for actual image - in real implementation, import and use image */}
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Abhinav Padige" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Abhinav+Padige&background=a855f7&color=white&size=400';
                }}
              />
            </div>
          </div>
        </div>

        {/* About Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#7c3aed]">
            About Me
          </h2>
          <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
            I'm a passionate ML Engineer and Full-Stack Developer with a strong foundation in Computer Science and Engineering. My journey began at CVR College of Engineering where I honed my skills in algorithms, data structures, and software development principles.
          </p>
          <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
            Specializing in Machine Learning, Deep Learning, and scalable backend systems, I thrive on building intelligent applications that solve real-world problems. My expertise spans Python, FastAPI, Docker, AWS, and Azure, enabling me to architect end-to-end ML pipelines and deploy robust microservices.
          </p>
          <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
            When I'm not coding, you'll find me exploring the latest advancements in AI, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible with technology.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.15)] text-[rgba(168,85,247,0.8)] text-sm font-medium rounded-full hover:bg-[rgba(168,85,247,0.25)] transition-colors">
              Python
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.15)] text-[rgba(168,85,247,0.8)] text-sm font-medium rounded-full hover:bg-[rgba(168,85,247,0.25)] transition-colors">
              Machine Learning
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.15)] text-[rgba(168,85,247,0.8)] text-sm font-medium rounded-full hover:bg-[rgba(168,85,247,0.25)] transition-colors">
              FastAPI
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.15)] text-[rgba(168,85,247,0.8)] text-sm font-medium rounded-full hover:bg-[rgba(168,85,247,0.25)] transition-colors">
              Docker
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Add keyframes for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);