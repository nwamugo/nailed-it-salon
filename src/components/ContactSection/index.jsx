import React from 'react';

import './ContactSection.scss';
import ContactInformation from '../ContactInformation';

const ContactSection = () => {
  return (
    <div className="contact-box" id="contactus">
      <hr className="contact-container-border-line" />
      <div className="contact-container">
        <ContactInformation />
        <div>
          <form>
            <div className="contact-row form-row align-items-center">
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputName"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputPhoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div className="col">
                <textarea
                  className="form-control contact-info"
                  id="inlineFormInputeMessage"
                  rows="3"
                  placeholder="Message"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary contact-info">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <h3 className="primary-thank-you-note">Thank You For Contacting Us</h3>
        <a
          href="/directions"
          className="primary-direction-route"
          rel="noopener noreferrer"
        >
          See Directions &gt;
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
