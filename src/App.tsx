import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { setupScrollAnimations, createParticles } from './utils/animations';

function App() {
  useEffect(() => {
    // Setup scroll animations
    const observer = setupScrollAnimations();
    
    // Create background particles
    createParticles(100);
    
    return () => {
      if (observer) {
        document.querySelectorAll('.fade-in').forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-blue text-white overflow-hidden">
      <Header />
      <HeroSection />
      <MainContent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;