// src/components.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaCode, FaPaintBrush, FaShoppingCart, FaMobileAlt, FaRocket, FaUsers, FaDollarSign, FaLightbulb } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Para o menu mobile

const createElement = React.createElement;

// --- Dados do Site ---
const siteData = {
  title: "Serviços de Criação de Sites Profissionais",
  description: "Desenvolvimento de sites desde blogs simples até lojas online, usando código puro (sem WordPress). Também criação de sites e sistemas de grande porte, personalizados e otimizados.",
  contact: {
    whatsappNumber: "258865097696", // Formato internacional sem '+' ou '00'
    whatsappLink: "https://wa.me/258865097696",
    email: "heltonrodriques770@gmail.com",
  },
  services: [
    { id: 1, icon: FaPaintBrush, title: "Design UI/UX Moderno", description: "Criação de interfaces intuitivas e visualmente atraentes, focadas na experiência do usuário." },
    { id: 2, icon: FaCode, title: "Desenvolvimento Front-end", description: "Sites responsivos e performáticos com React, Next.js, e as tecnologias mais recentes." },
    { id: 3, icon: FaRocket, title: "Desenvolvimento Back-end", description: "Sistemas robustos e escaláveis com Node.js, Python (Django/Flask) ou PHP (Laravel)." },
    { id: 4, icon: FaShoppingCart, title: "Lojas Virtuais (E-commerce)", description: "Plataformas de e-commerce completas, integradas com gateways de pagamento e otimizadas para conversão." },
    { id: 5, icon: FaMobileAlt, title: "Otimização e Performance", description: "Análise e otimização de sites existentes para velocidade e SEO." },
    { id: 6, icon: FaUsers, title: "Sistemas Web Personalizados", description: "Soluções sob medida para necessidades específicas do seu negócio, de CRMs a portais complexos." },
  ],
  pricing: [
    { id: 1, plan: "Site Básico/Landing Page", price: "15.000 MT", features: ["Design Profissional", "Até 3 Páginas", "Responsivo", "SEO Básico", "1 Mês Suporte"] },
    { id: 2, plan: "Site Institucional Completo", price: "35.000 MT", features: ["Design Personalizado", "Até 7 Páginas", "Blog Integrado", "Otimização SEO Avançada", "Formulário de Contato", "2 Meses Suporte"] },
    { id: 3, plan: "Loja Virtual / Sistema Web", price: "A partir de 70.000 MT", features: ["Totalmente Personalizado", "Funcionalidades Sob Demanda", "Integrações", "Painel de Admin", "Suporte Contínuo (opcional)"] },
  ],
  sections: [
    { id: 'home', name: 'Início' },
    { id: 'sobre', name: 'Sobre Mim' },
    { id: 'servicos', name: 'Serviços' },
    { id: 'precos', name: 'Preços' },
    { id: 'contato', name: 'Contato' },
  ]
};

// --- Componentes ---

export const Navbar = ({ onNavigate, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = (sectionId) => 
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out hover:text-secondary ${
      currentSection === sectionId ? 'text-secondary scale-110' : 'text-textDark hover:text-secondary'
    }`;

  const navItems = siteData.sections.map(section =>
    createElement('li', { key: section.id },
      createElement('button', {
        onClick: () => { onNavigate(section.id); setIsOpen(false); },
        className: navLinkClasses(section.id)
      }, section.name)
    )
  );

  return createElement('nav', { className: 'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-lg' },
    createElement('div', { className: 'container mx-auto px-4 sm:px-6 lg:px-8' },
      createElement('div', { className: 'flex items-center justify-between h-20' },
        createElement('div', { className: 'flex items-center' },
          createElement('a', { href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); }, className: 'flex-shrink-0' },
            createElement(FaLightbulb, { className: 'h-10 w-10 text-secondary animate-pulse' }) // Ícone animado simples
          )
        ),
        createElement('div', { className: 'hidden md:block' },
          createElement('ul', { className: 'ml-10 flex items-baseline space-x-4' }, ...navItems)
        ),
        createElement('div', { className: 'md:hidden' },
          createElement('button', {
            onClick: () => setIsOpen(!isOpen),
            className: 'inline-flex items-center justify-center p-2 rounded-md text-textDark hover:text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary'
          },
            isOpen ? createElement(FiX, { className: 'h-6 w-6' }) : createElement(FiMenu, { className: 'h-6 w-6' })
          )
        )
      )
    ),
    // Menu Mobile
    createElement(AnimatePresence, null, 
      isOpen && createElement(motion.div, {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3 },
        className: 'md:hidden bg-card'
      },
        createElement('ul', { className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center' }, ...navItems)
      )
    )
  );
};

const SectionWrapper = ({ id, children, className = '' }) => {
  return createElement(motion.section, {
    id: id,
    className: `py-16 md:py-24 min-h-screen flex flex-col justify-center items-center ${className}`,
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
    createElement('div', {className: 'container mx-auto px-4 sm:px-6 lg:px-8 text-center'}, children)
  );
};

const AnimatedIcon = ({ icon: IconComponent, className = '' }) => {
  return createElement(motion.div, {
    className: `text-secondary text-5xl md:text-6xl mb-6 ${className}`,
    whileHover: { scale: 1.2, rotate: 15 },
    transition: { type: "spring", stiffness: 300 }
  }, createElement(IconComponent));
};

export const HomeSection = () => {
  return createElement(SectionWrapper, { id: 'home', className: 'bg-background' },
    createElement(motion.h1, {
      className: 'text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-fade-in-up',
      style: { animationDelay: '0.2s' }
    }, siteData.title),
    createElement(motion.p, {
      className: 'text-lg md:text-xl text-textDark/80 max-w-3xl mx-auto mb-8 animate-fade-in-up',
      style: { animationDelay: '0.5s' }
    }, siteData.description),
    createElement(motion.a, {
      href: `#${siteData.sections[1].id}`, // Vai para a próxima seção (Sobre)
      className: 'bg-secondary hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up',
      style: { animationDelay: '0.8s' }
    }, "Saiba Mais")
  );
};

