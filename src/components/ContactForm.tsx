import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-a855f7 mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="bg-[#1f2937]/50 backdrop-blur-sm rounded-2xl border border-[#a855f7]/20 p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-a855f7 focus:ring-a855f7/20 text-white placeholder-gray-400"
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-a855f7 focus:ring-a855f7/20 text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-a855f7 focus:ring-a855f7/20 text-white placeholder-gray-400"
              placeholder="Enter your message"
              required
              disabled={isSubmitting}
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-a855f7 to-9333ea text-white font-medium rounded-lg hover:shadow-lg hover:shadow-a855f7/40 transform transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          {submitStatus === "success" && (
            <motion.p
              mt-4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center text-green-400"
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};