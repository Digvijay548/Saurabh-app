import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
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
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Balaji Soap Factory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
