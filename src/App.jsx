// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Section, ServiceCard, PriceCard, WhatsAppButton, AnimatedIcon } from './components';
import { FaCode, FaStore, FaBlog, FaDesktop, FaMobileAlt, FaCog, FaRegLightbulb, FaRocket, FaPalette } from 'react-icons/fa';
import { MdInfoOutline, MdHome, MdMiscellaneousServices, MdPriceCheck, MdEmail } from 'react-icons/md';

// Variantes para animação
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = (delayChildren = 0.2, staggerChildren = 0.1) => ({
  animate: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});


function App() {
  const services = [
    { icon: FaBlog, title: "Blogs Pessoais e Corporativos", description: "Criação de blogs dinâmicos e otimizados para SEO, com design atraente e fácil gerenciamento de conteúdo." },
    { icon: FaStore, title: "Lojas Online (E-commerce)", description: "Desenvolvimento de lojas virtuais completas, com integrações de pagamento, gestão de produtos e foco na conversão." },
    { icon: FaDesktop, title: "Sites Institucionais e Landing Pages", description: "Websites profissionais para apresentar sua empresa, serviços ou produtos, com foco em capturar leads e transmitir credibilidade." },
    { icon: FaCog, title: "Sistemas Web Personalizados", description: "Desenvolvimento de sistemas web sob medida para automatizar processos, gerenciar dados e otimizar operações do seu negócio." },
    { icon: FaMobileAlt, title: "Design Responsivo e Otimizado", description: "Todos os sites são criados para serem perfeitamente visualizados em desktops, tablets e smartphones, com performance otimizada." },
    { icon: FaCode, title: "Código Puro e Moderno", description: "Foco em desenvolvimento com código limpo, sem WordPress, utilizando as tecnologias mais recentes para garantir escalabilidade e segurança." },
  ];

  const prices = [
    { title: "Site Básico", price: "15.000", features: ["Até 3 páginas", "Design Responsivo", "SEO Básico", "Formulário de Contato"], popular: false },
    { title: "Site Profissional", price: "35.000", features: ["Até 7 páginas", "Design Personalizado", "SEO Avançado", "Blog Integrado", "Otimização de Performance"], popular: true },
    { title: "Loja Online / Sistema", price: "A partir de 70.000", features: ["Funcionalidades E-commerce", "Integração Pagamento", "Painel Admin", "Suporte Dedicado", "Escalabilidade"], popular: false },
  ];

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <Section id="home" className="bg-gradient-to-br from-primary to-secondary text-white pt-20 md:pt-32" titleIcon={MdHome}>
        <motion.div variants={stagger(0.3)} initial="initial" animate="animate" className="text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight"
          >
            Serviços de Criação de <span className="text-accent">Sites Profissionais</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light"
          >
            Desenvolvimento de sites desde blogs simples até lojas online complexas,
            utilizando código puro e as tecnologias mais modernas.
            Criação de sistemas de grande porte, personalizados e otimizados para o seu negócio.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            href="#servicos"
            className="bg-accent hover:bg-yellow-600 text-primary font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block"
          >
            Conheça Nossos Serviços
          </motion.a>
        </motion.div>
        <motion.div 
            className="mt-16 md:mt-24 flex justify-center space-x-8"
            variants={stagger(0.8)}
            initial="initial"
            animate="animate"
        >
            <AnimatedIcon icon={() => <FaRocket size={40} className="text-accent"/>} />
            <AnimatedIcon icon={() => <FaPalette size={40} className="text-accent"/>} />
            <AnimatedIcon icon={() => <FaRegLightbulb size={40} className="text-accent"/>} />
        </motion.div>
      </Section>

      {/* Sobre Section */}
      <Section id="sobre" title="Sobre Mim" className="bg-neutral-light" titleIcon={MdInfoOutline}>
        <motion.div variants={stagger()} className="max-w-3xl mx-auto">
          <motion.img
            variants={fadeInUp}
            src="https://via.placeholder.com/150" // Substitua pela sua foto
            alt="Helton Rodrigues"
            className="w-40 h-40 rounded-full mx-auto mb-8 shadow-lg border-4 border-secondary"
          />
          <motion.p variants={fadeInUp} className="text-lg md:text-xl mb-6 text-neutral-dark leading-relaxed">
            Olá! Sou Helton Rodrigues, um desenvolvedor web apaixonado por criar soluções digitais que impulsionam negócios.
            Com foco em código limpo, performance e design moderno, transformo suas ideias em realidade digital.
            Minha especialidade é construir aplicações web robustas e escaláveis, desde sites institucionais elegantes
            até sistemas complexos e lojas virtuais de alta conversão, sempre utilizando as melhores práticas e
            tecnologias do mercado.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-neutral-dark leading-relaxed">
            Acredito que um bom site vai além da estética; ele deve ser uma ferramenta estratégica que gera resultados.
            Por isso, trabalho de perto com meus clientes para entender suas necessidades e entregar projetos
            que não apenas encantam, mas também cumprem seus objetivos.
          </motion.p>
        </motion.div>
      </Section>

      {/* Serviços Section */}
      <Section id="servicos" title="Meus Serviços" className="bg-white" titleIcon={MdMiscellaneousServices}>
        <motion.div variants={stagger()} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </motion.div>
      </Section>

      {/* Preços Section */}
      <Section id="precos" title="Preços" className="bg-neutral-light" titleIcon={MdPriceCheck}>
        <motion.p variants={fadeInUp} className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-neutral">
          Ofereço pacotes flexíveis para atender às suas necessidades. Os preços são referenciais e podem variar conforme a complexidade do projeto.
          Todos os valores estão em Meticais (MZN).
        </motion.p>
        <motion.div variants={stagger()} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {prices.map((price, index) => (
            <PriceCard key={index} title={price.title} price={price.price} features={price.features} popular={price.popular} />
          ))}
        </motion.div>
      </Section>

      {/* Contato Section */}
      <Section id="contato" title="Entre em Contato" className="bg-gradient-to-br from-primary to-secondary text-white" titleIcon={MdEmail}>
        <motion.div variants={stagger()} className="max-w-xl mx-auto">
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8">
            Pronto para começar seu próximo projeto ou tem alguma dúvida?
            Entre em contato diretamente!
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="https://wa.me/258865097696?text=Olá! Gostaria de um orçamento para criação de site."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp: (258) 86 509 7696</span>
            </a>
            <a
              href="mailto:heltonrodriques770@gmail.com"
              className="bg-accent hover:bg-yellow-500 text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 transform hover:scale-105"
            >
              <FaEnvelope size={24} />
              <span>Email: heltonrodriques770@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </Section>

      <footer className="bg-neutral-dark text-neutral-light py-8 text-center">
        <p>© {new Date().getFullYear()} Helton Rodrigues. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido com React, Tailwind CSS & Framer Motion.</p>
      </footer>

      <WhatsAppButton />
    </>
  );
}

export default App;
