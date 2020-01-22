/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Welcome.scss';
import Header from '../../shared/components/layout/Header';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="welcome-pad">
        <Header />
        <div className="welcome-note">
          <span className="welcome-tag">Welcome</span>
          <br />
          <br />
          <br />
          <span className="sub-tag">
            To a Full Nailed It Spa Salon Experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
