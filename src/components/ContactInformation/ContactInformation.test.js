import React from 'react';
import { shallow } from 'enzyme';
import ContactInformation from './index';

describe('ContactSection', () => {
  it('should not have regressed', () => {
    const component = shallow(<ContactInformation />);

    expect(component).toMatchSnapshot();
  });
});
