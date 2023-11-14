import React from 'react';
import './css/CardComponent.css'; // Import your CSS file

const CardComponent = () => {
  return (
    <div className="card">
   <div className="image-description1">
      <div className="image1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZeXJobnlM5WFfg-uiVHrw2yrSONFIr4ZWkGpdkN2YYBFP7t-DpnqXO6JIb0CFIXKfUg&usqp=CAU" alt='img' />
      </div>
      <div className="description1">
        <h1>Enhanced Learning</h1>
        <p>In the world of education, college books are invaluable companions for students, offering a wealth of knowledge within their pages. These books provide essential insights into various subjects and serve as trusted resources for both students and teachers alike. Authors' names gracing these volumes represent expertise and wisdom, guiding students in their quest for understanding, and aiding teachers in imparting knowledge effectively. The library becomes a hub where this knowledge and expertise converge, creating an environment where learning thrives</p>
      </div>
    </div>

    <div className="image-description2">
      <div >
        <img src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg" alt='img' />
      </div>
      <div className="description2">
        <h1>Student Resources</h1>
        <p >In today's fast-paced educational environment, students need quick and easy access to college books and relevant author information. A College Book and Author Information System ensures that students can effortlessly locate, borrow, or purchase the required textbooks and academic resources. This system not only streamlines the process of obtaining essential materials but also provides valuable insights into the authors behind these books. With such access, students can better understand the perspectives, expertise, and backgrounds of the authors, enriching their learning experience and encouraging a deeper connection with the subject matter.</p>
      </div>
    </div>


    <div className="image-description3">
      <div className="image3">
        <img src="https://img.freepik.com/premium-vector/young-students-academy-with-books-bag_864013-141.jpg?w=360" alt='img' />
      </div>
      <div className="description3">
        <h1>Teacher Resources</h1>
        <p>For educators, a College Book and Author Information System is an invaluable tool. Teachers rely on an array of textbooks and academic resources to create effective lesson plans and provide students with comprehensive knowledge. With this system, educators can swiftly find the most suitable resources for their courses and gain insights into the authors' qualifications and credibility. A well-organized collection of author information can assist teachers in choosing the most relevant materials to enhance their teaching methods. It also aids in fostering a deeper understanding of the subjects they teach, ultimately benefitting their students' academic growth and success.</p>
      </div>
    </div>
    </div>
  );
};

export default CardComponent;
