```jsx
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, User, MessageSquare, MapPin, Phone, CheckCircle } from 'lucide-react'

function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'abhinav@example.com' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  ]

  return (
    <section ref={ref} id="contact" className="section-padding relative overflow-hidden bg-grid">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-400">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Let's <span className="gradient-text">Connect</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out through any of the channels below.
                </p>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 group cursor-default"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-gray-300">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-400 transition-all duration-300"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="glass-card p-6 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`input-field pl-12 ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`input-field pl-12 ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          className={`input-field pl-12 resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
