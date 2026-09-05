import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7/20] via-[#7c3aed/10] to-[#5b21b6/15] animate-[gradientShift_15s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(168,85,247,0.15)_0%,_transparent_30%)] animate-[pulse_4s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M0,0 L100,100 M100,0 L0,100 Z%22 stroke=%22rgba(168,85,247,0.03)%22 stroke-width=%221%22/%3E</svg>')]"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center space-y-8 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border-[1px] border-[rgba(255,255,255,0.1)] rounded-2xl p-10 w-full max-w-4xl text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#7c3aed]">
          Abhinav Padige
        </h1>
        <p className="text-xl md:text-2xl text-[rgba(255,255,255,0.9)] max-w-2xl">
          Passionate ML Engineer & Full-Stack Developer | Python • FastAPI • Docker • AWS • Azure
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-medium rounded-lg hover:from-[#9333ea] hover:to-[#6d28d9] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_12px_rgba(168,85,247,0.4)]">
            Explore Projects
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.9)] font-medium rounded-lg hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Get in Touch
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
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);