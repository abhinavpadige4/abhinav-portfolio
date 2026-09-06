import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
              alt="AI Chatbot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">AI Chatbot</h3>
              <p className="text-white/80 mb-4">
                A full-stack chatbot using React, Node.js, and OpenAI GPT-4.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">OpenAI</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="E-commerce Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">E-commerce Platform</h3>
              <p className="text-white/80 mb-4">
                Scalable online store with product catalog, cart, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">MongoDB</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Stripe</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581091858757-64b2ac55554e?w=600&h=400&fit=crop"
              alt="Dashboard Analytics"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Dashboard Analytics</h3>
              <p className="text-white/80 mb-4">
                Real-time data visualization dashboard with custom charts and filters.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Recharts</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Tailwind CSS</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Framer Motion</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;