// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaCode, FaStore, FaBlog, FaDesktop, FaMobileAlt, FaRocket, FaPaintBrush, FaMoneyBillWave } from 'react-icons/fa';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Ícones para menu mobile

// --- Dados das Seções ---
const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'sobre', title: 'Sobre' },
  { id: 'servicos', title: 'Serviços' },
  { id: 'precos', title: 'Preços' },
  { id: 'contato', title: 'Contato' },
];

const servicesData = [
  {
    icon: <FaBlog className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Blogs e Sites Pessoais',
    description: 'Criação de blogs dinâmicos e sites pessoais com design moderno e focado na sua identidade.',
  },
  {
    icon: <FaStore className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Lojas Online (E-commerce)',
    description: 'Desenvolvimento de lojas virtuais completas, integradas com gateways de pagamento e otimizadas para vendas.',
  },
  {
    icon: <FaDesktop className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Sistemas Web de Grande Porte',
    description: 'Soluções robustas e personalizadas para empresas, incluindo painéis administrativos, intranets e sistemas complexos.',
  },
  {
    icon: <FaMobileAlt className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Sites Responsivos',
    description: 'Todos os sites são desenvolvidos para se adaptar perfeitamente a qualquer dispositivo: desktops, tablets e smartphones.',
  },
  {
    icon: <FaRocket className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Otimização e Performance',
    description: 'Foco em performance e SEO para garantir que seu site carregue rapidamente e seja bem ranqueado nos motores de busca.',
  },
  {
    icon: <FaPaintBrush className="text-5xl text-accent mb-4 mx-auto" />,
    title: 'Design Personalizado',
    description: 'Criação de layouts únicos que refletem a identidade da sua marca e proporcionam uma excelente experiência ao usuário.',
  },
];

const pricingData = [
  {
    plan: 'Site Básico/Landing Page',
    price: '15.000 MZN',
    features: ['Até 3 páginas', 'Design responsivo', 'Formulário de contato', 'Otimização SEO básica', '1 mês de suporte'],
    popular: false,
  },
  {
    plan: 'Site Institucional/Blog',
    price: '35.000 MZN',
    features: ['Até 7 páginas', 'Design personalizado', 'Blog integrado', 'Otimização SEO avançada', 'Treinamento CMS (se aplicável)', '3 meses de suporte'],
    popular: true,
  },
  {
    plan: 'Loja Online (E-commerce)',
    price: 'A partir de 70.000 MZN',
    features: ['Catálogo de produtos', 'Carrinho de compras', 'Integração de pagamento', 'Painel de gerenciamento', 'Design premium', '6 meses de suporte'],
    popular: false,
  },
  {
    plan: 'Sistema Web Personalizado',
    price: 'Sob Consulta',
    features: ['Funcionalidades sob medida', 'Escalabilidade', 'Integrações complexas', 'Segurança avançada', 'Suporte dedicado'],
    popular: false,
  },
];

// --- Componentes Internos (para organização, mesmo dentro de um arquivo) ---

