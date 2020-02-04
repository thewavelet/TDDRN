/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

// describe('Jest', () => {
//   it('is it working?', () => {
//     const a = 1;
//     expect(a + 1).toBe(2);
//   });
// });
//
// describe('Enzyme', () => {
//   it('is it working?', () => {
//     const text = 'some text';
//     const wrapper = shallow(<Text>{text}</Text>);
//     expect(wrapper.text()).toBe(text);
//   });
// });

describe('App', () => {
  const wrapper = shallow(<App />);
  it('is Text visible?', () => {
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  });

  it('is AddTodo visible?', () => {
    expect(wrapper.find('AddTodo')).toHaveLength(1);
  });

  it('is TodoList visible?', () => {
    expect(wrapper.find('TodoList')).toHaveLength(1);
  });
});
