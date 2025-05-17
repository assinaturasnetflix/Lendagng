// src/App.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, HomeSection, AboutSection, ServicesSection, PricingSection, ContactSection, FloatingWhatsAppButton } from './components.js';

const createElement = React.createElement;

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    sobre: useRef(null),
    servicos: useRef(null),
    precos: useRef(null),
    contato: useRef(null),
  };

  const handleNavigate = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Ponto de referência no meio da tela
    let activeSection = 'home';

    for (const sectionId in sectionRefs) {
      const sectionElement = sectionRefs[sectionId].current;
      if (sectionElement) {
        if (sectionElement.offsetTop <= scrollPosition && sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition) {
          activeSection = sectionId;
          break;
        }
      }
    }
    setCurrentSection(activeSection);
  }, [sectionRefs]); // Não precisa de dependências se sectionRefs não mudar

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Mapeamento de IDs de seção para componentes, para renderização dinâmica
  const sectionComponents = {
    home: HomeSection,
    sobre: AboutSection,
    servicos: ServicesSection,
    precos: PricingSection,
    contato: ContactSection,
  };
  
  // Criar elementos das seções com refs
  const renderedSections = Object.keys(sectionRefs).map(id => {
    const Component = sectionComponents[id];
    if (!Component) return null; // Caso haja um ID em sectionRefs sem componente
    
    // O wrapper <div ref={...}> é necessário porque SectionWrapper é um componente funcional
    // e não pode receber ref diretamente sem React.forwardRef.
    // Para simplificar e evitar mais um wrapper, aplicamos o ref a um div que envolve a seção.
    return createElement('div', { key: id, ref: sectionRefs[id] },
      createElement(Component)
    );
  });

  return createElement('div', { className: 'App' },
    createElement(Navbar, { onNavigate: handleNavigate, currentSection: currentSection }),
    createElement('main', null, ...renderedSections),
    createElement(FloatingWhatsAppButton)
  );
};

export default App;
