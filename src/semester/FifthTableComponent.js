import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function FifthTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 5</h1>

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
            <td>KCS 501</td>
            <td>Database Management System</td>
            <td>Korth, Sibertz, Sudarshan</td>
          </tr>
          <tr>
            <td>KCS 502</td>
            <td>Compiler Design</td>
            <td>Aho, Sethi & Ullman, K. Muneeswaran</td>
          </tr>
          <tr>
            <td>KCS 503</td>
            <td>Design and Analysis of Algorithms</td>
            <td>Thomas H. Cormen, Charles E. Leiserson</td>
          </tr>
          <tr>
            <td>KCS 502</td>
            <td>Web Designing</td>
            <td>Steven M. Schafer, "HTML, XHTML, CSS Bible, 5ed", Wiley India</td>
          </tr>
          <tr>
            <td>KCS 058</td>
            <td>Human Computer Interface</td>
            <td>Alan Dix, Janet Finlay, Gregory Abowed</td>
          </tr>
          <tr>
            <td>KNC 501/502</td>
            <td>Constitution of India, Law, and Engineering</td>
            <td>Reference books</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FifthTableComponent;
