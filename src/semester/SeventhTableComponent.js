import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function SeventhTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 7</h1>

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
            <td>KCS 071</td>
            <td>Artificial Intelligence</td>
            <td>
              <ul>
                <li>S. Russell and P. Norvig, "Artificial Intelligence: A Modern Approach," Prentice Hall, Third Edition, 2009.</li>
                <li>I. Bratko, "Prolog: Programming for Artificial Intelligence," Fourth edition, Addison-Wesley Educational Publishers Inc., 2011.</li>
                <li>M. Tim Jones, "Artificial Intelligence: A Systems Approach(Computer Science)," Jones and Bartlett Publishers, Inc., First Edition, 2008.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 072</td>
            <td>Natural Language Processing</td>
            <td>
              <ul>
                <li>Daniel Jurafsky, James H. Martin, "Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech," Pearson Publication, 2014.</li>
                <li>Steven Bird, Ewan Klein and Edward Loper, "Natural Language Processing with Python," First Edition, O'Reilly Media, 2009.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 073</td>
            <td>High-Performance Computing</td>
            <td>
              <ul>
                <li>Laurence T. Yang, Minyi Guo – "High-Performance Computing Paradigm and Infrastructure," John Wiley.</li>
                <li>Ahmar Abbas, "Grid Computing: Practical Guide to Technology & Applications," Firewall Media, 2004.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 074</td>
            <td>Cryptography & Network Security</td>
            <td>
              <ul>
                <li>William Stallings, "Cryptography and Network Security: Principles and Practice," Pearson Education.</li>
                <li>Behrouz A. Forouzan, "Cryptography and Network Security," McGraw Hill.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 075</td>
            <td>Design & Development of Applications</td>
            <td>
              <ul>
                <li>Charlie Collins, Michael Galpin and Matthias Kappler, "Android in Practice," DreamTech, 2012.</li>
                <li>Anubhav Pradhan, Anil V Despande, "Composing Mobile Apps, Learn, Explore, Apply."</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 076</td>
            <td>Software Testing</td>
            <td>
              <ul>
                <li>Yogesh Singh, "Software Testing," Cambridge University Press, New York, 2012.</li>
                <li>K. K. Aggarwal & Yogesh Singh, "Software Engineering," New Age International Publishers, New Delhi, 2003.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeventhTableComponent;
