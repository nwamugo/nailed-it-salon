import React from 'react';

import ServicesCard from '../ServicesCard';

import Pedicure from '../../shared/images/pedicure.png';
import NailsExtension from '../../shared/images/nailsextension.png';
import Manicure from '../../shared/images/manicure.png';
import Addons from '../../shared/images/add-ons.png';

import './ServicesSection.scss';

const ServicesSection = () => {
  return (
    <div>
      <hr className="services-container-border-line" />
      <div className="services-container">
        <h2 className="primary-header">Our Services</h2>
        <div className="row">
          <span className="col-1-of-2">
            <ServicesCard image={Manicure} cardTitle="Manicure" />
          </span>
          <span className="col-1-of-2">
            <ServicesCard image={Pedicure} cardTitle="Pedicure" />
          </span>
        </div>
        <div className="row">
          <span className="col-1-of-2">
            <ServicesCard image={NailsExtension} cardTitle="Nail Extensions" />
          </span>
          <span className="col-1-of-2">
            <ServicesCard image={Addons} cardTitle="Add Ons" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