export const AboutSection = () => {
  return createElement(SectionWrapper, { id: 'sobre', className: 'bg-card' },
    createElement(AnimatedIcon, { icon: FaUsers }),
    createElement('h2', { className: 'text-3xl md:text-4xl font-display font-bold mb-6' }, "Sobre Mim"),
    createElement('div', { className: 'max-w-3xl mx-auto text-left md:text-center space-y-4 text-textDark/90' },
      createElement('p', null, "Olá! Sou Helton Rodrigues, um desenvolvedor web apaixonado por criar soluções digitais que não apenas funcionam bem, mas também encantam os usuários."),
      createElement('p', null, "Com foco em código limpo, performance e design moderno, transformo ideias em realidade digital. Minha abordagem é colaborativa, buscando entender profundamente suas necessidades para entregar um produto final que exceda as expectativas."),
      createElement('p', null, "Especializado em React, Node.js e um ecossistema de tecnologias modernas, estou sempre aprendendo e aplicando as melhores práticas para garantir que seu projeto seja robusto, escalável e à prova do futuro.")
    )
  );
};

export const ServicesSection = () => {
  return createElement(SectionWrapper, { id: 'servicos', className: 'bg-background' },
    createElement(AnimatedIcon, { icon: FaRocket }),
    createElement('h2', { className: 'text-3xl md:text-4xl font-display font-bold mb-12' }, "Meus Serviços"),
    createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
      ...siteData.services.map((service, index) =>
        createElement(motion.div, {
          key: service.id,
          className: 'bg-card p-6 rounded-xl shadow-2xl text-left transform transition-all duration-300 hover:shadow-secondary/30 hover:-translate-y-2',
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay: index * 0.1 }
        },
          createElement(service.icon, { className: 'text-4xl text-secondary mb-4' }),
          createElement('h3', { className: 'text-xl font-bold font-display mb-2' }, service.title),
          createElement('p', { className: 'text-textDark/80 text-sm' }, service.description)
        )
      )
    )
  );
};

export const PricingSection = () => {
  return createElement(SectionWrapper, { id: 'precos', className: 'bg-card' },
    createElement(AnimatedIcon, { icon: FaDollarSign }),
    createElement('h2', { className: 'text-3xl md:text-4xl font-display font-bold mb-12' }, "Planos e Preços"),
    createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
      ...siteData.pricing.map((plan, index) =>
        createElement(motion.div, {
          key: plan.id,
          className: `p-8 rounded-xl shadow-2xl flex flex-col ${index === 1 ? 'bg-primary ring-2 ring-secondary' : 'bg-background'} transform transition-all duration-300 hover:shadow-secondary/40 hover:scale-105`,
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay: index * 0.1 }
        },
          createElement('h3', { className: 'text-2xl font-bold font-display mb-4 text-secondary' }, plan.plan),
          createElement('p', { className: 'text-4xl font-extrabold mb-6' }, plan.price),
          createElement('ul', { className: 'space-y-2 mb-8 text-left text-textDark/80 flex-grow' },
            ...plan.features.map(feature => createElement('li', { key: feature, className: 'flex items-center' }, 
              createElement(FaCode, { className: 'text-secondary mr-2 flex-shrink-0'}), 
              feature
            ))
          ),
          createElement('a', {
            href: siteData.contact.whatsappLink,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'mt-auto w-full block text-center bg-secondary hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300'
          }, "Contratar Agora")
        )
      )
    )
  );
};

export const ContactSection = () => {
  return createElement(SectionWrapper, { id: 'contato', className: 'bg-background' },
    createElement(AnimatedIcon, { icon: FaEnvelope }),
    createElement('h2', { className: 'text-3xl md:text-4xl font-display font-bold mb-8' }, "Entre em Contato"),
    createElement('p', { className: 'text-lg md:text-xl text-textDark/80 mb-6' }, "Pronto para iniciar seu projeto ou tem alguma dúvida?"),
    createElement('div', { className: 'space-y-6' },
      createElement('div', { className: 'flex items-center justify-center space-x-4' },
        createElement(FaWhatsapp, { className: 'text-3xl text-secondary' }),
        createElement('a', {
          href: siteData.contact.whatsappLink,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-xl hover:text-secondary transition-colors'
        }, siteData.contact.whatsappNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4') ) // Formata o número
      ),
      createElement('div', { className: 'flex items-center justify-center space-x-4' },
        createElement(FaEnvelope, { className: 'text-3xl text-secondary' }),
        createElement('a', {
          href: `mailto:${siteData.contact.email}`,
          className: 'text-xl hover:text-secondary transition-colors'
        }, siteData.contact.email)
      )
    ),
    createElement('p', {className: 'mt-12 text-textDark/70'}, "Aguardo seu contato para transformarmos sua ideia em um site incrível!")
  );
};

export const FloatingWhatsAppButton = () => {
  return createElement(motion.a, {
    href: siteData.contact.whatsappLink,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center',
    initial: { scale: 0, y: 50 },
    animate: { scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.5 },
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.95 },
    'aria-label': "Contactar via WhatsApp"
  },
    createElement(FaWhatsapp, { className: 'w-8 h-8' })
  );
};
