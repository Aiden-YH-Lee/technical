import React from 'react';
import './Footer.css';
import pennEngineeringLogo from '../assets/penn-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-group">
          <div className="footer-text">
            <h1>PENN<br></br>APPS</h1>
            <p>© 2022 PennApps</p>
            <p>contact@pennapps.com</p>
          </div>
          <div>
            <p>Code of Conduct</p>
          </div>
          <div className="footer-socials">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="footer-logo">
          <p>Organized with support from:</p>
          <img src={pennEngineeringLogo} alt="Penn Engineering Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
