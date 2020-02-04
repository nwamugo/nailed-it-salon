import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from '../views/LandingPage';
import DirectionsPage from '../views/Directions';

const Routes = () => (
  <BrowserRouter>
    <div>
      <ToastContainer style={{ fontSize: '2rem' }} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/directions" component={DirectionsPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Routes;
