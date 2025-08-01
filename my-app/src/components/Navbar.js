import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/BG/logo.png`}
          alt="Balaji Soap Factory Logo"
          className="logo-img"
        />
        <span className="logo-text">Balaji Soap</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" exact="true" activeclassname="active-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active-link" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/inquiry" activeclassname="active-link" onClick={closeMenu}>
            Inquiry
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
