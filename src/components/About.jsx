```jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Cpu, Globe, Zap, Database, Layers } from 'lucide-react'

const stats = [
  { icon: Code, value: '50+', label: 'Projects Built' },
  { icon: Cpu, value: '5+', label: 'Years Experience' },
  { icon: Globe, value: '30+', label: 'Happy Clients' },
  { icon: Zap, value: '99%', label: 'Satisfaction Rate' },
]

const experiences = [
  {
    year: '2024 - Present',
    role: 'Senior Software Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of AI-powered applications and microservices architecture.',
  },
  {
    year: '2022 - 2024',
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Built scalable web applications using React, Node.js, and cloud services.',
  },
  {
    year: '2020 - 2022',
    role: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Developed responsive web apps and integrated third-party APIs.',
  },
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-20"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a passionate software developer with expertise in full-stack development, AI integration,
              and building scalable web applications. I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions. With a strong foundation in modern web technologies and a keen interest
              in artificial intelligence, I strive to create applications that not only work flawlessly but also
              deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card glass-card-hover p-6 text-center group cursor-default"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-3xl blur-xl"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Development workspace"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Full-Stack Development</p>
                      <p className="text-xs text-gray-400">React • Node.js • Python • AWS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                My <span className="gradient-text">Journey</span>
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    className="relative pl-8 border-l-2 border-purple-500/20 hover:border-purple-500/50 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-gray-900" />
                    <span className="text-xs font-medium text-purple-400 mb-1 block">{exp.year}</span>
                    <h4 className="text-lg font-semibold text-white mb-1">{exp.role}</h4>
                    <p className="text-sm text-purple-400/80 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
