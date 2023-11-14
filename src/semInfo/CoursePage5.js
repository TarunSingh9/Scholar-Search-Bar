import React from 'react';
import './CoursePage.css'; // Update the CSS file name

const CoursePage5 = () => {
  return (
    <div className="course-page-5"> {/* Update the class name here */}
      <div className="content">
        <h1>Course Information Semester:5</h1> {/* Update the heading here */}
        <div className="courses">
          {/* Update the content here for the new courses and their descriptions */}
          <div className="course">
            <h2>KCS501 - Database Management System</h2>
            <p>
              Database Management System (DBMS) is a subject that focuses on the principles of database design and management. It covers topics such as data modeling, SQL (Structured Query Language), normalization, indexing, and database administration.
            </p>
          </div>
          <div className="course">
            <h2>KCS502 - Compiler Design</h2>
            <p>
              Compiler Design is a subject that explores the theory and practice of compiler construction. It typically covers lexical analysis, parsing, syntax-directed translation, code optimization, and code generation. Students learn how programming languages are translated into executable code.
            </p>
          </div>
          <div className="course">
            <h2>KCS503 - Design and Analysis of Algorithms</h2>
            <p>
              Design and Analysis of Algorithms is a fundamental computer science subject. It delves into algorithm design techniques, complexity analysis, and the study of various data structures and algorithms used for solving computational problems efficiently.
            </p>
          </div>
          <div className="course">
            <h2>KCS052 - Web Designing</h2>
            <p>
              Web Designing introduces students to the principles of designing and developing websites. Topics may include HTML, CSS, JavaScript, responsive web design, and user interface design. Students learn how to create user-friendly and visually appealing web interfaces.
            </p>
          </div>
          <div className="course">
            <h2>KCS058 - Human-Computer Interface</h2>
            <p>
              Human-Computer Interface (HCI) focuses on the design of user interfaces for computer systems. It covers principles of usability, user experience, user-centered design, and interaction design. Students learn how to create interfaces that are intuitive and user-friendly.
            </p>
          </div>
          {/* You can add more courses here with their respective descriptions */}
        </div>
      </div>
    </div>
  );
};

export default CoursePage5;
