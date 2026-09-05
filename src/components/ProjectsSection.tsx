import React from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  imageUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "A full-stack application that uses NLP and computer vision to analyze resumes, extract skills, and provide feedback for improvement using FastAPI backend and React frontend.",
    techStack: ["Python", "FastAPI", "React", "TensorFlow", "AWS S3", "Docker"],
    githubLink: "https://github.com/abhinavpadige/resume-analyzer",
    imageUrl: "https://via.placeholder.com/400x300?text=Resume+Analyzer"
  },
  {
    title: "Real-Time Stock Prediction Dashboard",
    description: "Built a LSTM-based time series forecasting model to predict stock prices with real-time visualization using Plotly and deployed on Azure App Service.",
    techStack: ["Python", "PyTorch", "LSTM", "Plotly", "Azure", "Docker", "FastAPI"],
    githubLink: "https://github.com/abhinavpadige/stock-prediction",
    imageUrl: "https://via.placeholder.com/400x300?text=Stock+Prediction"
  },
  {
    title: "Voice-Controlled Smart Home Assistant",
    description: "Developed a multimodal AI assistant using speech recognition and intent classification to control IoT devices via AWS Lambda and Alexa Skills Kit.",
    techStack: ["Python", "SpeechRecognition", "NLTK", "AWS Lambda", "Alexa Skills", "Docker"],
    githubLink: "https://github.com/abhinavpadige/smart-home-assistant",
    imageUrl: "https://via.placeholder.com/400x300?text=Smart+Home"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700/50 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
                >
                  View on GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;