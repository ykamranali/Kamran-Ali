import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, Workflow, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-container" ref={sectionRef}>
      <h2 className={`${styles.heading} glitch`} data-text="[ SYS.LOG ] Whoami">
        [ SYS.LOG ] Whoami
      </h2>
      
      <div className={styles.grid}>
        <div className={`about-content ${styles.textContent}`}>
          <p>
            I am a technology leader and visionary software architect, specializing in 
            bridging the gap between robust <strong>Enterprise IT Infrastructure</strong>, 
            cutting-edge <strong>Artificial Intelligence</strong>, and scalable 
            <strong> Software Solutions</strong>.
          </p>
          <p>
            As the Founder & CEO of <strong>OmniAI Nexus</strong> and <strong>OmniAI Agent</strong>, 
            my mission is to deliver modern AI-driven business solutions and unified 
            communication platforms that empower organizations to automate workflows 
            and scale intelligently.
          </p>
          <p>
            With deep expertise spanning from Laravel API development to deploying 
            Avaya/3CX VoIP networks and architecting cloud-native AI infrastructures, 
            I bring a holistic approach to digital transformation.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Enterprise Projects</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>SaaS Platforms Founded</span>
            </div>
          </div>
        </div>

        <div className={`about-content ${styles.visualContent}`}>
          <div className="glass-panel">
            <div className={styles.coreFocus}>
              <h3>Core Focus Areas</h3>
              <div className={styles.focusList}>
                <div className={styles.focusItem}>
                  <Cpu className={styles.focusIcon} />
                  <div>
                    <h4>Artificial Intelligence</h4>
                    <p>OpenAI, Claude, Gemini integrations</p>
                  </div>
                </div>
                <div className={styles.focusItem}>
                  <Server className={styles.focusIcon} />
                  <div>
                    <h4>Enterprise Infrastructure</h4>
                    <p>Windows Server, Linux, Networking</p>
                  </div>
                </div>
                <div className={styles.focusItem}>
                  <Code2 className={styles.focusIcon} />
                  <div>
                    <h4>Software Architecture</h4>
                    <p>Laravel, PHP, React, REST APIs</p>
                  </div>
                </div>
                <div className={styles.focusItem}>
                  <Workflow className={styles.focusIcon} />
                  <div>
                    <h4>Unified Communications</h4>
                    <p>Avaya, 3CX, SIP, Business Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
