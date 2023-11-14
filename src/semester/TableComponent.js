import React from 'react';
import './TableComponent.css'; // Create a CSS file for styling
//import bookIcon from './book.svg'; // Import your SVG image

function TableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 1</h1>

      <table className="textbooks-table">
        <thead>
          <tr>
            <th>SUBJECT CODE</th>
            <th>SUBJECT NAME</th>
            <th>AUTHOR AND BOOK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KAS-101T/KAS-201T</td>
            <td>Engineering Physics</td>
            <td>
              <ul>
                <li>Engineering Physics: Theory and Practical - Katiyar and Pandey (Wiley India)</li>
                <li>Applied Physics for Engineers - Neeraj Mehta (PHI Learning, New)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KAS-102T/KAS-202T</td>
            <td>Engineering Chemistry</td>
            <td>
              <ul>
                <li>University Chemistry By B.H. Mahan</li>
                <li>University Chemistry By C.N.R. Rao</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KAS103T</td>
            <td>Engineering Mathematics I</td>
            <td>
              <ul>
                <li>B. V. Ramana, Higher Engineering Mathematics, McGraw-Hill Publishing Company Ltd., 2008.</li>
                <li>B. S. Grewal, Higher Engineering Mathematics, Khanna Publisher, 2005.</li>
                <li>R K. Jain & S R K. Iyenger, Advance Engineering Mathematics, Narosa Publishing House 2002.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KMC102/202</td>
            <td>Emerging Technology for Engineering</td>
            <td>IOT, Cloud computing, Deep learning, Digital Manufacturing, Future Trends</td>
          </tr>
          <tr>
            <td>KEC-101T/KEC-201</td>
            <td>Emerging domain in electronics Engineering</td>
            <td>
              <ul>
                <li>Robert L. Boylestand / Louis Nashelsky “Electronic Devices and Circuit Theory”, Pearson Education.</li>
                <li>H S Kalsi, “Electronic Instrumentation”, McGraw Publication.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* //<img src={bookIcon} alt="Book Icon" className="book-icon" /> */}
    </div>
  );
}

export default TableComponent;
