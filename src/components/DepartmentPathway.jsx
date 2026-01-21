import React, { useState } from 'react';
import './DepartmentPathway.css';

/**
 * DepartmentPathway - Split-Canvas Reveal
 * Left: Static alphabetical name field
 * Right: Reactive quote display
 * Zero overlap, zero clutter, maximum restraint.
 * 
 * @param {Array} members - Array of member objects with id, name, role (optional), and quote
 */
const DepartmentPathway = ({ members = [] }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    const hasQuote = member?.quote && member.quote.trim() !== '';
    if (!hasQuote) return;
    
    // Toggle: clicking same member deselects
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  return (
    <div className="department-pathway">
      <div className="split-canvas">
        {/* LEFT: Static Name Field */}
        <div className="name-field">
          {members.map((member) => {
            const hasQuote = member?.quote && member.quote.trim() !== '';
            const isSelected = selectedMember?.id === member.id;
            
            return (
              <div
                key={member.id}
                className={`name-item ${isSelected ? 'selected' : ''} ${!hasQuote ? 'no-quote' : ''}`}
                onClick={() => handleMemberClick(member)}
              >
                <span className="name">{member.name}</span>
                {member.role && <span className="role">{member.role}</span>}
              </div>
            );
          })}
        </div>

        {/* RIGHT: Reactive Quote Field */}
        <div className="quote-field">
          {selectedMember ? (
            <div className="quote-display">
              <div className="quote-name">{selectedMember.name}</div>
              {selectedMember.role && (
                <div className="quote-role">{selectedMember.role}</div>
              )}
              <div className="quote-text">{selectedMember.quote}</div>
            </div>
          ) : (
            <div className="quote-placeholder">
              Select a name to view their quote
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPathway;
