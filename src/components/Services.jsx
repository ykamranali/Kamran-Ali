import { useEffect, useRef } from 'react';
import styles from './Services.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Code, Bot, Phone, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: <Bot size={32} />,
    title: 'AI Software Architecture',
    description: 'Design and implementation of advanced AI assistants, LLM integrations (OpenAI, Claude, Gemini), and intelligent automated workflows.'
  },
  {
    icon: <Server size={32} />,
    title: 'Enterprise IT Infrastructure',
    description: 'Deployment and management of robust, scalable IT environments including Windows Server, Linux, and secure cloud networking.'
  },
  {
    icon: <Phone size={32} />,
    title: 'Unified Communications',
    description: 'Expert installation and configuration of Avaya IP Office, 3CX, and SIP-based enterprise VoIP systems.'
  },
  {
    icon: <Code size={32} />,
    title: 'Full-Stack Laravel Development',
    description: 'Building secure, high-performance web applications and RESTful APIs using Laravel and modern frontend frameworks.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Business Automation',
    description: 'Streamlining complex business operations through custom integrations, scripting, and intelligent CRM/Marketing automation.'
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-container" ref={sectionRef}>
      <h2 className={`${styles.heading} glitch`} data-text="[ SYS.LOG ] Services">
        [ SYS.LOG ] Services
      </h2>
      
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={`glass-panel service-card ${styles.serviceCard}`}>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
