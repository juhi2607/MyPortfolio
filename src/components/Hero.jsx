import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="overline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h2>
          <motion.h1 
            className="hero-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Juhi Sirohi
          </motion.h1>
          <motion.h3 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Frontend Developer
          </motion.h3>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building responsive web applications using React.js and Next.js. 
            Skilled in API integration, component-based architecture, and delivering clean, scalable UI solutions.
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn glass">Contact Me</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="image-wrapper glass"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src="/images/juhisirohi.jpeg" alt="Juhi Sirohi" className="hero-image" />
            <div className="glow-backdrop"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
