import React from 'react';
import './CoursePage.css';// Update the CSS file name
 // Update the image import

const CoursePage2 = () => {
  return (
    <div className="course-page-2"> {/* Update the class name here */}
      <div className="content">
        <h1>Course Information Semester:2</h1> {/* Update the heading here */}
        <div className="courses">
          {/* Update the content here */}
          <div className="courses">
          <div className="course">
            <h2>KAS201 Engineering Physics</h2>
            <p>This course continues the study of physics with an engineering focus. It covers topics related to optics, waves, and sound. Students will learn about the behavior of light, reflection, refraction, and the principles of wave motion. Engineering Physics provides a foundation for understanding physical phenomena relevant to engineering applications.</p>
          </div>
          <div className="course">
            <h2>KAS203 Engineering Mathematics-II</h2>
            <p>In this course, students delve deeper into mathematical concepts. It typically covers topics like vector calculus, differential equations, and complex numbers. Engineering Mathematics-II is essential for various engineering disciplines, providing mathematical tools for problem-solving.</p>
          </div>
          <div className="course">
            <h2>KEE201 Basic Electrical Engineering</h2>
            <p>Building upon the basics introduced in the first semester, this subject explores electrical engineering in more detail. Topics may include AC circuits, magnetic circuits, transformers, and three-phase systems. It further develops students' understanding of electrical systems and their applications.</p>
          </div>
          <div className="course">
            <h2>KCS201T Programming for Problem Solving</h2>
            <p>This subject focuses on programming and problem-solving skills. It may introduce students to a programming language (e.g., C++ or Python) and cover topics such as control structures, functions, data structures, and algorithm design. The emphasis is on developing computational thinking and problem-solving abilities.</p>
          </div>
          <div className="course">
            <h2>KMC201 AI For Engineering</h2>
            <p>Artificial Intelligence (AI) for Engineering introduces students to the principles of AI and its application in engineering. Topics may include machine learning, data mining, and AI techniques relevant to engineering problems. This subject provides an initial understanding of how AI can be harnessed in engineering applications.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage2;

