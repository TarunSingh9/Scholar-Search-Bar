import React from 'react';
import './CoursePage.css'; // Update the CSS file name

const CoursePage4 = () => {
  return (
    <div className="course-page-4"> {/* Update the class name here */}
      <div className="content">
        <h1>Course Information Semester:4</h1> {/* Update the heading here */}
        <div className="courses">
          {/* Update the content here for the new courses and their descriptions */}
          <div className="course">
            <h2>KOE043 - Energy Science & Engineering</h2>
            <p>
              Energy Science & Engineering typically covers the science and engineering principles related to energy sources, conservation, and utilization. It may include topics like renewable energy sources, energy efficiency, and sustainable energy technologies.
            </p>
          </div>
          <div className="course">
            <h2>KAS401 - Technical Communication</h2>
            <p>
              Technical Communication is a subject focused on enhancing students' communication skills in the context of technical and scientific writing and presentation. It covers writing reports, technical documentation, and delivering effective technical presentations.
            </p>
          </div>
          <div className="course">
            <h2>KCS401 - Operating Systems</h2>
            <p>
              Operating Systems is a core subject in computer science that explores the fundamental principles of operating systems. Topics may include process management, memory management, file systems, and security. It provides an understanding of how computer operating systems work.
            </p>
          </div>
          <div className="course">
            <h2>KCS402 - Theory of Automata and Formal Languages</h2>
            <p>
              Theory of Automata and Formal Languages is a theoretical computer science subject that explores automata, formal grammars, and language theory. It covers topics like finite automata, regular expressions, context-free grammars, and formal language recognition.
            </p>
          </div>
          <div className="course">
            <h2>KCS403 - Microprocessor</h2>
            <p>
              Microprocessor covers the architecture, working, and programming of microprocessors and microcontroller units. Topics may include assembly language programming, interfacing, and practical applications of microprocessors in embedded systems.
            </p>
          </div>
          {/* Add more courses here with their respective descriptions */}
        </div>
      </div>
    </div>
  );
};

export default CoursePage4;
