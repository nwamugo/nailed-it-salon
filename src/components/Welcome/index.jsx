/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Welcome.scss';
import Header from '../../shared/components/layout/Header';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="Welcome">
      <div className="welcome-pad">
        <Header />
        <div className="welcome-note">
          <span className="welcome-tag">{t('welcome.header')}</span>
          <br />
          <br />
          <br />
          <span className="sub-tag">
          {t('welcome.subtitle')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
