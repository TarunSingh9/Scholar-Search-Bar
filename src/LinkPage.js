import React from 'react';
import './linkage.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SeventhTableComponent from './semester/SeventhTableComponent';
import EighthTableComponent from './semester/EighthTableComponent';
import FifthTableComponent from './semester/FifthTableComponent';
import SixthTableComponent from './semester/SixthTableComponent';
import TableComponent from './semester/TableComponent';
import SecondTableComponent from './semester/SecondTableComponent';
import ThirdTableComponent from './semester/ThirdTableComponent';
import FourthTableComponent from './semester/FourthTableComponent';

const LinkPage = () => {
  return (
    <div className="link-page">
      <h1>Choose Your Year/Semsester</h1>
      <div className="link-list">
        <Router>
          <div className="link-items">
            <LinkItem
              icon="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
              title="Year 1 / Semester 1"
              to="/year-1/semester-1"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBibNPjaan226UxYCKurHE3ohb7C1WkteTAenGFz3h9h0s1ZsADVk_WJG1h_vxBfClWM&usqp=CAU"
              title="Year 1 / Semester 2"
              to="/year-1/semester-2"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcRnFarVy-Mq2gsRRLVgW6DZlvVgLlG-Rcy0Xyiml8U_rpuoCgkjmTalIeDV50ZQIqTo&usqp=CAU"
              title="Year 2 / Semester 3"
              to="/year-2/semester-3"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSp0v2XE_D_sZHESX97AQR1yGzwfUe8DveaxhMojBlKJb9u7f4Qnu_ev8x8So-59QFztg&usqp=CAU"
              title="Year 2 / Semester 4"
              to="/year-2/semester-4"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBwZowDhugyD5koqDGJVD5zlAqKFqcnj2yRQohVO6HKncUw8_hmxhIx5kg8ixFai5_RA&usqp=CAU"
              title="Year 2 / Semester 4"
              to="/year-2/semester-4"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7RIllJB0_GHNI-Vg5wCR4s2nNDxVt88_8wrd4yKWuvBQp4jP8mEG3aACVecVo5KEO1I&usqp=CAU"
              title="Year 3 / Semester 5"
              to="/year-3/semester-5"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18mv4BjchGRhAUxOsTELFHjv4swaQSWX8h1k7Blxu0UPcJKBHTgBsm-Knzt0lSn3xmfk&usqp=CAU"
              title="Year 3 / Semester 6"
              to="/year-3/semester-6"
            />
            <LinkItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVPYdCO9e6gX-sRyHNxhxYCDBeHge_DJt8Eq8apPcDgG9hgOoy8Y3F55xpQtp_ONIaY8&usqp=CAU"
              title="Year 4 / Semester 7"
              to="/year-4/semester-7"
            />
            <LinkItem
              icon="https://cdni.iconscout.com/illustration/premium/thumb/learning-6299587-5295191.png?f=webp"
              title="Year 4 / Semester 8"
              to="/year-4/semester-8"
            />
            {/* Add links for other semesters as needed */}
          </div>
          <Switch>
            <Route path="/year-1/semester-1" component={TableComponent} />
            <Route path="/year-1/semester-2" component={SecondTableComponent} />
            <Route path="/year-2/semester-3" component={ThirdTableComponent} />
            <Route path="/year-2/semester-4" component={FourthTableComponent} />
            <Route path="/year-3/semester-5" component={FifthTableComponent} />
            <Route path="/year-3/semester-6" component={SixthTableComponent} />
            <Route path="/year-4/semester-7" component={SeventhTableComponent} />
            <Route path="/year-4/semester-8" component={EighthTableComponent} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const LinkItem = ({ icon, title, to }) => {
  return (
    <Link to={to} className="link-item">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

export default LinkPage;
