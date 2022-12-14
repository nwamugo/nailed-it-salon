import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesDetail.scss';

const ServicesDetail = ({ image, cardTitle }) => {
  const { t } = useTranslation();
  const appendTitle = cardTitle.toLowerCase().replace(' ', '-');

  return (
    <div className="services-detail-container">
      <div className={`services-image--${appendTitle}`}>
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
        <a
          className={`btn btn-book-now btn-book-now--${appendTitle}`}
          href="https://naileditsa.simplespa.com/#"
          role="button"
        >
          <span className="button-text">{t('services.book')}</span>
        </a>
      </div>
    </div>
  );
};

export default ServicesDetail;
