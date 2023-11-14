import React from 'react';
import './CoursePage.css'; // Update the CSS file name

const CoursePage6 = () => {
  return (
    <div className="course-page-6"> {/* Update the class name here */}
      <div className="content">
        <h1>Course Information Semester:6</h1> {/* Update the heading here */}
        <div className="courses">
          {/* Update the content here for the new courses and their descriptions */}
          <div className="course">
            <h2>KCS601 - Software Engineering</h2>
            <p>
              Software Engineering is a subject that covers the principles and practices of software development. It typically includes topics like software development life cycles, requirements engineering, software design, testing, and project management. Students learn how to systematically develop high-quality software.
            </p>
          </div>
          <div className="course">
            <h2>KCS602 - Web Technology</h2>
            <p>
              Web Technology introduces students to various technologies and tools used for web development. It may cover topics like HTML, CSS, JavaScript, web frameworks, and web application development. Students gain the skills needed to create web-based applications and websites.
            </p>
          </div>
          <div className="course">
            <h2>KCS603 - Computer Networks</h2>
            <p>
              Computer Networks explores the principles and protocols used in networking. Topics may include network architecture, data communication, network layers, routing, and network security. Students learn how data is transmitted and shared over computer networks.
            </p>
          </div>
          <div className="course">
            <h2>KCS064 - Data Compression</h2>
            <p>
              Data Compression focuses on techniques and algorithms used to reduce the size of data while preserving its essential information. It may cover lossless and lossy compression methods, compression standards, and applications in multimedia and data storage.
            </p>
          </div>
          <div className="course">
            <h2>KOE065 - COMPUTER BASED NUMERICAL TECHNIQUES</h2>
            <p>
              Computer-Based Numerical Techniques typically covers numerical methods and algorithms used to solve mathematical problems with the help of computers. Topics may include interpolation, numerical integration, differential equations, and numerical optimization techniques.
            </p>
          </div>
          {/* You can add more courses here with their respective descriptions */}
        </div>
      </div>
    </div>
  );
};

export default CoursePage6;
