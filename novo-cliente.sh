#!/bin/bash
# Script para criar novo site para cliente

echo "🚀 Criador de Site Tour 360° para Novo Cliente"
echo "=============================================="

# Solicitar informações do cliente
read -p "Nome do cliente (ex: hotel-paradise): " CLIENTE_NOME
read -p "Nome da empresa (ex: Hotel Paradise): " EMPRESA_NOME
read -p "URL do tour Kuula: " KUULA_URL
read -p "Email de contato: " EMAIL
read -p "Telefone: " TELEFONE

# Criar diretório do cliente
mkdir "../$CLIENTE_NOME-tour360"
cp -r . "../$CLIENTE_NOME-tour360/"
cd "../$CLIENTE_NOME-tour360"

# Atualizar configurações básicas
cat > src/config/site.config.ts << EOF
// ========================================
// CONFIGURAÇÃO DO SITE - $EMPRESA_NOME
// ========================================

export const siteConfig = {
  // 🎯 INFORMAÇÕES BÁSICAS DO SITE
  title: "Tour 360°",
  subtitle: "Experimente a sensação de estar presente em qualquer lugar do mundo",
  description: "com nossa tecnologia imersiva de visualização em 360 graus.",
  
  // 🎥 CONFIGURAÇÃO DO TOUR
  kuulaUrl: "$KUULA_URL",
  
  // 🏢 BRANDING DA EMPRESA
  logo: "/logo.png",
  companyName: "$EMPRESA_NOME",
  
  // 📞 INFORMAÇÕES DE CONTATO
  contact: {
    email: "$EMAIL",
    phone: "$TELEFONE",
    whatsapp: "5511999999999", // EDITE ESTE NÚMERO
    address: "Cidade, Estado", // EDITE ESTE ENDEREÇO
    website: "www.site.com" // EDITE ESTE SITE
  },
  
  // 🎨 PERSONALIZAÇÃO VISUAL
  hero: {
    title: "EXPLORE EM",
    highlight: "360°",
    subtitle: "Tecnologia imersiva que transporta você para qualquer lugar",
    backgroundImage: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    metaTitle: "$EMPRESA_NOME - Tour 360° Virtual",
    metaDescription: "Explore $EMPRESA_NOME através de nosso tour virtual 360°. Experiência imersiva completa.",
    keywords: "tour 360, realidade virtual, vr, tour virtual, experiência imersiva",
    siteUrl: "https://$CLIENTE_NOME-tour.netlify.app",
    ogImage: "/og-image.jpg"
  },
  
  // 🎨 CORES PERSONALIZÁVEIS
  theme: {
    primaryColor: "#8B5CF6",
    secondaryColor: "#06B6D4",
    accentColor: "#F59E0B"
  },
  
  // 🌐 REDES SOCIAIS
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    tiktok: ""
  },
  
  // 📝 FORMULÁRIO DE CONTATO
  contactForm: {
    title: "ENTRE EM CONTATO",
    subtitle: "Quer saber mais? Envie uma mensagem!",
    fields: {
      name: "Seu Nome",
      email: "Seu E-mail",
      phone: "Seu Telefone",
      message: "Sua Mensagem"
    },
    submitText: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve."
  },
  
  // 🦶 RODAPÉ
  footer: {
    description: "Experiências imersivas em 360° que transportam você para qualquer lugar.",
    copyright: "© 2024 $EMPRESA_NOME. Todos os direitos reservados.",
    links: [
      { text: "Política de Privacidade", url: "/privacy" },
      { text: "Termos de Uso", url: "/terms" }
    ]
  }
};

export type SiteConfig = typeof siteConfig;
EOF

echo ""
echo "✅ Site criado com sucesso!"
echo "📁 Pasta: ../$CLIENTE_NOME-tour360"
echo ""
echo "📝 PRÓXIMOS PASSOS:"
echo "1. cd ../$CLIENTE_NOME-tour360"
echo "2. Substitua o arquivo public/logo.png"
echo "3. Edite outras configurações em src/config/site.config.ts se necessário"
echo "4. npm install && npm run dev"
echo "5. Suba para GitHub e faça deploy no Netlify"
echo ""
echo "🎯 URL sugerida: https://$CLIENTE_NOME-tour.netlify.app"
