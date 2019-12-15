import React from 'react';
import { shallow } from 'enzyme';
import ScrollIndicator from './index';

describe('ScrollIndicator', () => {
  it('should not have regressed', () => {
    const component = shallow(<ScrollIndicator />);

    expect(component).toMatchSnapshot();
  });
});
