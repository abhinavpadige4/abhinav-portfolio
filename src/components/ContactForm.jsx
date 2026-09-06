import { motion } from 'framer-motion';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-2xl mx-auto py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-a855f7 hover:bg-bf5af2 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-a855f7/30"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;