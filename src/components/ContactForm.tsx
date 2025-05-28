import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site.config';

const ContactForm: React.FC = () => {
  // Função para gerar link do WhatsApp
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(siteConfig.whatsapp.message);
    return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-blue to-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            <span className="text-neon-purple">{siteConfig.contactForm.title}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {siteConfig.contactForm.subtitle}
          </p>
        </div>
        
        <div className="text-center fade-in">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} className="mr-3" />
            {siteConfig.whatsapp.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;