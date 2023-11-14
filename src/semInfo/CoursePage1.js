import React from 'react';
import './CoursePage.css'; // You can create this CSS file for styling
// Import your engineering image

const CoursePage1 = () => {
  return (
    <div className="course-page">
      <div className="content">
        <h1>Course Information Semester:1</h1>
        <div className="courses">
          <div className="course">
            <h2>KAS103T - Engineering Mathematics-I</h2>
            <p>Engineering Mathematics-I typically includes topics in calculus, matrix algebra, and differential equations. It provides the mathematical foundation necessary for engineering problem-solving and analysis.</p>
          </div>
          <div className="course">
            <h2>KEC101T - Emerging Domain in Electronics Engineering</h2>
            <p>This subject introduces students to emerging domains and advancements in electronics engineering. Specific topics may vary, but it generally covers recent developments, trends, and innovative technologies in electronics engineering.</p>
          </div>
          <div className="course">
            <h2>KME101T - Fundamentals of Mechanical Engineering & Mechatronics</h2>
            <p>Fundamentals of Mechanical Engineering & Mechatronics provides an introduction to the principles of mechanical engineering and mechatronics. Topics may include mechanics, thermodynamics, materials science, and an overview of mechatronics systems.</p>
          </div>
          <div className="course">
            <h2>KMC102 - Emerging Technology for Engineering</h2>
            <p>This subject explores emerging technologies with relevance to engineering fields. It may cover topics such as nanotechnology, 3D printing, renewable energy, and the Internet of Things (IoT). Students gain insights into the latest technological trends shaping the engineering landscape.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage1;