const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Dispara quando 10% da seção está visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 sm:py-24 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center items-center ${className}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false); // Fecha o menu mobile ao clicar
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Efeito para destacar a seção ativa no scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que 50% da seção deve estar visível

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => sections.forEach(section => {
      if (section) observer.unobserve(section);
    });
  }, []);


  // --- Header / Navegação ---
  const Header = () => (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1, color: '#64FFDA' }}
          className="text-2xl font-bold text-accent cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          HR<span className="text-light-slate">Dev</span>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id ? 'text-accent scale-110' : 'text-slate hover:text-accent'
              }`}
              whileHover={{ y: -2 }}
            >
              {link.title}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-light-slate focus:outline-none">
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-secondary absolute top-full left-0 right-0 shadow-lg py-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className={`block px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id ? 'text-accent bg-primary/50' : 'text-slate hover:text-accent hover:bg-primary/30'
              }`}
            >
              {link.title}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );

  // --- Seção Home (Hero) ---
  const HomeSection = () => (
    <AnimatedSection id="home" className="text-center !justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?abstract,code,technology')"}}>
      <div className="bg-primary/80 p-8 rounded-xl backdrop-blur-sm">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-light-slate mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Serviços de <span className="text-accent">Criação de Sites</span> Profissionais
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-slate max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Desenvolvimento de sites desde blogs simples até lojas online, usando código puro (sem WordPress).
          Também criação de sites e sistemas de grande porte, personalizados e otimizados.
        </motion.p>
        <motion.a
          href="#contato"
          onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}
          className="bg-accent text-primary font-semibold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors duration-300 shadow-md hover:shadow-accent/30"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Entre em Contato
        </motion.a>
      </div>
    </AnimatedSection>
  );

  // --- Seção Sobre ---
  const AboutSection = () => (
    <AnimatedSection id="sobre" className="items-start md:items-center">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="section-title mx-auto md:mx-0">Sobre Mim e Meus Serviços</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/85899758?v=4" // Placeholder: substitua pela sua foto
              alt="Helton Rodrigues"
              className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover mx-auto md:mx-0 border-4 border-accent shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay:0.2 }}
          >
            <p className="text-slate text-lg mb-4 leading-relaxed">
              Olá! Sou Helton Rodrigues, um desenvolvedor web focado em criar soluções digitais de alto impacto.
              Minha paixão é transformar ideias em realidade através de código limpo, eficiente e design moderno.
            </p>
            <p className="text-slate text-lg mb-4 leading-relaxed">
              Trabalho com as tecnologias mais recentes para garantir que seu projeto não seja apenas visualmente atraente,
              mas também rápido, seguro e otimizado para os motores de busca.
              Seja um blog pessoal, uma loja virtual robusta ou um sistema web complexo, estou pronto para o desafio.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              Meu compromisso é com a <span className="text-accent font-semibold">qualidade</span> e a <span className="text-accent font-semibold">satisfação do cliente</span>,
              oferecendo um serviço transparente e colaborativo do início ao fim do projeto.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );

  // --- Seção Serviços ---
  const ServicesSection = () => (
    <AnimatedSection id="servicos" className="bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Meus Serviços</h2>
        <p className="text-slate text-lg max-w-2xl mx-auto mb-12">
          Ofereço uma gama completa de serviços de desenvolvimento web, utilizando as melhores práticas e tecnologias de ponta.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(100, 255, 218, 0.1)"}}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-light-slate mb-2">{service.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );

  // --- Seção Preços ---
  const PricingSection = () => (
    <AnimatedSection id="precos">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Planos e Preços</h2>
        <p className="text-slate text-lg max-w-2xl mx-auto mb-12">
          Soluções transparentes e adaptadas às suas necessidades. Preços em Meticais (MZN).
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              className={`card flex flex-col ${plan.popular ? 'border-2 border-accent relative' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ transform: "translateY(-10px)", boxShadow: "0px 15px 25px rgba(17, 42, 69, 0.5)"}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-3 py-1 text-xs font-bold rounded-full shadow-md">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-accent mb-3">{plan.plan}</h3>
              <p className="text-3xl font-extrabold text-light-slate mb-6">{plan.price}</p>
              <ul className="text-slate text-sm space-y-2 mb-8 text-left flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    initial={{ opacity:0, x: -10 }}
                    whileInView={{ opacity:1, x: 0 }}
                    transition={{ duration:0.3, delay: (index * 0.1) + (i * 0.05) }}
                    viewport={{once: true}}
                  >
                    <FaMoneyBillWave className="text-accent mr-2 flex-shrink-0" /> {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}
                className={`mt-auto w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300
                            ${plan.popular ? 'bg-accent text-primary hover:bg-opacity-80' : 'bg-primary hover:bg-dark-slate text-accent border border-accent'}`}
                whileHover={{ letterSpacing: "0.5px" }}
              >
                {plan.price === "Sob Consulta" ? "Consultar" : "Quero Este!"}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );

  // --- Seção Contato ---
  const ContactSection = () => (
    <AnimatedSection id="contato" className="bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-slate text-lg max-w-xl mx-auto mb-12">
          Pronto para iniciar seu projeto ou tem alguma dúvida? Fale comigo!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <motion.a
            href="https://wa.me/258865097696" // Inclua o código do país
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-green-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="mr-3 text-2xl" /> WhatsApp Direto
          </motion.a>
          <motion.a
            href="mailto:heltonrodriques770@gmail.com"
            className="flex items-center bg-accent text-primary py-3 px-8 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300 shadow-md hover:shadow-accent/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="mr-3 text-2xl" /> Enviar Email
          </motion.a>
        </div>
        <p className="text-slate mt-12">
          WhatsApp: <a href="https://wa.me/258865097696" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">865097696</a>
        </p>
        <p className="text-slate">
          Email: <a href="mailto:heltonrodriques770@gmail.com" className="text-accent hover:underline">heltonrodriques770@gmail.com</a>
        </p>
      </div>
    </AnimatedSection>
  );

  // --- Botão Fixo WhatsApp ---
  const FixedWhatsAppButton = () => (
    <motion.a
      href="https://wa.me/258865097696" // Inclua o código do país
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contato rápido via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );

  // --- Footer ---
  const Footer = () => (
    <footer className="py-8 text-center bg-primary border-t border-secondary">
      <p className="text-slate text-sm">
        © {new Date().getFullYear()} Helton Rodrigues. Todos os direitos reservados.
      </p>
      <p className="text-dark-slate text-xs mt-1">
        Feito com <FaCode className="inline text-accent" /> e paixão em Moçambique.
      </p>
    </footer>
  );

  // --- Renderização Principal ---
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]"> {/* Padding-top para compensar header fixo */}
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <FixedWhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
