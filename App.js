// Imports Globais (assumindo que foram carregados via CDN e estão no escopo global)
// Em um projeto com build, seria: import React, { useState, useEffect, useRef } from 'react';
const { useState, useEffect, useRef, createElement: h } = React;
const { motion, AnimatePresence } = framerMotion; // Assumindo que framerMotion está no escopo global

// Ícones (Em um projeto com build: import { FaWhatsapp, FaEnvelope, FaCode, FaDesktop, FaStoreAlt, FaCogs, FaArrowUp } from 'react-icons/fa';)
// Para este exemplo, vamos simular os componentes de ícones.
// Em um cenário real com CDN, seria mais complexo usar react-icons diretamente sem um build.
// Vamos usar SVGs inline ou placeholder para simplicidade de demonstração.
const IconPlaceholder = ({ className = '', style = {}, children }) => h('span', { className, style }, children);
const FaWhatsapp = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, 'W'); // Placeholder
const FaEnvelope = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, 'E'); // Placeholder
const FaCode = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, ' </>');
const FaDesktop = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, '🖥️');
const FaStoreAlt = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, '🛍️');
const FaCogs = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, '⚙️');
const FaArrowUp = (props) => h(IconPlaceholder, { ...props, className: `inline-block ${props.className || ''}` }, '↑');


// --- Dados do Site ---
const siteData = {
  title: "Serviços de Criação de Sites Profissionais",
  description: "Desenvolvimento de sites desde blogs simples até lojas online, usando código puro (sem WordPress). Também criação de sites e sistemas de grande porte, personalizados e otimizados.",
  contact: {
    whatsapp: "865097696",
    whatsappLink: "https://wa.me/258865097696",
    email: "heltonrodriques770@gmail.com",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Preços", href: "#precos" },
    { label: "Contato", href: "#contato" },
  ],
  services: [
    {
      icon: FaDesktop,
      title: "Sites Responsivos",
      description: "Criação de sites modernos e adaptáveis a todos os dispositivos, desde desktops a smartphones.",
    },
    {
      icon: FaStoreAlt,
      title: "Lojas Online (E-commerce)",
      description: "Desenvolvimento de plataformas de e-commerce robustas e seguras para você vender mais.",
    },
    {
      icon: FaCode,
      title: "Sistemas Web Personalizados",
      description: "Soluções web sob medida para atender às necessidades específicas do seu negócio.",
    },
    {
      icon: FaCogs,
      title: "Otimização e Performance",
      description: "Sites otimizados para SEO e velocidade, garantindo a melhor experiência para o usuário.",
    },
  ],
  pricing: [
    {
      plan: "Blog Pessoal / Portfólio",
      price: "15.000",
      currency: "MZN",
      features: ["Design Moderno", "Até 5 Páginas", "Responsivo", "SEO Básico"],
      popular: false,
    },
    {
      plan: "Site Institucional",
      price: "35.000",
      currency: "MZN",
      features: ["Design Personalizado", "Até 10 Páginas", "Integração com Redes Sociais", "Painel Básico (opcional)"],
      popular: true,
    },
    {
      plan: "Loja Online / Sistema Web",
      price: "A partir de 70.000",
      currency: "MZN",
      features: ["Funcionalidades E-commerce", "Sistema de Gestão", "Design Exclusivo", "Suporte Dedicado"],
      popular: false,
    },
  ],
};

// --- Componentes Reutilizáveis ---

// Componente de Seção Genérico com animação
const Section = ({ id, title, children, className = '', titleClassName = '' }) => {
  return h('section', { id, className: `section-padding ${className}` },
    h('div', { className: 'container-custom' },
      title && h(motion.h2, {
        className: `text-4xl md:text-5xl font-serif font-bold text-center mb-12 md:mb-16 text-primary ${titleClassName}`,
        initial: { opacity: 0, y: -30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: "easeOut" }
      }, title),
      children
    )
  );
};

// Cartão de Serviço com animação
const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return h(motion.div, {
    className: 'card flex flex-col items-center text-center',
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay: index * 0.15 }
  },
    h(Icon, { size: 48, className: 'text-primary mb-4' }),
    h('h3', { className: 'text-xl font-semibold font-serif mb-2 text-textPrimary' }, title),
    h('p', { className: 'text-textSecondary text-sm' }, description)
  );
};

