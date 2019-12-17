import React from 'react';
import { shallow } from 'enzyme';
import ServicesDetail from './index';

describe('ServicesDetail', () => {
  it('should not have regressed', () => {
    const component = shallow(<ServicesDetail cardTitle="TestingComponent" />);

    expect(component).toMatchSnapshot();
  });
});
