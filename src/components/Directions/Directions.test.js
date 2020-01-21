import React from 'react';
import { shallow } from 'enzyme';
import Direction from './index';

describe('ContactSection', () => {
  it('should not have regressed', () => {
    const component = shallow(<Direction />);

    expect(component).toMatchSnapshot();
  });
});
