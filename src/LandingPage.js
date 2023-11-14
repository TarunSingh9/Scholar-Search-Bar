import React from 'react';
import './css/LandingPage.css'; // You can create a separate CSS file for styling

function LandingPage() {
  return (
    <div className="middle-section">
    <div className="image-container">
      <img src="https://img.freepik.com/premium-vectobook-stack-bachelor-cap-hat-isolated-white-background-vector-cartoon-illustration_76964-12149.jpg" alt="Your SVG Image" />
    </div>
    <div className="text-content">
      <h2>Welcome to Our ScholarSearch Hub</h2>
      <p>
      Scolar Search Hub" is an innovative online platform designed to empower students by providing easy access to essential information related to their academic journey. This platform serves as a comprehensive resource hub, helping students find information about their subjects, including subject names, relevant textbooks, and subject codes, for every semester of their educational experience.
      </p>
    </div>
  </div>
  );
}

export default LandingPage;
