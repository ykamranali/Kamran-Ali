import { useEffect, useRef } from 'react';
import styles from './Companies.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Bot, Network } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.company-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="companies" className="section-container" ref={sectionRef}>
      <h2 className={`${styles.heading} glitch`} data-text="[ ROOT_ACCESS ] Owned Companies">
        [ ROOT_ACCESS ] Owned Companies
      </h2>
      
      <div className={styles.companiesContainer}>
        {/* OmniAI Nexus */}
        <div className={`glass-panel company-card ${styles.companyCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Network size={32} className={styles.companyIcon} />
            </div>
            <h3 className={styles.companyName}>OmniAI Nexus</h3>
          </div>
          <p className={styles.companyDescription}>
            An enterprise AI SaaS platform designed to centralize and automate business operations. Built with Laravel and modern cloud technologies.
          </p>
          <div className={styles.featuresList}>
            <span>CRM</span>
            <span>Marketing Automation</span>
            <span>AI Content Generation</span>
            <span>Business Intelligence</span>
            <span>Workflow Automation</span>
            <span>Enterprise Dashboards</span>
          </div>
          <a href="https://omni-ai-ten-phi.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.learnMoreBtn}>
            Explore Platform <ArrowRight size={16} />
          </a>
        </div>

        {/* OmniAI Agent */}
        <div className={`glass-panel company-card ${styles.companyCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Bot size={32} className={styles.companyIcon} />
            </div>
            <h3 className={styles.companyName}>OmniAI Agent</h3>
          </div>
          <p className={styles.companyDescription}>
            An advanced AI assistant platform designed to automate customer engagement, productivity, and intelligent decision-making using LLMs.
          </p>
          <div className={styles.featuresList}>
            <span>AI Assistants</span>
            <span>Customer Support</span>
            <span>Knowledge Base</span>
            <span>Intelligent Search</span>
            <span>Multi-Agent Systems</span>
            <span>API Integrations</span>
          </div>
          <a href="https://omniai-nexus-agent.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.learnMoreBtn}>
            Discover Agents <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
