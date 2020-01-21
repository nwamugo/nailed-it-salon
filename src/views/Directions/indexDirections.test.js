import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';

import DirectionsPage from './index';
import Header from '../../shared/components/layout/Header';
import Footer from '../../shared/components/layout/Footer';
import Direction from '../../components/Directions';

describe('Directions', () => {
  it('should not regress', () => {
    const component = shallow(<DirectionsPage />);

    expect(component).toMatchSnapshot();
  });

  it('renders the Directions without crashing', () => {
    const div = document.createElement('div');
    render(<Direction />, div);
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
