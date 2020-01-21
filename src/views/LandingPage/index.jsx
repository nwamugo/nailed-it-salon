import React from 'react';

import Footer from '../../shared/components/layout/Footer/index';
import Welcome from '../../components/Welcome/index';
import ContactSection from '../../components/ContactSection';
import Services from '../../components/Services';

const Home = () => (
  <div>
    <Welcome />
    <div className="content">
      <Services />
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default Home;