// Cartão de Preço com animação
const PricingCard = ({ plan, price, currency, features, popular, index }) => {
  return h(motion.div, {
    className: `card relative overflow-hidden ${popular ? 'border-2 border-primary shadow-primary/50' : 'border border-gray-700'}`,
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay: index * 0.1 }
  },
    popular && h('div', { className: 'absolute top-0 right-0 bg-primary text-background text-xs font-semibold px-3 py-1 transform translate-x-1/4 -translate-y-1/4 rotate-45' }, 'Popular'),
    h('h3', { className: 'text-2xl font-serif font-bold text-primary mb-2' }, plan),
    h('p', { className: 'text-4xl font-bold text-textPrimary mb-1' }, price),
    h('p', { className: 'text-sm text-textSecondary mb-6' }, currency),
    h('ul', { className: 'space-y-2 mb-8 text-left' },
      features.map((feature, i) =>
        h('li', { key: i, className: 'flex items-center text-textSecondary' },
          h(IconPlaceholder, { className: 'text-primary mr-2' }, '✓'), // Placeholder para checkmark
          feature
        )
      )
    ),
    h('a', { href: siteData.contact.whatsappLink, target: '_blank', rel: 'noopener noreferrer', className: 'button-primary w-full block text-center' }, 'Solicitar Orçamento')
  );
};


