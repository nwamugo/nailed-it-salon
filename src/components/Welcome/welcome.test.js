import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './index';

describe('Welcome', () => {
  it('should render correctly', () => {
    const component = shallow(<Welcome />);

    expect(component).toMatchSnapshot();
  });
});
