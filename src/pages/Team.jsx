import React, { useState } from 'react';
import './Team.css';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Team data - replace with actual team members
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Team Captain",
      department: "Mechanical Engineering",
      year: "3rd Year",
      image: "/images/team/member1.jpg", // placeholder
      bio: "Leading the team with passion for robotics and innovation.",
      skills: ["Leadership", "CAD Design", "Project Management"],
      social: {
        linkedin: "#",
        github: "#",
        email: "john@teamgenesis.com"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Technical Lead",
      department: "Computer Science",
      year: "4th Year",
      image: "/images/team/member2.jpg",
      bio: "Specializing in autonomous systems and AI integration.",
      skills: ["Python", "ROS", "Machine Learning"],
      social: {
        linkedin: "#",
        github: "#",
        email: "jane@teamgenesis.com"
      }
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Electronics Head",
      department: "Electronics & Communication",
      year: "3rd Year",
      image: "/images/team/member3.jpg",
      bio: "Expert in embedded systems and circuit design.",
      skills: ["PCB Design", "Arduino", "Embedded C"],
      social: {
        linkedin: "#",
        github: "#",
        email: "mike@teamgenesis.com"
      }
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Software Developer",
      department: "Computer Science",
      year: "2nd Year",
      image: "/images/team/member4.jpg",
      bio: "Building robust software solutions for robotics applications.",
      skills: ["C++", "ROS2", "Computer Vision"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@teamgenesis.com"
      }
    },
    {
      id: 5,
      name: "Alex Brown",
      role: "Mechanical Designer",
      department: "Mechanical Engineering",
      year: "3rd Year",
      image: "/images/team/member5.jpg",
      bio: "Creating innovative mechanical solutions and prototypes.",
      skills: ["SolidWorks", "3D Printing", "Manufacturing"],
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@teamgenesis.com"
      }
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Media & Outreach",
      department: "Design",
      year: "2nd Year",
      image: "/images/team/member6.jpg",
      bio: "Managing team presence and creative content.",
      skills: ["Graphic Design", "Social Media", "Photography"],
      social: {
        linkedin: "#",
        github: "#",
        email: "emily@teamgenesis.com"
      }
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-page">
      {/* Header Section */}
      <section className="team-header">
        <h1 className="team-title">MEET THE TEAM</h1>
        <p className="team-subtitle">The brilliant minds behind Team Genesis</p>
      </section>

      {/* Team Grid */}
      <section className="team-grid">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="team-card"
            onClick={() => handleMemberClick(member)}
          >
            <div className="card-image-wrapper">
              <div className="card-image-placeholder">
                <span className="placeholder-icon">👤</span>
              </div>
              <div className="card-overlay">
                <span className="view-profile">View Profile</span>
              </div>
            </div>
            <div className="card-content">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-department">{member.department}</p>
              <div className="member-year-badge">{member.year}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal for detailed view */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-layout">
              <div className="modal-left">
                <div className="modal-image-placeholder">
                  <span className="placeholder-icon-large">👤</span>
                </div>
                <div className="modal-social">
                  <a href={selectedMember.social.linkedin} className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={selectedMember.social.github} className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${selectedMember.social.email}`} className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="modal-right">
                <h2 className="modal-name">{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                <div className="modal-meta">
                  <span className="modal-department">{selectedMember.department}</span>
                  <span className="modal-year">{selectedMember.year}</span>
                </div>

                <div className="modal-bio">
                  <h4>About</h4>
                  <p>{selectedMember.bio}</p>
                </div>

                <div className="modal-skills">
                  <h4>Skills</h4>
                  <div className="skills-list">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;