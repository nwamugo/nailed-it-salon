import React from 'react';
import './ScrollIndicator.scss';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="indicator-item">
        Home
        <span className="dot" />
      </div>
      <div className="indicator-item">
        Our Services
        <span className="dot" />
      </div>
      <div className="indicator-item">
        Our Story
        <span className="dot" />
      </div>
      <div className="indicator-item">
        Make an appointment
        <span className="dot" />
      </div>
      <div className="indicator-item">
        Contact
        <span className="dot" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
