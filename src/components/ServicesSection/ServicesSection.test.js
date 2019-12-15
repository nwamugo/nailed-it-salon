import React from 'react';
import { shallow } from 'enzyme';
import ServicesSection from './index';

describe('ServicesSection', () => {
  it('should not have regressed', () => {
    const component = shallow(<ServicesSection />);

    expect(component).toMatchSnapshot();
  });
});
