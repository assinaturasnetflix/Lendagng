import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './AboutPage.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaHandshake, FaUserTie, FaRocket } from 'react-icons/fa'; // Ícones
import AnimatedIcon from '../../components/AnimatedIcon/AnimatedIcon';
// Considere adicionar uma imagem sua em src/assets/images/profile.jpg (ou .png)
// import profileImage from '../../assets/images/profile.jpg'; 

const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  const pageTransition = { type: "tween", ease: "anticipate", duration: 0.5 };

  const fadeInProps = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y: y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, delay, ease: "easeOut" }
  });

  const skills = [
    { name: "HTML5 & CSS3 (Sass/LESS)", icon: FaCode },
    { name: "JavaScript (ES6+ & TypeScript)", icon: FaCode },
    { name: "React.js & Next.js", icon: FaCode },
    { name: "Node.js (Express.js)", icon: FaCode },
    { name: "Bancos de Dados (SQL & NoSQL)", icon: FaCode },
    { name: "APIs (REST & GraphQL)", icon: FaCode },
    { name: "Design Responsivo & Mobile-First", icon: FaCode },
    { name: "Performance Web & Otimização", icon: FaRocket },
    { name: "Git & Versionamento de Código", icon: FaCode },
    { name: "Metodologias Ágeis (Scrum)", icon: FaRocket },
  ];

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
        title="Sobre Helton Rodrigues" 
        subtitle="Desenvolvedor Web Focado em Soluções de Alto Impacto" 
      />

      <div className={styles.aboutLayout}>
        <motion.div className={styles.aboutIntro} {...fadeInProps(0.1)}>
          {/* Se tiver uma imagem de perfil: */}
          {/* <img src={profileImage} alt="Helton Rodrigues" className={styles.profileImage} /> */}
          <div className={styles.introText}>
            <h2>Transformando Ideias em Realidade Digital.</h2>
            <p>
              Olá! Sou Helton Rodrigues, um desenvolvedor web apaixonado por construir experiências digitais 
              memoráveis e eficientes. Minha especialidade é o desenvolvimento de sites e sistemas 
              utilizando <strong>código puro</strong> e as mais recentes tecnologias do mercado, 
              garantindo performance, segurança e escalabilidade.
            </p>
            <p>
              Desde blogs dinâmicos e landing pages otimizadas para conversão, até lojas online robustas e 
              sistemas web complexos sob medida, meu objetivo é entregar soluções que não apenas atendam, 
              mas superem as expectativas dos meus clientes. Acredito que a tecnologia, quando bem aplicada, 
              é uma poderosa alavanca para o sucesso.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.philosophySection} {...fadeInProps(0.2)}>
          <div className={styles.philosophyItem}>
            <AnimatedIcon icon={FaLightbulb} size={48} color="var(--accent-color)" />
            <h3>Inovação e Código Limpo</h3>
            <p>Busco constantemente novas abordagens e tecnologias, priorizando código limpo, bem documentado e otimizado para performance e manutenibilidade.</p>
          </div>
          <div className={styles.philosophyItem}>
            <AnimatedIcon icon={FaUserTie} size={48} color="var(--accent-color)" />
            <h3>Foco no Cliente</h3>
            <p>Entender as necessidades e objetivos de cada cliente é fundamental. Trabalho em estreita colaboração para garantir que o produto final seja um reflexo fiel da sua visão.</p>
          </div>
          <div className={styles.philosophyItem}>
            <AnimatedIcon icon={FaHandshake} size={48} color="var(--accent-color)" />
            <h3>Parceria e Transparência</h3>
            <p>Acredito em construir relacionamentos de longo prazo baseados na confiança e transparência, com comunicação clara em todas as etapas do projeto.</p>
          </div>
        </motion.div>

        <motion.div className={styles.skillsHighlight} {...fadeInProps(0.3, 50)}>
           <SectionTitle title="Minhas Especialidades Técnicas" subtitle="Tecnologias e metodologias que utilizo para criar projetos incríveis."/>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className={styles.skillCard}
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0px 8px 15px rgba(var(--secondary-color-rgb,0,169,224),0.2)"}}
              >
                <skill.icon className={styles.skillIcon} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
