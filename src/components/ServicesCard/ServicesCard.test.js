import React from 'react';
import { shallow } from 'enzyme';
import ServicesCard from './index';

describe('ServicesCard', () => {
  it('should not have regressed', () => {
    const component = shallow(<ServicesCard />);

    expect(component).toMatchSnapshot();
  });
});
