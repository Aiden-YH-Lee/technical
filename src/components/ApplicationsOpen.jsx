// ApplicationsOpen.jsx
import React from 'react';
import './ApplicationsOpen.css';

const ApplicationsOpen = () => {
  return (
    <section id='apply' className="applications-open">
      <div className="content-container">
        <h1>Beleaf it or not, applications are open!</h1>
        <p>Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let's continue to make history together.</p>
        <a href="https://pennclubs.com/club/pennapps" className="apply-button" target="_blank" rel="noopener noreferrer">
          APPLY
        </a>
      </div>
    </section>
  );
};

export default ApplicationsOpen;