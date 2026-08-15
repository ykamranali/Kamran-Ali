import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Companies from './components/Companies';
import Projects from './components/Projects';
import Services from './components/Services';
// import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container scanlines">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Companies />
        <Projects />
        <Services />
        {/* <Achievements /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
