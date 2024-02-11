import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div className="information">
      <section id="about" className="info-section">
        <h2>About</h2>
            <h3>The College Hackathon</h3>
                <p>{'In the context of a hackathon, the word "hack" is used to describe how multiple technologies can be used together in a new and innovative way. Teams of up to four people spend the weekend working on innovative software and hardware solutions to real-world problems. These projects range in platform and application, including elements of web development, mobile applications, drones, and more. However, many times the most important aspect of a hackathon is the community it generates and skills that inexperienced hackers walk away with.'}</p>
            <h3>The PennApps Difference</h3>
                <p>{'Founded in the fall of 2009, PennApps was the nation\'s first student-run college hackathon. Since then, it has spurred a revolution in the way engineering students develop and showcase their skills, spawning an entire "league" of hackathons across the nation. In past years, over a thousand students from the U.S. and other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts alike will work together, learn and compete to become better engineers and work on awesome projects. This year, PennApps is expanding its focus on learning by emphasizing the collaboration of new and experienced hackers, and providing more learning opportunities and workshops throughout the weekend.'}</p>    
      </section>
      <section className="info-section">
        <h2>Apply</h2>
            <h3>The Application Process</h3>
        <p>{'Thousands of qualified candidates apply to participate in PennApps every year, however our space can only support a limited number of participants and as much as we\'d like to take everyone, it just isn\'t possible. We think that the fairest way to decide who we invite is by asking everyone to tell us a little bit about themselves, so that we can invite people who have demonstrated interest and skill. We don\'t expect everyone to have been to a hackathon before, in fact, we love first-time hackers having been there ourselves when we started! We\'re just trying to bring those who most want to really build something awesome and learn something new, and while we can\'t invite everyone, we\'re striving to continue building a community of diverse and amazing hackers at PennApps. Just show us what you\'ve made, tell us about why you want to be at PennApps, and we\'ll do our best to get you here! Applications are currently open.'}</p>

      </section>
    </div>
  );
};

export default Information;
