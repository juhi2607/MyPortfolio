import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="contact-container glass">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any opportunities or collaborations.</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>juhisirohi26@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 7XXXXXXXX</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Noida, India</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/juhi-sirohi-71843724a/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/juhi2607" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required className="form-input"></textarea>
          </div>
          <button type="submit" className="btn primary-btn submit-btn">Send Message</button>
        </motion.form>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Juhi Sirohi. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
