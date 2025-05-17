import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle'; // Reutilizando
import PriceCard from '../../components/PriceCard/PriceCard';
import styles from './PricingPage.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Para o link de orçamento personalizado

const pricingData = [
  {
    planName: "Blog Pessoal / Landing Page",
    price: "A partir de 15.000",
    currency: "MZN",
    features: [
      "Design Responsivo e Moderno",
      "Até 3-5 Páginas Estáticas",
      "Otimização SEO On-Page Básica",
      "Formulário de Contato Funcional",
      "Código Puro (HTML, CSS, JS)",
      "Entrega Estimada: 1-2 Semanas"
    ],
    isFeatured: false,
    ctaText: "Consultar Detalhes",
    ctaLink: "/contato?service=blog_landing"
  },
  {
    planName: "Site Institucional / Portfólio",
    price: "A partir de 28.000",
    currency: "MZN",
    features: [
      "Design Personalizado e Avançado",
      "Até 10 Páginas Dinâmicas/Estáticas",
      "Blog Integrado (opcional, estrutura simples)",
      "Otimização SEO Intermediária",
      "Painel de Conteúdo Simples (se necessário, customizado)",
      "Integração com Redes Sociais",
      "Código Puro (React ou Vanilla JS)",
      "Entrega Estimada: 2-4 Semanas"
    ],
    isFeatured: true,
    ctaText: "Quero Este Plano",
    ctaLink: "/contato?service=institucional_portfolio"
  },
  {
    planName: "Loja Online (E-commerce)",
    price: "A partir de 45.000",
    currency: "MZN",
    features: [
      "Design Profissional para E-commerce",
      "Catálogo de Produtos Ilimitado (estrutura)",
      "Carrinho de Compras e Checkout Seguro",
      "Integração com Gateways de Pagamento (ex: M-Pesa, eMola)",
      "Painel de Gerenciamento (Produtos, Pedidos)",
      "Otimização para Conversão (CRO)",
      "Código Puro (React/Node.js ou similar)",
      "Entrega Estimada: 4-8 Semanas"
    ],
    isFeatured: false,
    ctaText: "Iniciar Minha Loja",
    ctaLink: "/contato?service=ecommerce"
  },
  {
    planName: "Sistemas Web de Grande Porte",
    price: "Sob Consulta",
    currency: "",
    features: [
      "Análise de Requisitos Detalhada",
      "Arquitetura de Software Escalável",
      "Desenvolvimento Full-Stack (Frontend e Backend)",
      "Bancos de Dados Otimizados (SQL/NoSQL)",
      "Desenvolvimento e Integração de APIs",
      "Segurança Avançada e Testes",
      "Manutenção e Suporte Contínuo (opcional)",
      "Prazo e Escopo Definidos em Proposta"
    ],
    isFeatured: false,
    ctaText: "Discutir Projeto",
    ctaLink: "/contato?service=sistema_customizado"
  }
];

const PricingPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  const pageTransition = { type: "tween", ease: "anticipate", duration: 0.5 };

  return (
    <motion.div
      className={`container section-heavy`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <SectionTitle 
        title="Planos e Preços" 
        subtitle="Soluções transparentes e adaptadas ao seu projeto. Preços em Meticais (MZN)."
      />
      <div className={styles.pricingGrid}>
        {pricingData.map((plan, index) => (
          <PriceCard 
            key={index}
            planName={plan.planName}
            price={plan.price}
            currency={plan.currency}
            features={plan.features}
            isFeatured={plan.isFeatured}
            ctaText={plan.ctaText}
            ctaLink={plan.ctaLink}
            delay={index * 0.1} // Pequeno delay para animação escalonada
          />
        ))}
      </div>
      <motion.div 
        className={styles.customQuote}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Precisa de Algo Diferente?</h3>
        <p>
          Cada projeto é único. Se suas necessidades vão além dos planos apresentados, 
          ou se você busca uma solução altamente personalizada, estou à disposição para
          criar um orçamento sob medida.
        </p>
        <Link to="/contato?service=orcamento_personalizado" className="button">
          Solicitar Orçamento Personalizado
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PricingPage;
