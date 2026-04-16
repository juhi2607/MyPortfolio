import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Multitex Filtration Engineers Ltd",
    role: "Frontend Developer",
    location: "Noida",
    date: "Aug 2025 – Present",
    points: [
      "Developed a paint vessel and shell thickness form application using React.js and Next.js for efficient data input and visualization.",
      "Implemented form-based UI with validation to calculate and record vessel and shell thickness parameters accurately.",
      "Integrated PostgreSQL database for secure data storage and backend connectivity via API routes."
    ]
  },
  {
    company: "Techinfo AK Pvt Ltd",
    role: "Frontend Developer",
    location: "Noida",
    date: "Jul 2024 – Aug 2025",
    points: [
      "Built a responsive product showcase website using React.js, featuring hardware and software products.",
      "Implemented dynamic UI components and REST API integration for real-time data display."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title gradient-text">Professional Experience</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-date">{exp.date}</span>
              </div>
              <h4 className="experience-company gradient-text">{exp.company} <span className="location">— {exp.location}</span></h4>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
