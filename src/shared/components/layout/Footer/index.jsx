/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="foot col-md-12">
          <a
            href="#"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <a
            href="#"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <a
            href="#"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <br />
          <br />
          <span>Copyright &copy; 2020 by Nail IT</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
