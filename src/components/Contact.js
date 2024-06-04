import React from 'react'
import './styles/Contact.css';

const Contact = () => {
    return (
        <div className="about-container">
          <div className="about-content">
            <h2>About Me</h2>
            <p className="about-description">
              Hi, I'm <strong>Mansi Mangesh Godse</strong>, a passionate frontend developer with expertise in Web Development technologies.
            </p>
            <div className="contact-details">
              <h3>Contact Information</h3>
              <ul>
                <li><i className="fas fa-phone"></i><a href="tel:+919011928792">9011928792</a></li>
                <li><i className="fas fa-envelope"></i> <a href="mailto:mansigodse3@gmail.com">mansigodse3@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Contact