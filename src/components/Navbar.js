import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoimg from "../images/Asset 3.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref to track the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks outside the menu
    window.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={logoimg} alt='Iconic Tech' />
      </div>
      
      {/* Hamburger / Cross Menu Icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="close-btn" >&times;</div> // Cross icon when menu is open
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>

      {/* Menu Links */}
      <ul ref={menuRef} className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}><span>Home</span></Link></li>
        <li><Link to="/services" onClick={toggleMenu}><span>Services</span></Link></li>
        <li><Link to="/about" onClick={toggleMenu}><span>About Us</span></Link></li>
        <li><Link to="/contact" onClick={toggleMenu}><span>Contact Us</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
