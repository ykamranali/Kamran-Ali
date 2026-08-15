import { useEffect, useRef } from 'react';
import styles from './Experience.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: 'Founder & CEO',
    company: 'OmniAI Nexus',
    date: 'Present',
    description: 'Leading the development of an enterprise AI SaaS platform combining CRM, Marketing Automation, and Business Intelligence.'
  },
  {
    title: 'Founder & CEO',
    company: 'OmniAI Agent',
    date: 'Present',
    description: 'Architecting an advanced AI assistant platform designed to automate business operations using modern LLMs.'
  },
  {
    title: 'AI Software Architect',
    company: 'Enterprise Solutions',
    date: '2020 - 2023',
    description: 'Designed scalable Laravel applications and integrated OpenAI/Claude APIs for enterprise process automation.'
  },
  {
    title: 'Unified Communications Specialist',
    company: 'Telecom Innovations',
    date: '2016 - 2020',
    description: 'Deployed and managed Avaya IP Office and 3CX phone systems across multiple enterprise locations.'
  },
  {
    title: 'IT Infrastructure Engineer',
    company: 'Tech Systems',
    date: '2012 - 2016',
    description: 'Managed Windows Server, Linux environments, networking, and virtualization for scalable business operations.'
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top'
      });

      // Animate each timeline item
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-container" ref={sectionRef}>
      <h2 className={`${styles.heading} glitch`} data-text="[ EXEC_TRACE ] Professional Journey">
        [ EXEC_TRACE ] Professional Journey
      </h2>
      
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine} ref={lineRef}></div>
        
        {experienceData.map((exp, index) => (
          <div 
            key={index} 
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            ref={el => itemsRef.current[index] = el}
          >
            <div className={styles.timelineContent}>
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <span className={styles.date}>{exp.date}</span>
                <h3 className={styles.title}>{exp.title}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
