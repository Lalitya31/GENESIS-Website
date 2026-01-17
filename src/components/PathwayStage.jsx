import React, { useRef } from 'react';
import MemberPopup from './MemberPopup';
import './PathwayStage.css';

/**
 * PathwayStage - Individual stage tile representing one team member
 * Alternates left/right positioning based on index
 * 
 * @param {Object} member - Member data (id, name, role, quote)
 * @param {number} index - Position in the list (for alternating layout)
 * @param {boolean} isActive - Whether this stage is currently selected
 * @param {Function} onClick - Click handler
 * @param {boolean} showPopup - Whether to show popup for this stage
 * @param {Function} onClosePopup - Close popup handler
 */
const PathwayStage = ({ member, index, position, isActive, onClick, showPopup, onClosePopup }) => {
  const stageRef = useRef(null);
  // All popups open on left side
  const popupSide = 'left';
  
  const handleClick = () => {
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect();
      onClick(member.id, {
        top: rect.top,
        side: popupSide
      });
    }
  };
  
  const hasQuote = member.quote && member.quote.trim() !== '';
  
  return (
    <div 
      className="pathway-stage-wrapper on-path" 
      ref={stageRef}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <button
        className={`pathway-stage ${isActive ? 'active' : ''} ${!hasQuote ? 'no-quote' : ''}`}
        onClick={handleClick}
        aria-label={hasQuote ? `View ${member.name}'s profile` : member.name}
      >
        <div className="stage-content">
          <h3 className="stage-name">{member.name}</h3>
          {member.role && (
            <span className="stage-role">{member.role}</span>
          )}
        </div>
      </button>
      
      {showPopup && hasQuote && (
        <MemberPopup
          member={member}
          onClose={onClosePopup}
          position={popupSide}
        />
      )}
    </div>
  );
};

export default PathwayStage;
