import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Ensure you have the CSS file with the styles mentioned earlier

const Countdown = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="countdown">
      <div className="countdown-box">
        <span className="time-value">{timeLeft.days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{timeLeft.hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{timeLeft.minutes}</span>
        <span className="time-label">Minutes</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{timeLeft.seconds}</span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
