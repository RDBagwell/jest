import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

test('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});