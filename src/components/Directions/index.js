import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import Header from '../../shared/components/layout/Header';
import './Directions.scss';
import ContactInformation from '../ContactInformation';

class Direction extends Component {
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 24.7113703, lng: 46.6290252 }}
        >
          <Marker position={{ lat: 24.7113703, lng: 46.6290252 }} />
        </GoogleMap>
      ))
    );
    return (
      <div className="direction-box">
        <Header />
        <hr className="direction-container-border-line" />
        <div className="direction-container">
          <ContactInformation />
          <div className="map">
            <MapWithAMarker
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default Direction;
