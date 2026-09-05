import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(168,85,247,0.08)_0%,_transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%221%22 fill=%22rgba(168,85,247,0.05)%22/></svg>')]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#7c3aed]">
          About Me
        </h2>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Circular Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] animate-[pulse_3s_ease_infinite]"></div>
              <div className="relative z-10 w-full h-full rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border-[2px] border-[rgba(255,255,255,0.1)] overflow-hidden">
                <img 
                  src="https://via.placeholder.com/400x400.png?text=Abhinav+Padige" 
                  alt="Abhinav Padige Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
              I am a passionate ML Engineer and Full-Stack Developer with a strong foundation in Computer Science and hands-on experience in building scalable AI-powered applications. My expertise lies in leveraging Python, Deep Learning frameworks, and modern DevOps practices to create intelligent systems that solve real-world problems.
            </p>
            <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
              Throughout my academic journey at CVR College of Engineering, I have consistently pursued excellence in both theoretical knowledge and practical implementation. I thrive in collaborative environments where I can contribute to innovative projects while continuously expanding my skill set in emerging technologies like MLOps, cloud-native architectures, and full-stack development.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                Python
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                Machine Learning
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                Deep Learning
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                FastAPI
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                Docker
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                AWS
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm text-[rgba(255,255,255,0.9)] text-sm font-medium rounded-full border-[1px] border-[rgba(168,85,247,0.3)]">
                Azure
              </span>
            </div>
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
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(style);