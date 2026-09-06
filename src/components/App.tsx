import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Github, Linkedin, Twitter, Mail, MapPin, Send } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'AI Chat Assistant', description: 'A real-time conversational AI powered by LLMs with streaming responses.', tech: ['React', 'Python', 'FastAPI', 'Tailwind'], image: 'https://placehold.co/600x400/1f2937/a855f7?text=AI+Chat', liveUrl: '#', githubUrl: '#' },
  { id: 2, title: 'E-Commerce Dashboard', description: 'Full-stack analytics dashboard with real-time sales tracking and inventory management.', tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts'], image: 'https://placehold.co/600x400/1f2937/a855f7?text=Dashboard', liveUrl: '#', githubUrl: '#' },
  { id: 3, title: 'Smart Task Manager', description: 'AI-powered productivity app that prioritizes tasks based on deadlines and complexity.', tech: ['React', 'Node.js', 'MongoDB', 'OpenAI'], image: 'https://placehold.co/600x400/1f2937/a855f7?text=Task+Manager', liveUrl: '#', githubUrl: '#' },
];

const skillsData = [
  { name: 'React', value: 95 },
  { name: 'TypeScript', value: 90 },
  { name: 'Python', value: 85 },
  { name: 'Node.js', value: 80 },
  { name: 'AI/ML', value: 75 },
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <div className="bg-[#111827] min-h-screen text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <About />

      <section id="projects" className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Featured <span className="text-purple-400">Projects</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Technical <span className="text-purple-400">Expertise</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">Proficiency Levels</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData}>
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      itemStyle={{ color: '#a855f7' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#a855f7' : '#6366f1'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Frontend</h4>
                <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Backend & AI</h4>
                <p className="text-gray-300">Node.js, Python, FastAPI, PostgreSQL, MongoDB, TensorFlow</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">DevOps & Tools</h4>
                <p className="text-gray-300">Docker, AWS, Git, CI/CD, Vercel, Linux</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Get In <span className="text-purple-400">Touch</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="mr-2 w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-2xl h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-purple-40