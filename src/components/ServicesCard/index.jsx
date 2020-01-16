import React from 'react';

import ServicesDetail from '../ServicesDetail';

const ServicesCard = props => {
  return (
    <div className="services-bouquet">
      <ServicesDetail image={props.image} cardTitle={props.cardTitle} />
    </div>
  );
};

export default ServicesCard;
