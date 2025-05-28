// ========================================
// EXEMPLO DE CONFIGURAÇÃO PARA NOVO CLIENTE
// ========================================
// Copie este arquivo e personalize para cada cliente

export const siteConfig = {
  // 🎯 INFORMAÇÕES BÁSICAS - SEMPRE EDITAR
  title: "HOTEL 360°", // ← EXEMPLO: Mude para o tipo de tour
  subtitle: "Conheça cada ambiente do nosso hotel", // ← EXEMPLO: Personalize
  description: "com uma experiência imersiva completa em 360 graus.", // ← EXEMPLO
  
  // 🎥 URL DO TOUR - SEMPRE EDITAR
  kuulaUrl: "https://kuula.co/share/collection/XXXXXXX?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1", // ← COLE A URL DO CLIENTE
  
  // 🏢 BRANDING - SEMPRE EDITAR
  logo: "/logo.png", // ← Substitua o arquivo na pasta public/
  companyName: "Hotel Paradise", // ← EXEMPLO: Nome da empresa cliente
  
  // 📞 CONTATO - SEMPRE EDITAR
  contact: {
    email: "contato@hotelparadise.com", // ← EXEMPLO
    phone: "+55 11 98765-4321", // ← EXEMPLO
    whatsapp: "5511987654321", // ← EXEMPLO (sem + e espaços)
    address: "Av. Paulista, 1000 - São Paulo, SP", // ← EXEMPLO
    website: "www.hotelparadise.com" // ← EXEMPLO
  },
  
  // 🎨 VISUAL DO HERO - OPCIONAL
  hero: {
    title: "EXPLORE NOSSO HOTEL EM", // ← EXEMPLO: Personalize
    highlight: "360°",
    subtitle: "Uma experiência única que permite conhecer cada detalhe antes mesmo de chegar", // ← EXEMPLO
    backgroundImage: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" // ← EXEMPLO: Imagem de hotel
  },
  
  // 🌟 CARACTERÍSTICAS - PERSONALIZE SE QUISER
  features: [
    {
      title: "Quartos e Suítes", // ← EXEMPLO: Adapte para o negócio
      description: "Conheça todos os tipos de acomodação disponíveis em detalhes.", // ← EXEMPLO
      icon: "globe"
    },
    {
      title: "Áreas Comuns",
      description: "Explore piscina, restaurante, spa e todas as facilidades do hotel.", // ← EXEMPLO
      icon: "video"
    },
    {
      title: "Localização Privilegiada",
      description: "Veja a vista e os arredores do hotel em nossa tour completo.", // ← EXEMPLO
      icon: "device"
    }
  ],
  
  // 🔍 SEO - SEMPRE EDITAR
  seo: {
    metaTitle: "Hotel Paradise - Tour Virtual 360°", // ← EXEMPLO
    metaDescription: "Conheça o Hotel Paradise através de nosso tour virtual 360°. Explore quartos, áreas comuns e facilidades.", // ← EXEMPLO
    keywords: "hotel paradise, tour virtual, hotel 360, hospedagem são paulo", // ← EXEMPLO
    siteUrl: "https://hotel-paradise-tour.netlify.app", // ← EXEMPLO: URL final
    ogImage: "/og-image.jpg"
  },
  
  // 🎨 CORES - OPCIONAL (use as padrões se não quiser personalizar)
  theme: {
    primaryColor: "#8B5CF6", // Roxo padrão
    secondaryColor: "#06B6D4", // Azul padrão  
    accentColor: "#F59E0B" // Dourado
  },
  
  // 🌐 REDES SOCIAIS - OPCIONAL
  social: {
    instagram: "@hotelparadise", // ← EXEMPLO
    facebook: "hotelparadisesp",
    linkedin: "",
    youtube: "",
    tiktok: ""
  },
  
  // 📝 FORMULÁRIO - OPCIONAL (personalize se quiser)
  contactForm: {
    title: "Faça sua Reserva",
    subtitle: "Entre em contato conosco e garante sua estadia no paraíso!",
    fields: {
      name: "Seu Nome",
      email: "Seu E-mail", 
      phone: "Seu Telefone",
      message: "Período desejado e observações"
    },
    submitText: "Solicitar Reserva",
    successMessage: "Solicitação enviada! Entraremos em contato em breve."
  },
  
  // 🦶 RODAPÉ - OPCIONAL
  footer: {
    description: "O Hotel Paradise oferece a melhor experiência de hospedagem em São Paulo.", // ← EXEMPLO
    copyright: "© 2024 Hotel Paradise. Todos os direitos reservados.",
    links: [
      { text: "Política de Privacidade", url: "/privacy" },
      { text: "Termos de Uso", url: "/terms" }
    ]
  }
};

export type SiteConfig = typeof siteConfig;
