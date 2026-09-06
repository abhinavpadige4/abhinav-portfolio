import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Analyzer",
    description: "A full-stack application that uses NLP to analyze resumes and provide feedback on skills, experience, and formatting. Built with React, Node.js, and Python.",
    tech: ["React", "Node.js", "Python", "TensorFlow"],
    image: "https://via.placeholder.com/400x300?text=Resume+Analyzer",
    link: "#",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A scalable real-time chat app with rooms, typing indicators, and message persistence. Built with Socket.io, React, and MongoDB.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/400x300?text=Chat+App",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with product catalog, cart, checkout, and admin dashboard. Integrated with Stripe for payments.",
    tech: ["React", "Express", "PostgreSQL", "Stripe"],
    image: "https://via.placeholder.com/400x300?text=E-Commerce",
    link: "#",
  },
];

export const ProjectsGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};