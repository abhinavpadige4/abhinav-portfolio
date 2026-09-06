```jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'AI Chatbot',
    description:
      'A full-stack chatbot using React, Node.js, and OpenAI GPT-4. Features real-time conversation, context awareness, and a beautiful UI with streaming responses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
    github: '#',
    live: '#',
  },
  {
    title: 'E-commerce Platform',
    description:
      'Scalable online store with product management, shopping cart, payment integration, and admin dashboard. Built with performance and SEO in mind.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a450?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Real-time data visualization dashboard with interactive charts, filters, and export capabilities. Processes and displays large datasets efficiently.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
]

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-400">
              A selection of projects that showcase my expertise in full-stack development,
              AI integration, and creating impactful digital solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group glass-card glass-card-hover overflow-hidden cursor-pointer"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <motion.a
                      href={project.github}
                      className="p-2 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-2 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
