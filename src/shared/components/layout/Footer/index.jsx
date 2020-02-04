/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.scss';
import NailLogo from '../../../images/nailLogo.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="foot col-md-12">
          <img src={NailLogo} width="130px" className="foot-logo" alt="logo" />
          <br />
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
          <span className="foot-copyright">Copyright &copy; 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
