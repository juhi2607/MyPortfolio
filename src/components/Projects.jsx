import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "PDMarktez — Digital Marketing Website",
    category: "Digital Marketing Platform",
    description: "Built a professional digital marketing website using React.js with a modern, fully responsive interface. Structured the site to highlight services, campaigns, and client offerings effectively. Focused on performance optimization and clean UI.",
    tech: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3"],
    image: "/images/pdmarketz.png", 
    links: { live: "#", github: "https://github.com/juhi2607/pdmarketz" }
  },
  {
    title: "Shop Me — E-Commerce Website",
    category: "Frontend Web Application",
    description: "Developed a responsive e-commerce frontend using React.js and Vite. Implemented reusable components, optimized for fast loading, and integrated product listing, filtering, and cart UI features for a smooth shopping experience.",
    tech: ["React.js", "Vite", "CSS", "JavaScript (ES6)", "HTML5"],
    image: "/images/ecommerce.png",
    links: { live: "#", github: "https://github.com/juhi2607/shopping-website" }
  },
  {
    title: "Hotel Website — Landing Page",
    category: "Landing Page",
    description: "Designed a responsive hotel landing page with interactive UI features, optimized image handling, and smooth cross-browser performance. Included sections for rooms, amenities, and booking information with an elegant layout.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/Hote website page.jpeg",
    links: { live: "#", github: "https://github.com/juhi2607/Hotel-Website-Page" }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.links.live} className="overlay-link"><FaExternalLinkAlt /></a>
                <a href={project.links.github} className="overlay-link"><FaGithub /></a>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category gradient-text">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
