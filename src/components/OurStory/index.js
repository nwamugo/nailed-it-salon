import React from 'react';

import './OurStory.scss';

const OurStory = () => {
  return (
    <div className="ourstory-box" id="ourstory">
      <div className="ourstory-board row">
        <div className="our-story-image col" />
        <div className="col">
          <div className="story-container">
            <h2 className="primary-header">Our Story</h2>
            <p className="story">
              At Nailed It nail spa we are dedicated to providing the
              superlative nail experience, delivered in a high-end and relaxing
              environment.
              <br />
              <br />
              We are focused on providing an ideal customer service for our
              clients. We are passionate about our artistry in style and nail
              beauty. Most importantly, we are committed to the well-being of
              our clients and team members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
