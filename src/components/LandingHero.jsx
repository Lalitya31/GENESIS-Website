import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingHero.css';
import robotImage from '../assets/images/robot.png';

function LandingHero() {
  const navigate = useNavigate();

  const handleRobotClick = () => {
    navigate('/robo-hi');
  };

  return (
    <div className="landing-hero">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="main-title">
            <span className="welcome-text">WELCOME TO</span>
            <span className="team-name">GENESIS</span>
          </h1>
          <p className="tagline">
            <span className="breathing-text">breathing life into</span>
            <span className="humanoids-text">Humanoids</span>
          </p>
        </div>
        
        <div className="robot-section" onClick={handleRobotClick}>
          <img src={robotImage} alt="Genesis Robot" className="robot-image" />
          <div className="click-hint">Click to explore →</div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;