import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Gautam Buddha University, Greater Noida",
    duration: "2022 – 2024",
    grade: "CGPA: 8.3/10.0"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "IP College Campus 2, Bulandshahr",
    duration: "2019 – 2022",
    grade: "CGPA: 7.0/10.0"
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title gradient-text">Education</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="education-grid">
        {educationList.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="edu-icon-wrapper">
              <FaGraduationCap className="edu-icon" />
            </div>
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <div className="edu-meta">
                <span className="edu-duration">{edu.duration}</span>
                <span className="edu-grade gradient-text">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
