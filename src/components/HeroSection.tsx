import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/site.config';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const chevron = document.querySelector('.scroll-chevron');
      if (chevron) {
        chevron.classList.add('translate-y-1');
        setTimeout(() => {
          chevron.classList.remove('translate-y-1');
        }, 500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Função para verificar se o hero está vazio
  const isHeroEmpty = () => {
    return !siteConfig.hero.title?.trim() && !siteConfig.hero.highlight?.trim();
  };

  // Função para verificar se o subtítulo está vazio
  const hasSubtitle = () => {
    return siteConfig.hero.subtitle?.trim();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" style={{backgroundImage: `url('${siteConfig.hero.backgroundImage}')`}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-dark-blue to-black opacity-70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-neon-blue opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto w-full">
          
          {/* Se hero estiver vazio, mostra o logo */}
          {isHeroEmpty() ? (
            <div className="fade-in">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.companyName || "Logo"} 
                className="mx-auto mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              />
              {hasSubtitle() && (
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 sm:mb-12 fade-in px-2 leading-relaxed">
                  {siteConfig.hero.subtitle}
                </p>
              )}
            </div>
          ) : (
            /* Caso contrário, mostra o hero normal */
            <>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-orbitron mb-6 sm:mb-8 tracking-wider fade-in leading-tight">
                <span className="text-gradient block sm:inline">{siteConfig.hero.title}</span>
                <span className="text-neon-purple block sm:inline sm:ml-4">{siteConfig.hero.highlight}</span>
              </h1>
              {hasSubtitle() && (
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 sm:mb-12 fade-in px-2 leading-relaxed">
                  {siteConfig.hero.subtitle}
                </p>
              )}
            </>
          )}

          <div className="fade-in">
            <a href="#tour" className="btn-primary inline-block">
              Explorar Agora
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
        <a href="#tour" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Rolar para baixo</span>
          <ChevronDown size={24} className="scroll-chevron transition-transform duration-300" />
        </a>
      </div>

      {/* Background animation */}
      <div className="particles"></div>
    </section>
  );
};

export default HeroSection;