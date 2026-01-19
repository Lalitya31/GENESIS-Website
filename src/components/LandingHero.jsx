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
            <div className="contact-details">
              <a href="mailto:sponsor@teamgenesis.com" className="contact-link">
                <span className="contact-icon">✉</span>
                sponsor@teamgenesis.com
              </a>
              <a href="tel:+1234567890" className="contact-link">
                <span className="contact-icon">📞</span>
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-description">
            Explore our cutting-edge humanoid robotics projects and innovations
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🤖</div>
                <h3>Genesis Alpha</h3>
              </div>
              <p className="project-description">
                Our flagship humanoid robot featuring advanced bipedal locomotion 
                and natural human-like movements.
              </p>
              <div className="project-tags">
                <span className="tag">Bipedal</span>
                <span className="tag">AI-Powered</span>
                <span className="tag">Autonomous</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🧠</div>
                <h3>Neural Interface</h3>
              </div>
              <p className="project-description">
                Advanced AI and machine learning systems enabling intelligent 
                decision-making and adaptive behavior.
              </p>
              <div className="project-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Computer Vision</span>
                <span className="tag">NLP</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">⚡</div>
                <h3>Power Systems</h3>
              </div>
              <p className="project-description">
                Innovative energy management and power distribution for 
                extended operational capabilities.
              </p>
              <div className="project-tags">
                <span className="tag">Efficient</span>
                <span className="tag">Sustainable</span>
                <span className="tag">Long-lasting</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🔧</div>
                <h3>Mechanical Design</h3>
              </div>
              <p className="project-description">
                Precision-engineered mechanical systems with biomimetic joint 
                structures and robust actuators.
              </p>
              <div className="project-tags">
                <span className="tag">Biomimetic</span>
                <span className="tag">Precision</span>
                <span className="tag">Durable</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingHero;