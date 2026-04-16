import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { category: "Backend & DB", items: ["Node.js", "RESTful APIs", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Vite", "Tailwind CSS"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const AboutSkills = () => {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title gradient-text">About & Skills</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-text glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I am a passionate <strong>Frontend Developer</strong> with over a year of experience in building visually appealing and functional web applications. My journey started with a BCA and later an MCA from Gautam Buddha University. I strongly believe in component-based architecture and clean, scalable code.
          </p>
          <p>
            Constantly learning and adapting to modern web technologies, I strive to create web experiences that are both beautiful and performant. Whether it's integrating complex APIs or crafting pixel-perfect UIs, I love solving problems through code.
          </p>
        </motion.div>

        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="skill-group"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag glass"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent-glow)", color: "#fff" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
