import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Get in Touch Heading */}
        <div className='footer_left_text'>
            <div className="footer-heading">
            <h1>Get in Touch</h1>
            <p>
                Ecosystem bootstrapping learning curve lean startup disruptive.
                Marketing long tail disruptive agile development partner.
            </p>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
                <FaPinterest />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
            </a>
            </div>
        </div>
        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="card">
            <a href="https://dribbble.com/example">
            <FiDribbble className="card-icon" />
                dribbble.com/example
            </a>
          </div>
          <div className="card">
            <a href="mailto:contact@example.com">
            <MdEmail className="card-icon" />
                contact@example.com
            </a>
          </div>
        </div>
      </div>
      <div className="reserved-rights">
          &copy; 2024 Iconic Tech. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
