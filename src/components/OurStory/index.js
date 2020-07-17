import React from 'react';
import { useTranslation } from 'react-i18next';
import './OurStory.scss';

const OurStory = () => {
  const { t } = useTranslation();
  return (
    <div className="ourstory-box" id="ourstory">
      <div className="ourstory-board row">
        <div className="our-story-image col" />
        <div className="col">
          <div className="story-container">
            <h2 className="primary-header">{t('header.story')}</h2>
            <p className="story">
              {t('story.part1')}&nbsp;{t('story.part2')}
              <br />
              <br />
              {t('story.part3')}&nbsp;{t('story.part4')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
