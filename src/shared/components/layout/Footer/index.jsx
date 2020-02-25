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
            href="https://www.snapchat.com/add/n_naileditsa"
            className="social"
            rel="noopener noreferrer"
          >
            <i className="fab fa-snapchat" />
          </a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <a
            href="https://www.instagram.com/20naileditsa/"
            className="social"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <br />
          <br />
          <span className="foot-copyright">Copyright &copy; 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
