import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className="glitch" data-text="kamran@sys:~$">kamran@sys:~$</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">./about</a>
          <a href="#skills">./skills</a>
          <a href="#experience">./experience</a>
          <a href="#projects">./projects</a>
          <a href="#contact" className={styles.ctaButton}>./contact</a>
        </div>
        <div className={styles.mobileMenu}>
          {/* Mobile menu icon (Lucide) can be added here */}
          <span>☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
