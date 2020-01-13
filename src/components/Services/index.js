import React from 'react';

import ServicesCard from '../ServicesCard';
import Pedicure from '../../shared/images/pedicure.png';
import NailsExtension from '../../shared/images/nailsextension.png';
import Manicure from '../../shared/images/manicure.png';
import Addons from '../../shared/images/add-ons.png';

import './Services.scss';

const Services = () => {
  const relocateAppointmentPage = () => {
    // location.href = 'https://nailsaloninvisibles.simplespa.com/#';
  };
  return (
    <div>
      <hr className="services-container-border-line" />
      <div className="services-container">
        <h2 className="primary-header">Our Services</h2>
        <div className="container-fluid">
          <div className="row">
            <ServicesCard
              className="col"
              image={Manicure}
              cardTitle="Manicure"
              appointment={relocateAppointmentPage()}
            />
            <ServicesCard
              className="col"
              image={Pedicure}
              cardTitle="Pedicure"
              appointment={relocateAppointmentPage()}
            />
          </div>
          <div className="row">
            <ServicesCard
              className="col"
              image={NailsExtension}
              cardTitle="Nail Extensions"
              appointment={relocateAppointmentPage()}
            />
            <ServicesCard
              image={Addons}
              className="col"
              cardTitle="Add Ons"
              appointment={relocateAppointmentPage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
