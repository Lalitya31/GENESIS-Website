import React, { useEffect, useRef } from 'react';
import './MemberPopup.css';

/**
 * MemberPopup - Detail card that displays when a pathway stage is clicked
 * Shows full name and quote, positioned beside the stage
 * 
 * @param {Object} member - Member data (id, name, quote)
 * @param {Function} onClose - Close handler
 * @param {string} position - 'left' or 'right' - which side the stage is on
 */
const MemberPopup = ({ member, onClose, position }) => {
  const popupRef = useRef(null);

  // Debug: Log when popup renders
  console.log('Popup rendering:', member);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Close on Escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className={`member-popup-inline ${position}`} ref={popupRef}>
      <button 
        className="popup-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      
      <div className="popup-content">
        <h2 className="popup-name">{member.name}</h2>
        {member.role && (
          <p className="popup-role">{member.role}</p>
        )}
        {member.quote && (
          <blockquote className="popup-quote">
            "{member.quote}"
          </blockquote>
        )}
        {!member.quote && (
          <blockquote className="popup-quote">
            "No quote available"
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default MemberPopup;
