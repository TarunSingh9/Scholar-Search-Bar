import React, { useState } from 'react';
import './css/ResponsiveCard.css'; 
import CoursePage1 from './semInfo/CoursePage1';
import CoursePage2 from './semInfo/CoursePage2';
import CoursePage3 from './semInfo/CoursePage3';
import CoursePage4 from './semInfo/CoursePage4';
import CoursePage5 from './semInfo/CoursePage5';
import CoursePage6 from './semInfo/CoursePage6';
import CoursePage7 from './semInfo/CoursePage7';
import CoursePage8 from './semInfo/CoursePage8';
import InformationComponent from './InformationComponent';

const ResponsiveCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 0: 
        return <InformationComponent />
      case 1:
        return <CoursePage1 />;
      case 2:
        return <CoursePage2 />;
      case 3:
        return <CoursePage3 />;
      case 4:
        return <CoursePage4 />;
      case 5:
        return <CoursePage5 />;
      case 6:
        return <CoursePage6 />;
      case 7:
        return <CoursePage7 />;
      case 8:
        return <CoursePage8 />;
      default:
        return <InformationComponent />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="responsive-card-container">
      <h1>Responsive Card</h1>
      <div className="cards-container">
        {renderPage()}
      </div>
      <div className="buttons-container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            Page {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCard;
