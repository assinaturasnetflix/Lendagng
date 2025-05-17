// src/components.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaCode, FaStore, FaBlog, FaDesktop, FaMobileAlt, FaCog } from 'react-icons/fa';
import { MdPriceCheck, MdInfoOutline, MdHome, MdMiscellaneousServices } from 'react-icons/md';

// Variante para animações de entrada
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const navLinks = [
    { href: '#home', label: 'Home', icon: <MdHome /> },
    { href: '#sobre', label: 'Sobre', icon: <MdInfoOutline /> },
    { href: '#servicos', label: 'Serviços', icon: <MdMiscellaneousServices /> },
    { href: '#precos', label: 'Preços', icon: <MdPriceCheck /> },
    { href: '#contato', label: 'Contato', icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-primary/80 backdrop-blur-md text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold hover:text-accent transition-colors">
          HeltonRodrigues.Dev
        </a>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors flex items-center space-x-1 group"
              >
                <span className="group-hover:animate-pulse">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon (funcionalidade não implementada para manter simples) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export const Section = ({ id, title, children, className = '', titleIcon: TitleIcon }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 min-h-screen flex flex-col justify-center items-center ${className}`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
  >
    <div className="container mx-auto px-4 text-center">
      {title && (
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-primary flex items-center justify-center gap-3"
        >
          {TitleIcon && <TitleIcon className="text-accent text-4xl md:text-5xl" />}
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  </motion.section>
);

export const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-2"
  >
    <Icon className="text-5xl text-secondary mx-auto mb-6" />
    <h3 className="text-2xl font-display font-semibold text-primary mb-3">{title}</h3>
    <p className="text-neutral leading-relaxed">{description}</p>
  </motion.div>
);

export const PriceCard = ({ title, price, features, popular }) => (
  <motion.div
    variants={fadeInUp}
    className={`bg-white p-8 rounded-xl shadow-2xl hover:shadow-secondary/40 transition-shadow duration-300 transform hover:scale-105 ${popular ? 'border-4 border-accent' : 'border border-neutral-light'}`}
  >
    {popular && (
      <div className="bg-accent text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4 -mt-10 transform translate-y-1/2">
        Popular
      </div>
    )}
    <h3 className="text-3xl font-display font-bold text-primary mb-2">{title}</h3>
    <p className="text-4xl font-bold text-secondary mb-6">
      {price} <span className="text-xl font-normal text-neutral">MZN</span>
    </p>
    <ul className="space-y-3 text-neutral mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <a
      href="https://wa.me/258865097696" // Link direto para WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block text-center bg-secondary hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      Contratar Agora
    </a>
  </motion.div>
);


export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/258865097696?text=Olá! Gostaria de saber mais sobre seus serviços de criação de sites."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
    aria-label="Contato via WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 120 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaWhatsapp size={30} />
  </motion.a>
);

export const AnimatedIcon = ({ icon: Icon, className }) => (
    <motion.div
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={className}
    >
      <Icon />
    </motion.div>
  );
