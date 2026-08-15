import { useRef, useEffect } from 'react';
import styles from './Contact.module.css';
import { Mail, Globe, Terminal, Download, Send, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
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
    <section id="contact" className="section-container" ref={sectionRef}>
      <h2 className={`${styles.heading} glitch`} data-text="[ SYS.LOG ] Secure Connection">
        [ SYS.LOG ] Secure Connection
      </h2>

      <div className={styles.contactWrapper}>
        <div className={`glass-panel contact-item ${styles.contactInfo}`}>
          <h3>Let's build something extraordinary</h3>
          <p>
            Whether you need enterprise IT consulting, scalable AI architecture, or a unified communications deployment, I'm here to help transform your vision into reality.
          </p>
          
          <div className={styles.socialLinks}>
            <a href="mailto:ykamranali7777@gmail.com" className={styles.socialLink}>
              <Mail size={20} />
              ykamranali7777@gmail.com
            </a>
            <a href="https://wa.me/971508169288" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <MessageCircle size={20} />
              +971 50 816 9288 (WhatsApp)
            </a>
            <a href="https://www.linkedin.com/in/kamran-ali-gul-saeed-4891a7b4/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Globe size={20} />
              LinkedIn Profile
            </a>
            <a href="https://github.com/ykamranali/OmniAINexus" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Terminal size={20} />
              GitHub Portfolio
            </a>
          </div>
          
          <button className={styles.resumeBtn}>
            <Download size={18} /> Download Full Resume
          </button>
        </div>

        <form className={`glass-panel contact-item ${styles.contactForm}`} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@company.com" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
