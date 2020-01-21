import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import Header from '../../shared/components/layout/Header';
import './Directions.scss';

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
          <h2 className="primary-header">Directions</h2>
          <h3 className="primary-location">
            Ground Foor, Al Raed Groove, Ashirat Sudayr street, &nbsp;
            <br />
            Ar Raid, Riyadh 12355
          </h3>
          <h3 className="primary-info">
            info@mysite.com&nbsp;&nbsp;|&nbsp;&nbsp;+966 56 057 7709
          </h3>
          <h2 className="secondary-header">Opening Hours</h2>
          <h3 className="primary-info">
            Mon - Thur &amp; Sat: 11am - 9pm
            <br />
            Friday: 2pm - 9pm
            <br />
            Sunday: Closed
          </h3>
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
