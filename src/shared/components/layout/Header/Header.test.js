import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('should not have regressed', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
