import React, { useState } from 'react';
import './InformationComponent.css'; // Import your CSS file for styling

const InformationComponent = () => {
  const [activeTab, setActiveTab] = useState('information');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="info-container">
      <div className="tabs">
        <button
          className={activeTab === 'information' ? 'active' : ''}
          onClick={() => handleTabChange('information')}
        >
          Information
        </button>
        <button
          className={activeTab === 'syllabus' ? 'active' : ''}
          onClick={() => handleTabChange('syllabus')}
        >
          Syllabus
        </button>
      </div>
      <div className="content">
        {activeTab === 'information' && (
          <div className="information">
            <h2>About AKTU Syllabus for Computer Science</h2>
            <p>Provide relevant information here...</p>
          </div>
        )}
        {activeTab === 'syllabus' && (
          <div className="syllabus">
            <h2>Computer Science Syllabus</h2>
            <p>Include syllabus details here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationComponent;
