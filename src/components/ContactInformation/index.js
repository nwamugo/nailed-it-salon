import React from 'react';
import './ContactInformation.scss';

const ContactInformation = () => {
  return (
    <div className="contact-information">
      <h2 className="primary-header">Contact Us</h2>
      <h3 className="primary-location">
        Ground Foor, Al Raed Groove, Ashirat Sudayr street, &nbsp;
        <br />
        Ar Raid, Riyadh 12355
      </h3>
      <h3 className="primary-info">
        info@mysite.com&nbsp;&nbsp;|&nbsp;&nbsp;+966 56 057 7709
      </h3>
      <h2 className="secondary-header">Opening Hours</h2>
      <h3 className="primary-info">
        Mon - Thur &amp; Sat: 11am - 9pm
        <br />
        Friday: 2pm - 9pm
        <br />
        Sunday: Closed
      </h3>
    </div>
  );
};

export default ContactInformation;
