/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="foot col-md-12">
          <i className="fab fa-facebook" />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <i className="fab fa-instagram" />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <i className="fab fa-twitter" />
          <br />
          <br />
          <span>Copyright &copy; 2019 by Nail Salon</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
