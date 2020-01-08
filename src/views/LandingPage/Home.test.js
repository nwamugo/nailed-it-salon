import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';

import Home from './index';
import Welcome from '../../components/Welcome';
import ScrollIndicator from '../../components/ScrollIndicator';
import Services from '../../components/Services';
import Header from '../../shared/components/layout/Header';
import Footer from '../../shared/components/layout/Footer';

describe('Home', () => {
  it('should not regress', () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });

  it('renders the Welcome without crashing', () => {
    const div = document.createElement('div');
    render(<Welcome />, div);
  });

  it('renders the ScrollIndicator without crashing', () => {
    const div = document.createElement('div');
    render(<ScrollIndicator />, div);
  });

  it('renders the ServicesSection without crashing', () => {
    const div = document.createElement('div');
    render(<Services />, div);
  });

  it('renders the Header without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
  });

  it('renders the Footer without crashing', () => {
    const div = document.createElement('div');
    render(<Footer />, div);
  });
});
