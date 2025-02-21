// src/Work.js
import React, { useState } from 'react';
import './Work.css';

const projects = [
  {
    title: 'Project A',
    description: 'Brief overview of Project A.',
    details: 'Detailed description of Project A, including technologies used, challenges faced, and outcomes achieved.',
  },
  {
    title: 'Project B',
    description: 'Brief overview of Project B.',
    details: 'Detailed description of Project B, highlighting key features and the development process.',
  },
  // Add more projects as needed
];

const Work = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="work-section">
      <h2>Projects</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`work-card ${expandedProject === index ? 'expanded' : ''}`}
            onClick={() => toggleProject(index)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {expandedProject === index && (
              <div className="project-details">
                <p>{project.details}</p>
                <button onClick={() => toggleProject(index)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
