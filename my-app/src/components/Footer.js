import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <NavLink to="/" exact="true" activeclassname="active-link">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active-link">
              About
            </NavLink>
            <NavLink to="/contact" activeclassname="active-link">
              Contact
            </NavLink>
            <NavLink to="/inquiry" activeclassname="active-link">
              Inquiry
            </NavLink>
          </div>

          <div className="footer-social-media">
  <a href="https://wa.me/+919738381000" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaWhatsapp />
  </a>
  <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaInstagram />
  </a>
  <a href="mailto:balajisoapfactory1000@gmail.com" className="social-icon">
    <FaEnvelope />
  </a>
</div>

        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Balaji Soap Factory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
