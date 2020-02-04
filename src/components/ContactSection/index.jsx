import React, { useState } from 'react';
import axios from 'axios';

import './ContactSection.scss';
import ContactInformation from '../ContactInformation';
import { successToast, dangerToast } from '../toast';

const ContactSection = () => {
  const [inputValue, setInputValue] = useState({});

  const onClickSendMessage = event => {
    event.preventDefault();
    return axios
      .post(`${process.env.REACT_APP_HOST}/contact`, {
        name: inputValue.name,
        phone: inputValue.phone,
        email: inputValue.email,
        message: inputValue.message
      })
      .then(response => {
        console.log(response);
        successToast(response.data.message);
      })
      .catch(error => {
        console.log(error.response);
        dangerToast(error.response.data.Error.message);
      });
  };

  const onChangeHandler = event => {
    event.preventDefault();
    setInputValue({
      ...inputValue,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

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
                  name="name"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputEmail"
                  placeholder="Email"
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputPhoneNumber"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <textarea
                  className="form-control contact-info"
                  id="inlineFormInputeMessage"
                  rows="3"
                  placeholder="Message"
                  name="message"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary contact-info"
                  onClick={onClickSendMessage}
                >
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
