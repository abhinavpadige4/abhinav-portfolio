import React from 'react';

const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "Built an intelligent resume analysis tool using NLP and ML to extract skills, experience, and match against job descriptions with 92% accuracy.",
    techStack: ["Python", "FastAPI", "spaCy", "scikit-learn", "Docker", "AWS"],
    github: "https://github.com/abhinavpadige/resume-analyzer",
    image: "/projects/resume-analyzer.png"
  },
  {
    title: "Real-Time Stock Prediction Dashboard",
    description: "Developed a deep learning model using LSTM to predict stock prices with real-time visualization via WebSocket and React frontend.",
    techStack: ["Python", "TensorFlow", "Keras", "FastAPI", "React", "AWS EC2", "Docker"],
    github: "https://github.com/abhinavpadige/stock-predictor",
    image: "/projects/stock-predictor.png"
  },
  {
    title: "Multilingual Chatbot with Voice Interface",
    description: "Created a voice-enabled multilingual chatbot using Hugging Face transformers and Azure Cognitive Services for speech-to-text and translation.",
    techStack: ["Python", "Hugging Face", "Azure Speech", "Azure Translator", "FastAPI", "Docker"],
    github: "https://github.com/abhinavpadige/multilingual-chatbot",
    image: "/projects/chatbot.png"
  },
  {
    title: "Serverless Image Classification API",
    description: "Deployed a CNN-based image classifier as a serverless function on Azure Functions with automatic scaling and monitoring.",
    techStack: ["Python", "PyTorch", "Azure Functions", "Blob Storage", "Application Insights", "Docker"],
    github: "https://github.com/abhinavpadige/image-classifier-api",
    image: "/projects/image-classifier.png"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500 ease-out hover:shadow-xl hover:border-purple-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-gray-700/50 backdrop-blur-sm rounded-full border border-gray-600/50 text-purple-200 hover:bg-purple-500/20 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg"
              >
                View on GitHub
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;