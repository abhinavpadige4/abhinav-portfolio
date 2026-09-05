import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Resume Analyzer",
      description: "Built a full-stack application using FastAPI and React to analyze resumes against job descriptions using NLP and ML models. Features include keyword extraction, skill matching, and ATS score generation.",
      techStack: ["Python", "FastAPI", "React", "scikit-learn", "spaCy", "Docker"],
      github: "https://github.com/abhinavpadige/resume-analyzer"
    },
    {
      title: "Real-Time Stock Predictor with LSTM",
      description: "Developed a deep learning model using TensorFlow to predict stock prices with 89% accuracy. Integrated with AWS Lambda and API Gateway for real-time inference via REST API.",
      techStack: ["Python", "TensorFlow", "LSTM", "AWS Lambda", "API Gateway", "PostgreSQL"],
      github: "https://github.com/abhinavpadige/stock-predictor-lstm"
    },
    {
      title: "Cloud-Native Microservices Platform",
      description: "Architected a scalable microservices system using Docker and Kubernetes on Azure AKS. Implemented CI/CD pipelines with GitHub Actions, monitoring with Prometheus/Grafana, and JWT-based auth.",
      techStack: ["Docker", "Kubernetes", "Azure AKS", "GitHub Actions", "Prometheus", "Grafana", "JWT"],
      github: "https://github.com/abhinavpadige/microservices-platform"
    },
    {
      title: "Face Recognition Attendance System",
      description: "Created a real-time face recognition system using OpenCV and FaceNet for automated attendance tracking. Deployed on Raspberry Pi 4 with TensorFlow Lite for edge inference.",
      techStack: ["Python", "OpenCV", "FaceNet", "TensorFlow Lite", "Raspberry Pi", "MongoDB"],
      github: "https://github.com/abhinavpadige/face-attendance-system"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 line-clamp-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 text-xs font-medium rounded-full border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View on GitHub
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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