// --- Componente Principal App ---
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef({});

  // Observador de Intersecção para atualizar a seção ativa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Ativa quando o meio da seção está no meio da viewport
    );

    siteData.navLinks.forEach(link => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  // Controle do botão "Voltar ao Topo"
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Elementos da UI ---

  // Navbar
  const Navbar = () => h('nav', { className: 'fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md shadow-lg' },
    h('div', { className: 'container-custom mx-auto px-4 sm:px-6 lg:px-8' },
      h('div', { className: 'flex items-center justify-between h-16' },
        h('div', { className: 'flex-shrink-0' },
          h('a', { href: '#home', className: 'text-2xl font-bold font-serif text-primary' }, 'Helton.Dev')
        ),
        h('div', { className: 'hidden md:block' },
          h('div', { className: 'ml-10 flex items-baseline space-x-4' },
            siteData.navLinks.map(link =>
              h('a', {
                key: link.label,
                href: link.href,
                className: `nav-link ${activeSection === link.href.substring(1) ? 'nav-link-active' : ''}`,
              }, link.label)
            )
          )
        ),
        // Mobile menu button (funcionalidade não implementada para brevidade)
        h('div', { className: 'md:hidden' },
          h('button', { type: 'button', className: 'text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md' },
            h(IconPlaceholder, {className: 'h-6 w-6'}, '☰') // Placeholder for menu icon
          )
        )
      )
    )
  );

  // Hero Section
  const HeroSection = () => h(Section, { id: 'home', className: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary !pt-16' },
    h(motion.div, {
      className: 'text-center',
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    },
      h(motion.h1, {
        className: 'text-5xl md:text-7xl font-serif font-extrabold mb-6 leading-tight',
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
      },
        h('span', { className: 'text-textPrimary' }, 'Criação de '),
        h('span', { className: 'text-primary' }, 'Sites Profissionais')
      ),
      h(motion.p, {
        className: 'text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10',
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.7, delay: 0.6 }
      }, siteData.description),
      h(motion.a, {
        href: '#servicos',
        className: 'button-primary text-lg',
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.8, type: "spring", stiffness: 120 }
      }, 'Conheça os Serviços')
    )
  );

  // About Section
  const AboutSection = () => h(Section, { id: 'sobre', title: 'Sobre Mim' },
    h('div', { className: 'max-w-3xl mx-auto text-center' },
      h(motion.img, {
          src: 'https://via.placeholder.com/150/FF2E63/FFFFFF?text=Foto', // Placeholder para sua foto
          alt: 'Helton Rodriques',
          className: 'w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg',
          initial: { opacity: 0, scale: 0.5 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.6, type: "spring" }
      }),
      h(motion.p, {
        className: 'text-lg text-textSecondary mb-6',
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: 0.2 }
      }, 'Olá! Sou Helton Rodriques, um desenvolvedor web apaixonado por criar soluções digitais que não apenas parecem incríveis, mas também funcionam perfeitamente. Com foco em código limpo, performance e design moderno, transformo ideias em realidade digital.'),
      h(motion.p, {
        className: 'text-lg text-textSecondary',
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: 0.4 }
      }, 'Especializo-me em React, Node.js e nas mais recentes tecnologias front-end e back-end para construir desde sites institucionais elegantes até sistemas web complexos e escaláveis.')
    )
  );

  // Services Section
  const ServicesSection = () => h(Section, { id: 'servicos', title: 'Meus Serviços', className: 'bg-secondary' },
    h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
      siteData.services.map((service, index) =>
        h(ServiceCard, { ...service, index, key: service.title })
      )
    )
  );

  // Pricing Section
  const PricingSection = () => h(Section, { id: 'precos', title: 'Planos e Preços' },
    h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch' }, // items-stretch para igualar altura
      siteData.pricing.map((plan, index) =>
        h(PricingCard, { ...plan, index, key: plan.plan })
      )
    ),
    h('p', {className: 'text-center text-textSecondary mt-8 text-sm'}, '* Preços em Meticais (MZN). Planos podem ser personalizados.')
  );

  // Contact Section
  const ContactSection = () => h(Section, { id: 'contato', title: 'Entre em Contato', className: 'bg-secondary' },
    h('div', { className: 'max-w-lg mx-auto text-center' },
      h(motion.p, {
        className: 'text-lg text-textSecondary mb-8',
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 }
      }, 'Pronto para iniciar seu projeto ou tem alguma dúvida? Fale comigo!'),
      h('div', { className: 'space-y-6' },
        h(motion.a, {
          href: siteData.contact.whatsappLink,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'button-primary flex items-center justify-center w-full md:w-auto mx-auto',
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay: 0.2, type: "spring" }
        },
          h(FaWhatsapp, { size: 24, className: 'mr-3' }),
          'WhatsApp: ', siteData.contact.whatsapp
        ),
        h(motion.a, {
          href: `mailto:${siteData.contact.email}`,
          className: 'group flex items-center justify-center text-primary hover:text-accent transition-colors duration-300 w-full md:w-auto mx-auto text-lg',
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay: 0.4 }
        },
          h(FaEnvelope, { size: 24, className: 'mr-3 group-hover:animate-pulse' }),
          siteData.contact.email
        )
      )
    )
  );
  
  // Footer
  const Footer = () => h('footer', {className: 'py-8 text-center bg-gray-950 border-t border-gray-800'},
    h('p', {className: 'text-textSecondary text-sm'}, `© ${new Date().getFullYear()} Helton Rodriques. Todos os direitos reservados.`),
    h('p', {className: 'text-textSecondary text-xs mt-1'}, 'Feito com React, Tailwind CSS e muito ❤️')
  );

  // WhatsApp Fixed Button
  const WhatsAppButton = () => h(motion.a, {
    href: siteData.contact.whatsappLink,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center',
    'aria-label': 'Contato via WhatsApp',
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, delay: 1.5, type: "spring" },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 }
  },
    h(FaWhatsapp, { size: 28 })
  );

  // Scroll to Top Button
  const ScrollToTopButton = () => h(AnimatePresence, null, 
    showScrollTop && h(motion.button, {
        onClick: scrollToTop,
        className: 'fixed bottom-24 right-6 bg-primary text-background p-3 rounded-full shadow-xl hover:bg-opacity-80 transition-all duration-300 z-50',
        'aria-label': 'Voltar ao topo',
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.3 }
    },
        h(FaArrowUp, { size: 20 })
    )
  );


  // Renderização principal do App
  return h(React.Fragment, null,
    h(Navbar),
    h('main', null,
      h(HeroSection),
      h(AboutSection),
      h(ServicesSection),
      h(PricingSection),
      h(ContactSection)
    ),
    h(Footer),
    h(WhatsAppButton),
    h(ScrollToTopButton)
  );
}

// Exporta o componente App para ser usado em main.js
// Em um ambiente sem módulos ES6 padrão no navegador, você pode atribuir a window:
// window.App = App;
// Mas com type="module" em main.js, o export default funciona.
export default App;
