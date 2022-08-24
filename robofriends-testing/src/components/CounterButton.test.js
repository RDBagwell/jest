import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

test('renders without crashing', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

test('corectly increments counter',()=>{
  const wrapper = shallow(<CounterButton />)
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({count: 2});
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({count: 3});
});

test('corectly increments counter',()=>{
  const wrapper = shallow(<CounterButton />)
  expect(wrapper.state()).toEqual({count: 0});
});