import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './index';

describe('Welcome', () => {
  it('should not have regressed', () => {
    const component = shallow(<Welcome />);

    expect(component).toMatchSnapshot();
  });
});
