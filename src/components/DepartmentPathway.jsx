import React, { useState } from 'react';
import PathwayStage from './PathwayStage';
import MemberPopup from './MemberPopup';
import './DepartmentPathway.css';

/**
 * DepartmentPathway - A vertical pathway UI component inspired by Duolingo's learning path.
 * Displays department members as progressive stages along a vertical line.
 * 
 * @param {Array} members - Array of member objects with id, name, role (optional), and quote
 */
const DepartmentPathway = ({ members = [] }) => {
  const [activeMemberId, setActiveMemberId] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, side: 'right' });

  const handleStageClick = (memberId, position) => {
    const member = members.find(m => m.id === memberId);
    // Only open popup if member has a non-empty quote
    if (!member?.quote || member.quote.trim() === '') {
      return;
    }
    
    // Toggle: if clicking the same member, close; otherwise open new one
    if (activeMemberId === memberId) {
      setActiveMemberId(null);
    } else {
      setActiveMemberId(memberId);
      setPopupPosition(position);
    }
  };

  const handleClosePopup = () => {
    setActiveMemberId(null);
  };

  const activeMember = members.find(m => m.id === activeMemberId);

  // Calculate position for each stage on the curved path
  const getStagePosition = (index) => {
    const totalStages = members.length;
    const stageSpacing = 120; // Vertical spacing between stages
    const amplitude = 25; // How far the curve goes left/right from center
    
    const y = index * stageSpacing + 60; // Vertical position
    // Alternate left and right with smooth wave
    const xOffset = Math.sin(index * 0.8) * amplitude;
    const x = 50 + xOffset; // X position as percentage
    
    return { x: `${x}%`, y: `${y}px` };
  };

  // Generate curved path through all stage positions
  const generateCurvedPath = () => {
    if (members.length === 0) return '';
    
    const stageSpacing = 120;
    const amplitude = 25;
    
    let path = 'M 50 20'; // Start at top
    
    members.forEach((member, index) => {
      const y = index * stageSpacing + 60;
      const x = 50 + Math.sin(index * 0.8) * amplitude;
      
      if (index === 0) {
        path += ` L ${x} ${y}`;
      } else {
        const prevY = (index - 1) * stageSpacing + 60;
        const prevX = 50 + Math.sin((index - 1) * 0.8) * amplitude;
        const controlY = (y + prevY) / 2;
        const controlX = (x + prevX) / 2;
        
        path += ` Q ${controlX} ${controlY}, ${x} ${y}`;
      }
    });
    
    return path;
  };

  const pathHeight = members.length * 120 + 100;

  return (
    <div className="department-pathway">
      <div className="pathway-container" style={{ minHeight: `${pathHeight}px` }}>
        <svg className="pathway-line" viewBox={`0 0 100 ${pathHeight}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="25%" stopColor="rgba(167, 139, 250, 0.8)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.9)" />
              <stop offset="75%" stopColor="rgba(167, 139, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d={generateCurvedPath()} stroke="url(#pathGradient)" strokeWidth="0.5" fill="none" strokeLinecap="round" filter="url(#glow)" />
        </svg>
        <div className="pathway-stages">
          {members.map((member, index) => {
            const position = getStagePosition(index);
            return (
              <PathwayStage
                key={member.id}
                member={member}
                index={index}
                position={position}
                isActive={member.id === activeMemberId}
                onClick={handleStageClick}
                showPopup={activeMemberId === member.id}
                onClosePopup={handleClosePopup}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPathway;
