import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Electrical.css';
import electricalBg from '../assets/images/electrical-bg.png';

function Electrical() {
  const navigate = useNavigate();

  return (
    <div className="electrical-page">
      {/* Neon Grid Background */}
      <div className="neon-grid"></div>

      {/* Background Image */}
      <div className="hero-background">
        <img src={electricalBg} alt="Electrical Background" />
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/robo-hi')}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      {/* Main Content */}
      <div className="electrical-content">
        {/* Top Section - Title */}
        <div className="header-section">
          <div className="title-badge">
            <h1 className="electrical-title">ELECTRICAL AND CONTROL SYSTEMS</h1>
          </div>
          <p className="electrical-subtitle">
            Every action our robots take is powered, connected, and managed by the Electrical & Control Systems division, which keeps Genesis running.
          </p>
        </div>

        {/* Bottom Section - Card Left, Circuit Right */}
        <div className="bottom-section">
          {/* Left - Who Are We Card */}
          <div className="who-card">
            <h2 className="who-title">WHO ARE WE ?</h2>
            
            <div className="who-content">
              <p>Every Genesis robot's heartbeat is powered by us.</p>
              
              <p>Our team works on everything from power management and control systems to PCB design and sensor integration.</p>
              
              <p>We ensure that every motor turns, every sensor communicates, and every spark is accurate and safe.</p>
              
              <p>The best electrical systems, in our opinion, are smooth, effective, and brimming with energy that flows in all directions, much like a team.</p>
            </div>
          </div>

          {/* Right - Circuit Graphic (background image will show through) */}
          <div className="circuit-graphic">
            {/* Circuit visualization from background */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electrical;