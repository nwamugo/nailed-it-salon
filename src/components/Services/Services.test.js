import React from 'react';
import { shallow } from 'enzyme';
import Services from './index';

describe('Services', () => {
  it('should not have regressed', () => {
    const component = shallow(<Services />);

    expect(component).toMatchSnapshot();
  });
});
