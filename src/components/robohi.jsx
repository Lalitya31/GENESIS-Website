import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './robohi.css';

import mechanicalImg from '../assets/images/mechanical.png';
import electricalImg from '../assets/images/electrical.png';
import softwareImg from '../assets/images/software.png';
import leadsImg from '../assets/images/leads.png';

function Robohi() {
  const containerRef = useRef(null);
  const departmentsRef = useRef(null);
  const navigate = useNavigate();
  const [laserAngle, setLaserAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const eyeX = rect.left + (rect.width * 0.5);
      const eyeY = rect.top + (rect.height * 0.4);
      const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX) * (180 / Math.PI);
      
      setLaserAngle(angle);
    };

    const handleMouseLeave = () => {
      setLaserAngle(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMeetTheTeam = () => {
    departmentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add this useEffect for laser-word interaction
  useEffect(() => {
    const handleLaserWordGlow = () => {
      const words = document.querySelectorAll('.tech-word');
      const container = containerRef.current;
      
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const laserOriginX = rect.left + (rect.width * 0.5);
      const laserOriginY = rect.top + (rect.height * 0.4);
      
      words.forEach(word => {
        const wordRect = word.getBoundingClientRect();
        const wordCenterX = wordRect.left + wordRect.width / 2;
        const wordCenterY = wordRect.top + wordRect.height / 2;
        
        // Calculate distance from laser origin to word
        const distance = Math.sqrt(
          Math.pow(wordCenterX - laserOriginX, 2) + 
          Math.pow(wordCenterY - laserOriginY, 2)
        );
        
        // Calculate angle to word
        const angleToWord = Math.atan2(wordCenterY - laserOriginY, wordCenterX - laserOriginX) * (180 / Math.PI);
        const angleDifference = Math.abs(angleToWord - laserAngle);
        
        // If laser is pointing near the word (within 15 degrees) and close enough
        if (angleDifference < 15 && distance < 800) {
          // Inverse proportion: closer = more glow
          const glowIntensity = Math.max(0, 1 - (distance / 800));
          const opacity = 0.15 + (glowIntensity * 0.85); // 0.15 to 1
          
          word.style.color = `rgba(168, 85, 247, ${opacity})`;
          word.style.textShadow = `
            0 0 ${20 * glowIntensity}px rgba(168, 85, 247, ${glowIntensity}),
            0 0 ${40 * glowIntensity}px rgba(236, 72, 153, ${glowIntensity * 0.8}),
            0 0 ${60 * glowIntensity}px rgba(168, 85, 247, ${glowIntensity * 0.6})
          `;
          word.style.transform = `scale(${1 + glowIntensity * 0.2})`;
        } else {
          // Reset to default dim state
          word.style.color = 'rgba(168, 85, 247, 0.15)';
          word.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.1)';
          word.style.transform = 'scale(1)';
        }
      });
    };
    
    const interval = setInterval(handleLaserWordGlow, 50);
    
    return () => clearInterval(interval);
  }, [laserAngle]);

  return (
    <div className="robo-hi">
      {/* Neon Grid - Full page, fixed position */}
      <div className="neon-grid"></div>

      {/* Hero Section with Robot */}
      <div className="hero-section">
        {/* Floating Tech Words */}
        <div className="floating-tech-words">
          <span className="tech-word" data-word="SOFTWARE" style={{ top: '25%', left: '20%' }}>SOFTWARE</span>
          <span className="tech-word" data-word="AI" style={{ top: '35%', left: '75%' }}>AI</span>
          <span className="tech-word" data-word="GRIT" style={{ top: '45%', left: '15%' }}>GRIT</span>
          <span className="tech-word" data-word="POWER" style={{ top: '40%', right: '18%' }}>POWER</span>
          <span className="tech-word" data-word="STRENGTH" style={{ top: '60%', left: '22%' }}>STRENGTH</span>
          <span className="tech-word" data-word="ELASTICITY" style={{ top: '28%', right: '22%' }}>ELASTICITY</span>
          <span className="tech-word" data-word="SOCKET" style={{ top: '65%', right: '20%' }}>SOCKET</span>
          <span className="tech-word" data-word="PCB" style={{ top: '70%', left: '18%' }}>PCB</span>
          <span className="tech-word" data-word="RC" style={{ top: '50%', right: '25%' }}>RC</span>
          <span className="tech-word" data-word="FORUM" style={{ top: '75%', right: '40%' }}>FORUM</span>
          <span className="tech-word" data-word="AGILE" style={{ top: '35%', left: '28%' }}>AGILE</span>
          <span className="tech-word" data-word="LOAD" style={{ top: '55%', left: '25%' }}>LOAD</span>
          <span className="tech-word" data-word="CONNECTION" style={{ top: '72%', left: '25%' }}>CONNECTION</span>
          <span className="tech-word" data-word="LFR" style={{ top: '48%', left: '78%' }}>LFR</span>
          <span className="tech-word" data-word="SENSORS" style={{ top: '20%', left: '35%' }}>SENSORS</span>
          <span className="tech-word" data-word="ROS" style={{ top: '78%', right: '25%' }}>ROS</span>
        </div>

        <div className="heading-section">
          <h1 className="glowy-heading" onClick={handleMeetTheTeam}>
            MEET THE TEAM
          </h1>
        </div>
        
        <div className="robot-container" ref={containerRef}>
          <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="robot-head-svg">
            <defs>
              <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
                <stop offset="3%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="8%" stopColor="#e879f9" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#c084fc" stopOpacity="0.65" />
                <stop offset="25%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#e879f9" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#c084fc" stopOpacity="0.15" />
                <stop offset="80%" stopColor="#a855f7" stopOpacity="0.05" />
                <stop offset="95%" stopColor="#e879f9" stopOpacity="0.01" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>

              <filter id="laserGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="laserHaze">
                <feGaussianBlur stdDeviation="15" result="blur1"/>
                <feGaussianBlur stdDeviation="25" result="blur2"/>
                <feMerge>
                  <feMergeNode in="blur2"/>
                  <feMergeNode in="blur1"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <linearGradient id="metalShine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>

              <linearGradient id="darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>

            <g>
              <ellipse cx="300" cy="450" rx="150" ry="30" fill="#1f2937" opacity="0.3"/>
              <circle cx="300" cy="280" r="180" fill="url(#metalShine)" stroke="#6b7280" strokeWidth="2"/>
              <ellipse cx="300" cy="180" rx="120" ry="80" fill="#ffffff" opacity="0.3"/>
              <circle cx="300" cy="280" r="170" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
              <ellipse cx="300" cy="280" rx="140" ry="160" fill="url(#darkMetal)" stroke="#374151" strokeWidth="2"/>
              <ellipse cx="300" cy="280" rx="120" ry="140" fill="#0f172a" opacity="0.8"/>
            </g>

            <g>
              <circle cx="300" cy="240" r="70" fill="#111827" stroke="#374151" strokeWidth="3"/>
              <circle cx="300" cy="240" r="62" fill="none" stroke="#4b5563" strokeWidth="2"/>
              <circle cx="300" cy="240" r="55" fill="none" stroke="#6b21a8" strokeWidth="1.5" opacity="0.6"/>
              <circle cx="300" cy="240" r="35" fill="#1f2937"/>
              <circle cx="300" cy="240" r="28" fill="#6b21a8" opacity="0.7"/>
              <circle cx="300" cy="240" r="18" fill="#a855f7" filter="url(#laserGlow)"/>
              <circle cx="300" cy="240" r="10" fill="#e879f9"/>
              <circle cx="295" cy="235" r="5" fill="#faf5ff" opacity="0.9"/>

              <g style={{ transform: `rotate(${laserAngle}deg)`, transformOrigin: '300px 240px', transition: 'transform 0.1s ease-out' }}>
                {/* Ultra-wide outer haze - very diffused */}
                <path d="M 300 240 L 3000 100 L 3000 380 Z" fill="url(#laserBeam)" opacity="0.03" filter="url(#laserHaze)"/>
                <path d="M 300 240 L 3000 130 L 3000 350 Z" fill="url(#laserBeam)" opacity="0.05" filter="url(#laserHaze)"/>
                <path d="M 300 240 L 3000 150 L 3000 330 Z" fill="url(#laserBeam)" opacity="0.08" filter="url(#laserHaze)"/>
                
                {/* Wide glow layers */}
                <path d="M 300 240 L 2800 170 L 2800 310 Z" fill="url(#laserBeam)" opacity="0.12" filter="url(#laserGlow)"/>
                <path d="M 300 240 L 2600 185 L 2600 295 Z" fill="url(#laserBeam)" opacity="0.18" filter="url(#laserGlow)"/>
                <path d="M 300 240 L 2400 200 L 2400 280 Z" fill="url(#laserBeam)" opacity="0.25" filter="url(#laserGlow)"/>
                
                {/* Mid-range glow */}
                <path d="M 300 240 L 2200 210 L 2200 270 Z" fill="url(#laserBeam)" opacity="0.35" filter="url(#laserGlow)"/>
                <path d="M 300 240 L 2000 218 L 2000 262 Z" fill="url(#laserBeam)" opacity="0.5" filter="url(#laserGlow)"/>
                
                {/* Core beam */}
                <path d="M 300 240 L 1800 225 L 1800 255 Z" fill="url(#laserBeam)" opacity="0.7"/>
                <path d="M 300 240 L 1600 232 L 1600 248 Z" fill="url(#laserBeam)" opacity="0.9"/>
                <path d="M 300 240 L 1400 237 L 1400 243 Z" fill="#e879f9" opacity="0.95"/>
              </g>
            </g>

            <g>
              <rect x="80" y="250" width="30" height="80" rx="15" fill="url(#metalShine)" stroke="#6b7280" strokeWidth="2"/>
              <rect x="490" y="250" width="30" height="80" rx="15" fill="url(#metalShine)" stroke="#6b7280" strokeWidth="2"/>
            </g>

            <g>
              <rect x="285" y="80" width="30" height="50" rx="15" fill="url(#metalShine)" stroke="#6b7280" strokeWidth="2"/>
              <circle cx="300" cy="70" r="12" fill="#a855f7" stroke="#6b21a8" strokeWidth="2" filter="url(#laserGlow)"/>
              <circle cx="300" cy="70" r="6" fill="#faf5ff"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Departments Section - Vertical Neural Flow */}
      <div className="departments-section" ref={departmentsRef}>
        <h2 className="departments-title">Engineering the Intelligence</h2>
        
        <div className="neural-spine">
          {/* Leads Node */}
          <div className="neural-node" onClick={() => navigate('/team/leads')}>
            <div className="node-connector top"></div>
            <div className="node-glow">
              <div className="node-ring ring-1"></div>
              <div className="node-ring ring-2"></div>
              <div className="node-ring ring-3"></div>
              <div className="node-core">
                <img src={leadsImg} alt="Leads" className="node-icon" />
              </div>
            </div>
            <div className="node-content">
              <h3 className="node-title">Leads</h3>
              <p className="node-description">Guiding the vision forward</p>
            </div>
            <div className="node-connector bottom"></div>
          </div>

          {/* Mechanical & Design Node */}
          <div className="neural-node" onClick={() => navigate('/team/mechanical')}>
            <div className="node-connector top"></div>
            <div className="node-glow">
              <div className="node-ring ring-1"></div>
              <div className="node-ring ring-2"></div>
              <div className="node-ring ring-3"></div>
              <div className="node-core">
                <img src={mechanicalImg} alt="Mechanical" className="node-icon" />
              </div>
            </div>
            <div className="node-content">
              <h3 className="node-title">Mechanical & Design</h3>
              <p className="node-description">Building the physical foundation</p>
            </div>
            <div className="node-connector bottom"></div>
          </div>

          {/* Electrical & Controls Node */}
          <div className="neural-node" onClick={() => navigate('/team/electrical')}>
            <div className="node-connector top"></div>
            <div className="node-glow">
              <div className="node-ring ring-1"></div>
              <div className="node-ring ring-2"></div>
              <div className="node-ring ring-3"></div>
              <div className="node-core">
                <img src={electricalImg} alt="Electrical" className="node-icon" />
              </div>
            </div>
            <div className="node-content">
              <h3 className="node-title">Electrical & Controls</h3>
              <p className="node-description">Powering innovation with precision</p>
            </div>
            <div className="node-connector bottom"></div>
          </div>

          {/* Software & AI Node */}
          <div className="neural-node last-node" onClick={() => navigate('/team/software')}>
            <div className="node-connector top"></div>
            <div className="node-glow">
              <div className="node-ring ring-1"></div>
              <div className="node-ring ring-2"></div>
              <div className="node-ring ring-3"></div>
              <div className="node-core">
                <img src={softwareImg} alt="Software" className="node-icon" />
              </div>
            </div>
            <div className="node-content">
              <h3 className="node-title">Software & A.I.</h3>
              <p className="node-description">Intelligence meets automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Connect With Us</h2>
          <p className="contact-subtitle">Join the Innovation Journey</p>

          <div className="contact-grid">
            {/* Email Card - Primary */}
            <a href="mailto:genesisatvitc@gmail.com" className="contact-card email-card">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>genesisatvitc@gmail.com</p>
              <div className="hover-text">Drop us a message</div>
            </a>

            {/* LinkedIn Card - Secondary */}
            <a href="https://linkedin.com/company/genesisvitc" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <p>@genesisvitc</p>
              <div className="hover-text">Connect professionally</div>
            </a>

            {/* Instagram Card - Tertiary */}
            <a href="https://www.instagram.com/genesis.vitc" target="_blank" rel="noopener noreferrer" className="contact-card instagram-card">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Instagram</h3>
              <p>@genesis.vitc</p>
              <div className="hover-text">Keep up with us</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Robohi;
