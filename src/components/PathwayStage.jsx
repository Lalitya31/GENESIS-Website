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
const PathwayStage = ({ member, index, isActive, onClick, showPopup, onClosePopup }) => {
  const stageRef = useRef(null);
  // Alternate left/right positioning
  const position = index % 2 === 0 ? 'left' : 'right';
  
  const handleClick = () => {
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect();
      onClick(member.id, {
        top: rect.top,
        side: position === 'left' ? 'left' : 'right'
      });
    }
  };
  
  return (
    <div className={`pathway-stage-wrapper ${position}`} ref={stageRef}>
      <button
        className={`pathway-stage ${isActive ? 'active' : ''}`}
        onClick={handleClick}
        aria-label={`View ${member.name}'s profile`}
      >
        <div className="stage-node">
          <div className="stage-dot" />
        </div>
        <div className="stage-content">
          <h3 className="stage-name">{member.name}</h3>
          {member.role && (
            <span className="stage-role">{member.role}</span>
          )}
        </div>
      </button>
      
      {showPopup && (
        <MemberPopup
          member={member}
          onClose={onClosePopup}
          position={position}
        />
      )}
    </div>
  );
};

export default PathwayStage;
