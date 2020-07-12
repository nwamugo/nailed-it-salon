import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import NailLogo from '../../../images/nail-logo.png';

function Header() {
  const { t } = useTranslation();

  const changeLanguage = code => e => {
    localStorage.setItem('language', code);
    window.location.reload();
  }

  return (
    <div className="Header">

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img
            className="nav-logo"
            src={NailLogo}
            width="200px"
            alt="side navigation bar"
          />
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
              <a className="nav-link active" href="/">
                {t('header.home')}
              </a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#serving">
                {t('header.services')}
              </a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#ourstory">
                {t('header.story')}
              </a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="https://naileditsa.simplespa.com/#">
                {t('header.appointment')}
              </a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#contactus">
                {t('header.contact')}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="dropdown translate">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {t('header.translate')}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={changeLanguage('en')}>{t('language.english')}</a>
          <a className="dropdown-item" href="#" onClick={changeLanguage('ar')}>{t('language.arabic')}</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
