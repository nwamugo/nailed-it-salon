import React from 'react';

import Header from '../../shared/components/layout/Header';
import Footer from '../../shared/components/layout/Footer/index';
import Welcome from '../../components/Welcome/index';
import ScrollIndicator from '../../components/ScrollIndicator';
import Services from '../../components/Services';

const Home = () => (
  <div>
    <Header />
    <Welcome />
    <ScrollIndicator />
    <Services />
    <Footer />
  </div>
);

export default Home;
