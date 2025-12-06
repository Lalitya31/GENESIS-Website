import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingHero.css';
import robotImage from '../assets/images/robot.png'; // Update extension if needed

function LandingHero() {
  const navigate = useNavigate();

  const handleRobotClick = () => {
    navigate('/robo-hi');
  };

  return (
    <div className="landing-hero">
      <div className="radial-glow"></div>
      <div className="hero-content">
        <h1 className="welcome-text">WELCOME TO GENESIS</h1>
        <div className="subheading">
          <p className="filling-life">Filling Life Into</p>
          <p className="humanoids-text">Humanoids</p>
        </div>
        <div className="hero-image">
          <img
            src={robotImage}
            alt="Robot"
            className="robot-image"
            onClick={handleRobotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;