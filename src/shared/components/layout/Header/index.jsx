import React from 'react';
import './Header.scss';
import NailLogo from '../../../images/nail-logo.png';

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img className="nav-logo" src={NailLogo} width="200px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item u-margin-left">
              <a
                className={`nav-link ${
                  window.location.pathname.indexOf('directions') > -1
                    ? ''
                    : 'active'
                }`}
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a
                className="nav-link"
                href={
                  window.location.pathname.indexOf('directions') > -1
                    ? '/#serving'
                    : '#serving'
                }
              >
                OUR SERVICES
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                OUR STORY
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a
                className="nav-link"
                href="https://nailsaloninvisibles.simplespa.com/#"
              >
                MAKE AN APPOINTMENT
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a
                className={`nav-link ${
                  window.location.pathname.indexOf('directions') > -1
                    ? 'active'
                    : ''
                }`}
                href={
                  window.location.pathname.indexOf('directions') > -1
                    ? '/#contactus'
                    : '#contactus'
                }
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
