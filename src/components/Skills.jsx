import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Enterprise Infrastructure',
    skills: ['Networking', 'Windows Server', 'Linux', 'Virtualization', 'DNS', 'DHCP', 'Active Directory', 'Cybersecurity', 'VoIP', 'Avaya', '3CX', 'SIP', 'PBX']
  },
  {
    title: 'Software Development',
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 'Git', 'GitHub']
  },
  {
    title: 'AI & Automation',
    skills: ['OpenAI', 'Claude', 'Gemini', 'Cloud Computing', 'Docker', 'Business Process Automation', 'AI Assistants', 'Workflow Automation']
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section-container" ref={sectionRef}>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 glitch" data-text="[ SYS.LOG ] Technical Skills">
        [ SYS.LOG ] Technical Skills
      </h2>
      
      <div className={styles.gridContainer} ref={containerRef}>
        {skillCategories.map((category, index) => (
          <div key={index} className={`glass-panel skill-card ${styles.categoryCard}`}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, idx) => (
                <div key={idx} className={styles.skillBadge}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
