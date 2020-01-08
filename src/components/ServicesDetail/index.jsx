import React from 'react';

import './ServicesDetail.scss';

const ServicesDetail = ({ image, cardTitle }) => {
  const appendTitle = cardTitle.toLowerCase().replace(' ', '-');

  return (
    <div className="services-detail-container">
      <div className={`hidden-xs services-image--${appendTitle}`}>
        <img
          data-test="logoIMG"
          src={image}
          alt="Logo"
          className="ticketImage"
        />
      </div>
      <div
        className={`services-description services-description--${appendTitle}`}
      >
        <hr
          className={`services-name-border-top services-name-border-top--${appendTitle}`}
        />
        <h2 className={`services-name services-name--${appendTitle}`}>
          {cardTitle}
        </h2>

        <button
          className={`btn-lg btn-book-now btn-book-now--${appendTitle}`}
          type="submit"
        >
          <span className="button-text">Book Now &gt;</span>
        </button>
      </div>
    </div>
  );
};

export default ServicesDetail;
