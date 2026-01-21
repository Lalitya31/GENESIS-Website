import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingHero.css';
import robotImage from '../assets/images/robot.png';

function LandingHero() {
  const navigate = useNavigate();

  const handleRobotClick = () => {
    navigate('/robo-hi');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
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
            
            {/* Navigation Buttons */}
            <div className="hero-actions">
              <button className="hero-btn primary-btn" onClick={handleRobotClick}>
                <span className="btn-text">About Us</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="hero-btn secondary-btn" onClick={() => scrollToSection('sponsors')}>
                <span className="btn-text">Sponsors</span>
                <span className="btn-icon">★</span>
              </button>
              <button className="hero-btn secondary-btn" onClick={() => scrollToSection('projects')}>
                <span className="btn-text">Projects</span>
                <span className="btn-icon">◆</span>
              </button>
            </div>
          </div>
          
          <div className="robot-section" onClick={handleRobotClick}>
            <img src={robotImage} alt="Genesis Robot" className="robot-image" />
            <div className="click-hint">Click to explore →</div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section id="sponsors" className="section sponsors-section">
        <div className="section-container">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="section-description">
            Team Genesis thrives with the support of our incredible sponsors. 
            Together, we're shaping the future of humanoid robotics.
          </p>
          
          <div className="sponsors-grid">
            <div className="sponsor-card">
              <div className="sponsor-icon">🤝</div>
              <h3>Partner With Us</h3>
              <p>Help us push the boundaries of robotics and AI innovation</p>
            </div>
            <div className="sponsor-card">
              <div className="sponsor-icon">💡</div>
              <h3>Support Innovation</h3>
              <p>Enable cutting-edge research and development in humanoid technology</p>
            </div>
            <div className="sponsor-card">
              <div className="sponsor-icon">🌟</div>
              <h3>Join Our Journey</h3>
              <p>Be part of breakthrough achievements in robotics</p>
            </div>
          </div>

          <div className="contact-info">
            <h3>Interested in Sponsoring?</h3>
            <p className="contact-text">
              We'd love to discuss partnership opportunities with you.
            </p>
            <a href="mailto:genesisatvitc@gmail.com" className="contact-link">
              genesisatvitc@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Our Projects</h2>
          <p className="projects-placeholder">
            Projects currently under development
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingHero;