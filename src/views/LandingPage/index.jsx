import React from 'react';

import Header from '../../shared/components/layout/Header';
import Footer from '../../shared/components/layout/Footer/index';
import Welcome from '../../components/Welcome/index';
import ScrollIndicator from '../../components/ScrollIndicator';
import ServicesSection from '../../components/ServicesSection';
import ContactSection from '../../components/ContactSection';

const Home = () => (
  <div>
    <Header />
    <Welcome />
    <ScrollIndicator />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Home;
