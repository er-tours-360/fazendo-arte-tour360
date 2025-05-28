# 🚀 Template Landing Page Tour 360°

Template profissional para criar landing pages de Tours 360° rapidamente. **Escale sua operação criando sites para múltiplos clientes em apenas 2-5 minutos!**

## ⚡ Quick Start (2 minutos por cliente)

### 1. Clone para cada cliente novo:

```bash
# Clone o template
git clone https://github.com/seu-usuario/tour-360-template nome-cliente-tour
cd nome-cliente-tour
npm install
```

### 2. Personalize (90% do trabalho):

**📝 Edite APENAS**: `src/config/site.config.ts`

```typescript
export const siteConfig = {
  // ✏️ SEMPRE EDITAR:
  title: "HOTEL 360°", // Ex: "RESTAURANTE 360°", "IMÓVEL 360°"
  kuulaUrl: "https://kuula.co/share/collection/XXXXX", // ← URL do cliente
  companyName: "Hotel Paradise",
  contact: {
    email: "contato@hotelparadise.com",
    phone: "+55 11 98765-4321",
    whatsapp: "5511987654321"
  },
  hero: {
    title: "EXPLORE NOSSO HOTEL EM",
    subtitle: "Uma experiência única que permite conhecer cada detalhe..."
  }
  // ✨ Use o arquivo EXEMPLO-CLIENTE.config.ts como referência
}
```

**🖼️ Substitua**: `public/logo.png` (logo do cliente)

### 3. Teste local:

```bash
npm run dev
# Abra http://localhost:5173/
```

### 4. Deploy (1 minuto):

```bash
# Suba para GitHub
git add .
git commit -m "Cliente: Nome do Cliente"
git push origin main

# Deploy automático no Netlify (conecte o repositório uma vez)
```

## 🎯 Resultado Final

- ✅ Site profissional em **2-5 minutos**
- ✅ Totalmente responsivo (mobile + desktop)
- ✅ **Sistema de configuração centralizada** (1 arquivo apenas)
- ✅ Design moderno com animações
- ✅ Formulário de contato funcional
- ✅ SEO otimizado
- ✅ SEO otimizado
- ✅ Rápida e moderna

## 📁 Estrutura do Template

```
src/
├── config/
│   └── site.config.ts     👈 EDITE APENAS ESTE ARQUIVO
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── MainContent.tsx    👈 Usa as configs automaticamente
│   ├── ContactForm.tsx
│   └── Footer.tsx
```

## 🛠️ Configurações Disponíveis

### Básicas (Obrigatórias)
- `title` - Título principal
- `subtitle` - Subtítulo descritivo  
- `kuulaUrl` - Link do tour Kuula
- `companyName` - Nome da empresa
- `contact` - Dados de contato

### Avançadas (Opcionais)
- `hero.backgroundImage` - Imagem de fundo
- `features` - Cards de características
- `theme.colors` - Cores personalizadas
- `seo` - Meta tags para SEO
- `social` - Links redes sociais

## 🎨 Personalização Visual

### Cores
```typescript
theme: {
  primaryColor: "#8B5CF6", // Roxo padrão
  secondaryColor: "#06B6D4", // Azul padrão
  accentColor: "#F59E0B" // Dourado para destaques
}
```

### Features/Características
```typescript
features: [
  {
    title: "Seu Título",
    description: "Sua descrição...",
    icon: "globe" // ou "video" ou "device"
  }
]
```

## 📋 Checklist de Deploy

- [ ] Editei `src/config/site.config.ts`
- [ ] Substitui `public/logo.png`
- [ ] Testei em mobile e desktop
- [ ] URL do Kuula está funcionando
- [ ] Informações de contato corretas
- [ ] Fiz commit e push
- [ ] Conectei no Netlify

## 💡 Dicas Pro

1. **SEO**: Sempre preencha `seo.metaDescription` e `seo.keywords`
2. **Logo**: Use PNG transparente 200x60px para melhor resultado
3. **Kuula**: Use a URL com `?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1`
4. **Performance**: Imagens de fundo em alta qualidade mas comprimidas

## 🚀 Escalabilidade

Este template foi criado para escalar rapidamente:

- ⚡ **2 minutos** por cliente
- 📱 **Responsivo** automaticamente  
- 🎨 **Profissional** sempre
- 💰 **Lucrativo** e eficiente

---

**Pronto para criar sua próxima landing page em minutos!** 🎉
