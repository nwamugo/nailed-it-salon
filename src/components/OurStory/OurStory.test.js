import React from 'react';
import { shallow } from 'enzyme';
import OurStory from './index';

describe('OurStory', () => {
  it('should not have regressed', () => {
    const component = shallow(<OurStory />);

    expect(component).toMatchSnapshot();
  });
});
