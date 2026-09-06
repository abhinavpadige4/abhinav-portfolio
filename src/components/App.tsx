import { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import ProjectsGrid from './ProjectsGrid';
import SkillsSection from './SkillsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}