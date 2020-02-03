import React from 'react';

import Footer from '../../shared/components/layout/Footer/index';
import Welcome from '../../components/Welcome/index';
import ContactSection from '../../components/ContactSection';
import Services from '../../components/Services';
import OurStory from '../../components/OurStory';

const Home = () => (
  <div>
    <Welcome />
    <div className="content">
      <Services />
      <OurStory />
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default Home;
