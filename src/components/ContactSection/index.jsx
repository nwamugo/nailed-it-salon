import React from 'react';

import './ContactSection.scss';

const ContactSection = () => {
  return (
    <div className="contact-box">
      <hr className="contact-container-border-line" />
      <div className="contact-container">
        <h2 className="primary-header">Contact Us</h2>
        <h3 className="primary-location">
          Ground Foor, Al Raed Groove, Ashirat Sudayr street, Ar Raid, Riyadh
          12355
        </h3>
        <h3 className="primary-info">
          info@mysite.com&nbsp;&nbsp;|&nbsp;&nbsp;Tel: 123-456-7890
        </h3>
        <h2 className="secondary-header">Opening Hours</h2>
        <h3 className="primary-info">
          Mon - Fri: 7am - 10pm&nbsp;&nbsp;|&nbsp;&nbsp;Saturday: 8am -
          10pm&nbsp;&nbsp;|&nbsp;&nbsp;Sunday: 8am - 11pm
        </h3>
        <div>
          <form>
            <input className="input-info" placeholder="Name" type="text" />
            <textarea className="input-message" placeholder="Message" />
            <br />
            <input className="input-info" placeholder="Email" type="email" />
            <br />
            <input className="input-info" placeholder="Phone" type="text" />
            <input className="contact-submit" value="Submit" type="submit" />
          </form>
        </div>
        <h3 className="primary-thank-you-note">Thank You For Contacting Us</h3>
        <a
          href="#"
          className="primary-direction-route"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Directions &gt;
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
