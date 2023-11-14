import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function SecondTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 2</h1>

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
            <td>KNC-101</td>
            <td>Soft skills-I</td>
            <td>
              <ul>
                <li>Technical Communication, (Second Ed.); O.U.P., Meenakshi Raman & S.Sharma, New Delhi, 2011</li>
                <li>Business Communication for Managers, Payal Mehra, Pearson, Delhi, 2012.</li>
                <li>Personality Development, Harold R. Wallace et. al, Cengage Learning India Pvt. Ltd; New Delhi 2006</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KEE-101T/KEE-201T</td>
            <td>Electrical Engineering</td>
            <td>
              <ul>
                <li>E. Hughes, “Electrical and Electronics Technology”, Pearson, 2010.</li>
                <li>L. S. Bobrow, “Fundamentals of Electrical Engineering”, Oxford University Press.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS-101T/KCS-201T</td>
            <td>Programming for Problem Solving</td>
            <td>C Programming for Beginners, The Complete Reference, Let Us C</td>
          </tr>
          <tr>
            <td>KMC 101/201</td>
            <td>Artificial Intelligence for Engineers</td>
            <td>
              <ul>
                <li>Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig, Prentice Hall</li>
                <li>Artificial Intelligence by Kevin Knight, Elaine Rich, Shivashankar B. Nair, Publisher: McGraw Hill</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KAS 203T</td>
            <td>Engineering Mathematics II</td>
            <td>
              <ul>
                <li>E. Kreyszig, Advance Engineering Mathematics, John Wiley & Sons, 2005.</li>
                <li>Peter V. O’Neil, Advance Engineering Mathematics, Thomson (Cengage) Learning, 2007.</li>
                <li>Maurice D. Weir, Joel Hass, Frank R.Giordano, Thomas, Calculus, Eleventh Edition, Pearson.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KNC-201</td>
            <td>Soft Skills-II</td>
            <td>
              <ul>
                <li>Technical Communication, (Second Ed.); O.U.P., Meenakshi Raman & S.Sharma, New Delhi, 2011</li>
                <li>Personality Development, Harold R. Wallace et. al, Cengage Learning India Pvt. Ltd; New Delhi, 2006</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SecondTableComponent;
