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

  return (
    <div className="department-pathway">
      <div className="pathway-container">
        <div className="pathway-line" />
        <div className="pathway-stages">
          {members.map((member, index) => (
            <PathwayStage
              key={member.id}
              member={member}
              index={index}
              isActive={member.id === activeMemberId}
              onClick={handleStageClick}
              showPopup={activeMemberId === member.id}
              onClosePopup={handleClosePopup}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPathway;
