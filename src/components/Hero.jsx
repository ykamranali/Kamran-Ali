import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { Download, ArrowRight, Mail } from 'lucide-react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // GSAP Animation
    const ctx = gsap.context(() => {
      gsap.from('.stagger-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.stagger-btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.8
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const particlesLoaded = (container) => {
    setInit(true);
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      <div className={styles.particlesContainer}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: { value: 'transparent' },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                resize: true,
              },
              modes: {
                grab: { distance: 150, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: '#00FF41' },
              links: {
                color: '#008F11',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 60,
              },
              opacity: { value: 0.5 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className={styles.content}>
        <div ref={textRef}>
          <h2 className={`stagger-text ${styles.greeting}`}>kamran@root:~$ whoami</h2>
          <h1 className={`stagger-text ${styles.name} glitch`} data-text="Kamran Ali">
            Kamran Ali
          </h1>
          <h3 className={`stagger-text ${styles.title}`}>
            [ACCESS_GRANTED] Founder & CEO of OmniAI Nexus
          </h3>
          
          <div className={`stagger-text ${styles.roles}`}>
            <span>AI Software Architect</span> • 
            <span>Enterprise IT Infrastructure Engineer</span> • 
            <span>Unified Communications Specialist</span> • 
            <span>Laravel Developer</span> • 
            <span>Automation Consultant</span>
          </div>

          <p className={`stagger-text ${styles.statement}`}>
            "I build intelligent business platforms, enterprise communication systems, AI-powered software, and automation solutions that transform the way organizations operate."
          </p>

          <div className={styles.ctaGroup}>
            <a href="#companies" className={`stagger-btn ${styles.primaryBtn}`}>
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="https://omniai-nexus-agent.vercel.app" target="_blank" rel="noopener noreferrer" className={`stagger-btn ${styles.secondaryBtn}`}>
              View OmniAI Agent
            </a>
            <a href="https://omni-ai-ten-phi.vercel.app" target="_blank" rel="noopener noreferrer" className={`stagger-btn ${styles.secondaryBtn}`}>
              View OmniAI Nexus
            </a>
            <button className={`stagger-btn ${styles.secondaryBtn}`}>
              <Download size={18} /> Resume
            </button>
            <a href="#contact" className={`stagger-btn ${styles.secondaryBtn}`}>
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
