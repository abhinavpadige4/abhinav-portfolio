```jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { Code2, Database, Cloud, Palette, Terminal, Cpu } from 'lucide-react'

const skillData = [
  { name: 'JavaScript', value: 95 },
  { name: 'TypeScript', value: 90 },
  { name: 'React', value: 92 },
  { name: 'Node.js', value: 88 },
  { name: 'Python', value: 85 },
  { name: 'AWS', value: 80 },
  { name: 'Docker', value: 78 },
  { name: 'Tailwind', value: 93 },
]

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Terminal,
    title: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Linux'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Cpu,
    title: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'NLP'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Responsive', 'Animation'],
    color: 'from-cyan-500 to-cyan-600',
  },
]

const chartColors = [
  '#a855f7', '#9333ea', '#7c3aed', '#6d28d9',
  '#a855f7', '#9333ea', '#7c3aed', '#6d28d9',
]

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-gray-400">
              A comprehensive toolkit built over years of experience across frontend, backend,
              cloud infrastructure, and artificial intelligence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="glass-card glass-card-hover p-6 group"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Proficiency <span className="gradient-text">Overview</span>
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="name"
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    domain={[0, 100]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '12px',
                      color: '#fff',
                      backdropFilter: 'blur(10px)',
                    }}
                    labelStyle={{ color: '#a855f7', fontWeight: 600 }}
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {skillData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={chartColors[index % chartColors.length]}
                        opacity={0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
