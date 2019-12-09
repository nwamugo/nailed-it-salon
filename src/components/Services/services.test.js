import React from 'react';
import { shallow } from 'enzyme';
import Services from './index';

describe('Services', () => {
  it('should render correctly', () => {
    const component = shallow(<Services />);

    expect(component).toMatchSnapshot();
  });
});
