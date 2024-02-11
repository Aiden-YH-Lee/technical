import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure to create Navbar.css and add appropriate styles

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    setIsSticky(offset > window.innerHeight); // Assuming the landing page is full height
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
  <div className="nav-logo" onClick={() => scrollToSection('#landing')}>
    PENNAPPS
  </div>
  <div className="nav-items">
    <div className="nav-item" onClick={() => scrollToSection('#about')}>
      ABOUT
    </div>
    <div className="nav-item" onClick={() => scrollToSection('#apply')}>
      APPLY
    </div>
  </div>
</nav>
  );
};

export default Navbar;
