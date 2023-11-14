import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function ThirdTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 3</h1>

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
            <td>KCS 301</td>
            <td>Data Structure</td>
            <td>
              <ul>
                <li>Aaron M. Tenenbaum, Yedidyah Langsam and Moshe J. Augenstein, "Data Structures Using C and C++", PHI Learning Private Limited, Delhi, India</li>
                <li>Horowitz and Sahani, "Fundamentals of Data Structures", Galgotia Publications Pvt Ltd, Delhi, India.</li>
                <li>Lipschutz, "Data Structures" Schaum’s Outline Series, Tata McGraw-hill Education (India) Pvt. Ltd.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 302</td>
            <td>Computer Organization and Architecture</td>
            <td>
              <ul>
                <li>Computer System Architecture - M. Mano</li>
                <li>Carl Hamacher, Zvonko Vranesic, Safwat Zaky Computer Organization, McGraw-Hill, Fifth Edition, Reprint 2012</li>
                <li>John P. Hayes, Computer Architecture and Organization, Tata McGraw Hill, Third Edition, 1998.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 303</td>
            <td>Discrete Structures & Theory of Logic</td>
            <td>
              <ul>
                <li>Koshy, Discrete Structures, Elsevier Pub. 2008</li>
                <li>Kenneth H. Rosen, Discrete Mathematics and Its Applications, 6/e, McGraw-Hill, 2006.</li>
                <li>B. Kolman, R.C. Busby, and S.C. Ross, Discrete Mathematical Structures, 5/e, Prentice Hall, 2004.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KNC302H</td>
            <td>Computer System Security/Python Programming</td>
            <td>Reference books</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThirdTableComponent;
