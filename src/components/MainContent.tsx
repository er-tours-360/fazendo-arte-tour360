import React from 'react';
import { siteConfig } from '../config/site.config';

const MainContent: React.FC = () => {
  // Função para verificar se o título está vazio
  const isTitleEmpty = () => {
    return !siteConfig.title?.trim();
  };

  return (
    <section id="tour" className="py-20 bg-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{backgroundImage: `url('${siteConfig.hero.backgroundImage}')`}}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-blue to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in">
          {/* Se title estiver vazio, mostra o logo */}
          {isTitleEmpty() ? (
            <div className="mb-8">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.companyName || "Logo"} 
                className="mx-auto max-w-xs sm:max-w-sm md:max-w-md h-auto"
              />
            </div>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
              {siteConfig.title.split(' ')[0]} <span className="text-neon-purple">{siteConfig.title.split(' ')[1]}</span>
            </h2>
          )}
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            {siteConfig.subtitle} {siteConfig.description}
          </p>
        </div>
        
        <div className="fade-in bg-dark-blue-light rounded-lg p-2 md:p-4 shadow-xl border border-gray-800 glow">
          <div className="relative w-full pb-[133.33%] md:pb-[56.25%]">
            <iframe 
              title="Tour 360"
              className="absolute inset-0 w-full h-full rounded-md"
              src={siteConfig.kuulaUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => (
            <div key={index} className="bg-dark-blue-light p-6 rounded-lg shadow-lg border border-gray-800 fade-in">
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-blue">
                  {feature.icon === 'globe' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 01 9-9" />
                    </svg>
                  )}
                  {feature.icon === 'video' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {feature.icon === 'device' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 font-orbitron">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainContent;