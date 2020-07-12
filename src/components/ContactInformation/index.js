import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactInformation.scss';

const ContactInformation = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-information">
      <h2 className="primary-header">{t('header.contact')}</h2>
      <h3 className="primary-location">
        Ground Foor, Al Raed Groove, Ashirat Sudayr street, &nbsp;
        <br />
        Ar Raid, Riyadh 12355
      </h3>
      <h3 className="primary-info">
        support@naileditsa.com&nbsp;&nbsp;|&nbsp;&nbsp;+966 56 057 7709
      </h3>
      <h2 className="secondary-header">{t('header.contact')}</h2>
      <h3 className="primary-info">
        {t('contact.timemonday')}
        <br />
        {t('contact.timefriday')}
        <br />
        {t('contact.close')}
      </h3>
    </div>
  );
};

export default ContactInformation;
