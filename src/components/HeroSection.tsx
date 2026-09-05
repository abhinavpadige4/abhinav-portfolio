import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7/20] to-[#7c3aed/10] animate-[gradientShift_15s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(168,85,247,0.15)_0%,_transparent_30%)] animate-[pulse_4s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M0,0 L100,100 M100,0 L0,100%22 stroke=%22rgba(168,85,247,0.03)%22 stroke-width=%221%22/></svg>')]"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border-[1px] border-[rgba(255,255,255,0.1)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-10 max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#7c3aed]">
          Abhinav Padige
        </h1>
        <p className="text-xl md:text-2xl text-[rgba(255,255,255,0.9)] max-w-2xl">
          Passionate ML Engineer & Full-Stack Developer specializing in Python, Deep Learning, and Cloud-Native Applications
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="inline-flex items-center px-6 py-3 bg-[rgba(168,85,247,0.2)] backdrop-blur-sm border-[1px] border-[rgba(168,85,247,0.3)] rounded-lg font-medium transition-all duration-300 hover:bg-[rgba(168,85,247,0.3)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(168,85,247,0.4)] text-[rgba(255,255,255,0.9)]">
            Explore My Work
            <svg className="ml-2 h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/abhinavpadige" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border-[1px] border-[rgba(255,255,255,0.1)] rounded-lg font-medium transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.9)]">
            View GitHub
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 1.07 5.44 5.44 0 0 0 5.96 3H9c-2 0-4.5 1.5-4.5 4.13C5 18.12 8.29 19.31 11 19z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Add keyframes for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(style);