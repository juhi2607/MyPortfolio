import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="background-animations">
        <motion.div className="blob blob-1" animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}></motion.div>
        <motion.div className="blob blob-2" animate={{ x: [0, -150, 0], y: [0, 150, 0], scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}></motion.div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
