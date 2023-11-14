import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function SixthTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 6</h1>

      <table className="textbooks-table">
        <thead>
          <tr>
            <th>SUBJECT CODE</th>
            <th>SUBJECT NAME (BOOKS)</th>
            <th>AUTHOR AND BOOK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KCS 601</td>
            <td>Software Engineering</td>
            <td>
              <ul>
                <li>RS Pressman, Software Engineering, A Practitioner's Approach, McGraw Hill</li>
                <li>Pankaj Jalote, Software Engineering, Wiley</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 602</td>
            <td>Web Technology</td>
            <td>
              <ul>
                <li>Burdman, Jessica, "Collaborative Web Development", Addison Wesley</li>
                <li>Xavier, C, "Web Technology and Design", New Age International</li>
                <li>Ivan Bayross, "HTML, DHTML, Java Script, Perl & CGI", BPB Publication</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 061</td>
            <td>Big Data</td>
            <td>
              <ul>
                <li>Michael Minelli, Michelle Chambers, and Ambiga Dhiraj, "Big Data, Big Analytics: Emerging Business Intelligence and Analytic Trends for Today's Businesses", Wiley</li>
                <li>Big-Data Black Book, DT Editorial Services, Wiley</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 061</td>
            <td>Computer Networks</td>
            <td>
              <ul>
                <li>Behrouz Forouzan, "Data Communication and Networking", McGraw Hill</li>
                <li>Andrew Tanenbaum, "Computer Networks", Prentice Hall</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 062</td>
            <td>Image Processing</td>
            <td>
              <ul>
                <li>Rafael C. Gonzalez, Richard E. Woods, Digital Image Processing, Pearson, Third Edition, 2010</li>
                <li>Anil K. Jain, Fundamentals of Digital Image Processing, Pearson, 2002.</li>
                <li>Kenneth R. Castleman, Digital Image Processing, Pearson, 2006.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 064</td>
            <td>Data Compression</td>
            <td>
              <ul>
                <li>Khalid Sayood, Introduction to Data Compression, Morgan Kaufmann Publishers</li>
                <li>Elements of Data Compression, Drozdek, Cengage Learning</li>
                <li>Introduction to Data Compression, Second Edition, Khalid Sayood, The Morgan Kaufmann Series</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SixthTableComponent;
