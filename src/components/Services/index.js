import React from 'react';
import { useTranslation } from 'react-i18next';

import ServicesCard from '../ServicesCard';
import Pedicure from '../../shared/images/pedicure.png';
import NailsExtension from '../../shared/images/nailsextension.png';
import Manicure from '../../shared/images/manicure.png';
import Addons from '../../shared/images/addons.png';

import './Services.scss';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="serving" id="serving">
      <div className="serving-board">
        <hr className="services-container-border-line" />
        <div className="services-container">
          <h2 className="primary-header">{t('header.services')}</h2>
          <div className="container-fluid">
            <div className="row">
              <ServicesCard
                className="col"
                image={Manicure}
                cardTitle={t('services.manicure')}
              />
              <ServicesCard
                className="col"
                image={Pedicure}
                cardTitle={t('services.pedicure')}
              />
            </div>
            <div className="row">
              <ServicesCard
                className="col"
                image={NailsExtension}
                cardTitle={t('services.extensions')}
              />
              <ServicesCard
                image={Addons}
                className="col"
                cardTitle={t('services.addons')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
