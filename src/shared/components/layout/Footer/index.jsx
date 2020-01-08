/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.scss';
import NailLogo from '../../../images/nailLogo.png';

const Footer = () => {
  return (
    <div className="Footer">
      {/* <div>
        <span>
          <img src={NailLogo} className="foot-logo" width="90px" />
        </span>
      </div> */}
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
          <span className="foot-copyright">
            Copyright &copy; 2020 by
            <img src={NailLogo} width="100px" className="foot-logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
