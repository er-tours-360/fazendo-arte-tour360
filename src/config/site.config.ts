// ========================================
// CONFIGURAÇÃO DO SITE - EDITE APENAS ESTE ARQUIVO
// ========================================
// Para cada cliente novo, edite apenas as informações abaixo:

export const siteConfig = {



     
  // 🎯 INFORMAÇÕES BÁSICAS DO SITE
  title: "",
  subtitle: "Conheça nossa loja em detalhes",
  description: "com um tour em 360 graus.",
  
  // 🎥 CONFIGURAÇÃO DO TOUR
  kuulaUrl: "https://kuula.co/share/collection/71bM4?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1",
  
  // 🏢 BRANDING DA EMPRESA
  logo: "/logo_fazendo_arte.png", // Substitua o arquivo logo.png na pasta public/
  companyName: "", // ← TESTE: Mudança será refletida automaticamente
  
  // 📞 INFORMAÇÕES DE CONTATO
  contact: {
    email: "contato@fazendoarteloja.com",
    phone: "+55 11 94495 7733",
    whatsapp: "+55 11 94495 7733", // Número para WhatsApp (sem + e espaços)
    address: "São Paulo, SP",
    website: "www.lojasfazendoarte.com.br"
  },
  
  // 🎨 PERSONALIZAÇÃO VISUAL
  hero: {
    title: "",
    highlight: "", // Texto destacado em roxo
    subtitle: "CONHEÇA NOSSA LOJA EM DETALHES",
    backgroundImage: ""
  },
  
  // 🌟 CARACTERÍSTICAS/BENEFÍCIOS

  features: [
    {
      title: "Experiência Imersiva",
      description: "Visualização em 360° para uma experiência totalmente imersiva e interativa.",
      icon: "globe"
    },
    {
      title: "Alta Qualidade",
      description: "Imagens em alta resolução que capturam cada detalhe com precisão.",
      icon: "video"
    },
    {
      title: "Multiplataforma",
      description: "Compatível com dispositivos móveis, desktop e óculos de realidade virtual.",
      icon: "device"
    }
  ],
  
  // 🔍 SEO E META TAGS
  seo: {
    metaTitle: "LOJAS FAZENDO ARTE - Tour 360°",
    metaDescription: "Descubra a loja Fazendo Arte com um tour virtual em 360 graus. Explore nossos produtos exclusivos e artesanais de qualquer lugar do mundo.",
    keywords: "loja de arte, decoração, tour 360, realidade virtual, produtos artesanais",
    siteName: "Lojas Fazendo Arte",
    siteUrl: "https://www.lojasfazendoarte.com",
    ogImage: "/og-image.jpg" // Imagem para redes sociais (1200x630px)
  },
  
  // 🎨 CORES PERSONALIZÁVEIS (Opcional)
  theme: {
    primaryColor: "#8B5CF6", // Roxo neon
    secondaryColor: "#06B6D4", // Azul neon
    accentColor: "#F59E0B" // Dourado para destaques
  },
  
  // 🌐 REDES SOCIAIS (Opcional - deixe vazio se não usar)
  social: {
    instagram: "@fazendoarteloja",
    facebook: "https://www.lojasfazendoarte.com.br",
    linkedin: "",
    youtube: "",
    tiktok: "https://www.tiktok.com/@fazendoarte_com_claudia"
  },
  
  // 📝 FORMULÁRIO DE CONTATO
  contactForm: {
    title: "ENTRE EM CONTATO",
    subtitle: "Quer saber mais sobre nossos produtos? Envie uma mensagem!",
    fields: {
      name: "Seu Nome",
      email: "Seu E-mail",
      phone: "Seu Telefone",
      message: "Sua Mensagem"
    },
    submitText: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve."
  },
  
  // 💬 CONFIGURAÇÃO DO WHATSAPP
  whatsapp: {
    number: "5511944957733", // Número do WhatsApp (sem + e espaços)
    message: "Olá! Vi o tour 360° e gostaria de saber mais informações sobre a loja.",
    buttonText: "Falar no WhatsApp"
  },
  
  // 🦶 RODAPÉ
  footer: {
    description: "Loja de arte e decoração com produtos exclusivos e artesanais.",
    copyright: "© 2025 ER Tours. Todos os direitos reservados.",
    links: [
      { text: "Política de Privacidade", url: "/privacy" },
      { text: "Termos de Uso", url: "/terms" }
    ]
  }
};

// Tipo TypeScript para melhor desenvolvimento
export type SiteConfig = typeof siteConfig;
