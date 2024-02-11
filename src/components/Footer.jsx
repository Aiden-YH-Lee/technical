import React from 'react';
import './Footer.css';
import footerBackground from '/Users/yeongheonlee/PennApps/technical/src/assets/footer-background.png'; // Adjust the path as needed
import pennEngineeringLogo from '/Users/yeongheonlee/PennApps/technical/src/assets/penn-logo.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h1>PENNAPPS</h1>
          <p>© 2022 PennApps</p>
          <p>contact@pennapps.com</p>
        </div>
        <div className="footer-links">
          <p>Code of Conduct</p>
        </div>
        <div className="footer-socials">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
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
