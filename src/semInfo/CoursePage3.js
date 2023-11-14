import React from 'react';
import './CoursePage.css'; // Update the CSS file name

const CoursePage3 = () => {
  return (
    <div className="course-page-3"> {/* Update the class name here */}
      <div className="content">
        <h1>Course Information Semester:3</h1> {/* Update the heading here */}
        <div className="courses">             
          {/* Update the content here for KAS302 - Maths IV and other courses */}
          <div className="course">
            <h2>KAS302 - Maths IV</h2>
            <p>
              Maths IV, or Mathematics IV, is a subject that typically delves deeper into advanced mathematical concepts. It may cover topics like differential equations, complex variables, numerical analysis, and linear algebra. This subject builds on the mathematical foundation laid in earlier semesters and provides mathematical tools for various engineering applications.
            </p>
          </div>
          <div className="course">
            <h2>KVE301 - Universal Human Values</h2>
            <p>
              Universal Human Values is a course designed to instill a sense of ethics and values in students. It typically covers topics related to human values, ethical principles, and their application in various life situations. The subject aims to foster a sense of responsibility and ethical behavior.
            </p>
          </div>
          <div className="course">
            <h2>KCS301 - Data Structure</h2>
            <p>
              Data Structure is a fundamental subject in computer science that focuses on organizing and managing data efficiently. Topics may include arrays, linked lists, trees, graphs, and algorithms for data manipulation. Understanding data structures is essential for developing efficient software and algorithms.
            </p>
          </div>
          <div className="course">
            <h2>KCS302 - Computer Organization and Architecture</h2>
            <p>
              Computer Organization and Architecture cover the internal structure and design of computer systems. It includes topics like CPU architecture, memory organization, instruction sets, and computer components. This subject provides insights into how computers function at the hardware level.
            </p>
          </div>
          <div className="course">
            <h2>KCS303 - Discrete Structures & Theory of Logic</h2>
            <p>
              Discrete Structures & Theory of Logic deals with mathematical concepts that have discrete, non-continuous values. Topics may include sets, relations, logic, propositional and predicate calculus, and combinatorics. It provides the mathematical foundation for computer science and engineering, especially in areas like algorithms and formal logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage3;
