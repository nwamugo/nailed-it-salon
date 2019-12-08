import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/LandingPage';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Routes;
