import React from 'react';

import ServicesCard from '../ServicesCard';
import Pedicure from '../../shared/images/pedicure.png';
import NailsExtension from '../../shared/images/nailsextension.png';
import Manicure from '../../shared/images/manicure.png';
import Addons from '../../shared/images/add-ons.png';

import './Services.scss';

const Services = () => {
  return (
    <div className="serving" id="serving">
      <div className="serving-board">
        <hr className="services-container-border-line" />
        <div className="services-container">
          <h2 className="primary-header">Our Services</h2>
          <div className="container-fluid">
            <div className="row">
              <ServicesCard
                className="col"
                image={Manicure}
                cardTitle="Manicure"
              />
              <ServicesCard
                className="col"
                image={Pedicure}
                cardTitle="Pedicure"
              />
            </div>
            <div className="row">
              <ServicesCard
                className="col"
                image={NailsExtension}
                cardTitle="Nail Extensions"
              />
              <ServicesCard
                image={Addons}
                className="col"
                cardTitle="Add Ons"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
