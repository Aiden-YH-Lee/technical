import React from 'react';
import Countdown from './Countdown'; 
import './Header.css';
import logoImage from '../assets/banner.png'; 

const Header = () => {
  return (
    <header className='header' id='landing'>
        <img src={logoImage} alt="PennApps XXIII Logo" className="logo" />
        <div className="event-info">
          <p>Sustainability 🍃 September 2-4, 2024</p>
        </div>
        <Countdown endDate={new Date('2024-09-02T00:00:00')} />
    </header>
  );
};

export default Header;
