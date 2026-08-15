import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h4 className={styles.brand}>Kamran Ali</h4>
          <p className={styles.role}>Founder & CEO — OmniAI Nexus & OmniAI Agent</p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h5>Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
          </div>
          
          <div className={styles.linkColumn}>
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Kamran Ali. All rights reserved.</p>
        <p className={styles.builtWith}>Built with React, Vite & GSAP</p>
      </div>
    </footer>
  );
};

export default Footer;
