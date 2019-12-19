import React from 'react';
import { shallow } from 'enzyme';
import ContactSection from './index';

describe('ContactSection', () => {
  it('should not have regressed', () => {
    const component = shallow(<ContactSection />);

    expect(component).toMatchSnapshot();
  });
});
