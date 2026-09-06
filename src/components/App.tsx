import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { ProjectCard } from "./ProjectCard";
import { SkillsSection } from "./SkillsSection";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export const App = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A full-stack application using React, Node.js, and TensorFlow.js to predict task priority and suggest optimal scheduling.",
      techStack: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      imageUrl: "https://via.placeholder.com/600x400/a855f7/ffffff?text=AI+Task+Manager",
      liveUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Real-Time Collaboration Platform",
      description: "Built with Socket.io and WebRTC for seamless video conferencing and document collaboration with low-latency sync.",
      techStack: ["React", "Socket.io", "WebRTC", "Firebase"],
      imageUrl: "https://via.placeholder.com/600x400/a855f7/ffffff?text=Collab+Platform",
      liveUrl: "#",
      demoUrl: "#"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Data visualization platform using Recharts and D3.js to track sales, user behavior, and conversion funnels.",
      techStack: ["React", "Recharts", "D3.js", "Chart.js"],
      imageUrl: "https://via.placeholder.com/600x400/a855f7/ffffff?text=Analytics+Dashboard",
      liveUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={
              <section id="projects" className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                  <h2 className="text-3xl font-bold text-center text-a855f7 mb-12">Projects</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                      >
                        <ProjectCard {...project} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            } />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};