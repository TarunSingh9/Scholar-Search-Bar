import React from 'react';
import './TableComponent.css'; // Ensure you import your CSS file

function FourthTableComponent() {
  return (
    <div className="table-container">
      <h1>Engineering Textbooks Infromation Semster : 4</h1>

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
            <td>KCS 401</td>
            <td>Operating System</td>
            <td>
              <ul>
                <li>Silberschatz, Galvin and Gagne, "Operating Systems Concepts", Wiley</li>
                <li>Sibsankar Halder and Alex A Aravind, "Operating Systems", Pearson Education</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 402</td>
            <td>Theory of Automata and Formal Language</td>
            <td>
              <ul>
                <li>Introduction to Automata theory, Languages and Computation, J.E.Hopcraft, R.Motwani, and Ullman. 2nd edition, Pearson Education Asia</li>
                <li>Introduction to languages and the theory of computation, J Martin, 3rd Edition, Tata McGraw Hill</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>KCS 403</td>
            <td>Microprocessor</td>
            <td>
              <ul>
                <li>Gaonkar, Ramesh S, "Microprocessor Architecture, Programming and Applications with 8085", Penram International Publishing.</li>
                <li>Ray A K, Bhurchandi K M, "Advanced Microprocessors and Peripherals", TMH</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FourthTableComponent;
