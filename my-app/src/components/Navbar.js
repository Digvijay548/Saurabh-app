import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes,FaIndustry  } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo">
    <FaIndustry size={30} color="#ffcc00" style={{ marginRight: '10px' }} />
    <span>Balaji Soap Factory</span>
  </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" exact="true" activeclassname="active-link" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active-link" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active-link" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/inquiry" activeclassname="active-link" onClick={closeMenu}>Inquiry</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
