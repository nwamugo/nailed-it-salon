import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import './ContactSection.scss';
import ContactInformation from '../ContactInformation';
import { successToast, dangerToast } from '../toast';

const ContactSection = () => {
  const { t } = useTranslation();
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
                  placeholder={t('contact.name')}
                  name="name"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputEmail"
                  placeholder={t('contact.email')}
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control contact-info"
                  id="inlineFormInputPhoneNumber"
                  placeholder={t('contact.phone')}
                  name="phone"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col">
                <textarea
                  className="form-control contact-info"
                  id="inlineFormInputeMessage"
                  rows="3"
                  placeholder={t('contact.message')}
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
                  {t('contact.submit')}
                </button>
              </div>
            </div>
          </form>
        </div>
        <h3 className="primary-thank-you-note">{t('contact.thanks')}</h3>
        <a
          href="https://www.google.co.ug/maps/dir//Al+Raed+Groove,+Al+Raed,+Riyadh+12355,+Saudi+Arabia/@24.7113703,46.6290252,17z/data=!4m16!1m6!3m5!1s0x3e2f1dd4130995df:0x746220d741c9e16b!2sAl+Raed+Groove!8m2!3d24.7113654!4d46.6312139!4m8!1m0!1m5!1m1!1s0x3e2f1dd4130995df:0x746220d741c9e16b!2m2!1d46.6312139!2d24.7113654!3e2"
          className="primary-direction-route"
          rel="noopener noreferrer"
        >
          {t('contact.directions')}
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
