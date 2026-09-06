import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}

export default App;