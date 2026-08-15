import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code2, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'OmniAI Nexus',
    description: 'A premium, full-stack AI Business Operating System. Harnesses OpenAI, Gemini, Claude, and DeepSeek models from a single command center. Features real-time cross-platform analytics, intelligent campaign orchestration, and a fully functional Next.js/Prisma backend.',
    imagePlaceholder: <Terminal size={64} className="text-indigo-400 opacity-50" />,
    tech: ['Next.js 15', 'React', 'Prisma', 'Tailwind CSS', 'AI SDK', 'PostgreSQL'],
    liveLink: 'https://omni-ai-ten-phi.vercel.app', // Redirects to the live OmniAI Vercel deployment
    sourceLink: '#',
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 glitch" data-text="[ SYS.LOG ] Featured Projects">
        [ SYS.LOG ] Featured Projects
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        A showcase of my recent full-stack applications and AI-driven platforms.
      </p>
      
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={`glass-panel project-card ${styles.projectCard}`}>
            <div className={styles.imageContainer}>
              {/* Fallback visual if no image is available */}
              {project.imagePlaceholder}
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((techItem, i) => (
                  <span key={i} className={styles.techBadge}>{techItem}</span>
                ))}
              </div>
              
              <div className={styles.actionLinks}>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.launchButton}
                >
                  <ExternalLink size={16} /> Launch App
                </a>
                <a 
                  href={project.sourceLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.sourceButton}
                >
                  <Code2 size={16} /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
