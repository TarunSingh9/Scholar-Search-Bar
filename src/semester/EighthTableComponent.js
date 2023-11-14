import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function EighthTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 8</h1>

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
            <td>KCS 077</td>
            <td>Distributed Systems</td>
            <td>
              <ul>
                <li>Singhal & Shivaratri, "Advanced Concepts in Operating Systems," McGraw Hill.</li>
                <li>Ramakrishna, Gehrke, "Database Management Systems," McGraw Hill.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 078</td>
            <td>Deep Learning</td>
            <td>
              <ul>
                <li>Cosma Rohilla Shalizi, "Advanced Data Analysis from an Elementary Point of View," 2015.</li>
                <li>Deng & Yu, "Deep Learning: Methods and Applications," Now Publishers, 2013.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 079</td>
            <td>Service-Oriented Architecture</td>
            <td>
              <ul>
                <li>Shankar Kambhampaty, "Service-Oriented Architecture & Microservices Architecture: For Enterprise, Cloud, Big Data, and Mobile," Wiley, 3rd Edition, 2018.</li>
                <li>Icon Group International, "The 2018-2023 World Outlook for Service-Oriented Architecture (SOA) Software and Services," ICON Group International, 1st Edition, 2017.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 710</td>
            <td>Quantum Computing</td>
            <td>
              <ul>
                <li>Michael A. Nielsen & Issac L. Chiang, "Quantum Computation and Quantum Information," Cambridge University Press, First South Asian edition, 2002.</li>
                <li>Eleanor G. Rieffel, Wolfgang H. Polak, "Quantum Computing - A Gentle Introduction" (Scientific and Engineering Computation), Paperback Import, Oct 2014.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 711</td>
            <td>Mobile Computing</td>
            <td>
              <ul>
                <li>J. Schiller, "Mobile Communications," Addison Wesley.</li>
                <li>A. Mehrotra, "GSM System Engineering."</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 712</td>
            <td>Internet of Things</td>
            <td>
              <ul>
                <li>Olivier Hersent, David Boswarthick, Omar Elloumi, "The Internet of Things: Key Applications and Protocols," Wiley.</li>
                <li>Jeeva Jose, "Internet of Things," Khanna Publishing House.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 713</td>
            <td>Cloud Computing</td>
            <td>
              <ul>
                <li>Kai Hwang, Geoffrey C. Fox, Jack G. Dongarra, "Distributed and Cloud Computing: From Parallel Processing to the Internet of Things," Morgan Kaufmann Publishers, 2012.</li>
                <li>Rittinghouse, John W., and James F. Ransome, "Cloud Computing: Implementation, Management, and Security," CRC Press, 2017.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EighthTableComponent;
