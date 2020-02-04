import React from 'react';
import TodoItem, {styles} from '../src/TodoItem';
import {shallow} from 'enzyme';

describe('rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {},
    };
    wrapper = shallow(<TodoItem {...props} />);
  });

  it('should render a Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  describe('Uncompleted', () => {
    it('should have the default style', () => {
      expect(wrapper.prop('style')).toBe(styles.default);
    });
  });

  describe('Completed', () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<TodoItem {...props} />);
    });
    it('should have the completed style', () => {
      expect(wrapper.prop('style')).toBe(styles.completed);
    });
  });
});

describe('interaction', () => {
  let wrapper;
  let props;

  describe('Complete feature', () => {
    beforeEach(() => {
      props = {
        item: {text: 'first ToDo', completed: false},
        index: 0,
        onCompleted: jest.fn(),
        onDeleted: jest.fn(),
      };

      wrapper = shallow(<TodoItem {...props} />);

      wrapper
        .find('Button')
        .at(0)
        .prop('onPress')();
    });

    it('should call the onCompleted callback with index', () => {
      expect(props.onCompleted).toHaveBeenCalledTimes(1);
      expect(props.onCompleted).toHaveBeenCalledWith(props.index);
    });
  });

  describe('Delete feature', () => {
    beforeEach(() => {
      props = {
        item: {text: 'first ToDo', completed: false},
        index: 0,
        onCompleted: jest.fn(),
        onDeleted: jest.fn(),
      };

      wrapper = shallow(<TodoItem {...props} />);

      wrapper
        .find('Button')
        .at(1)
        .prop('onPress')();
    });

    it('should call the onDeleted callback with index', () => {
      expect(props.onDeleted).toHaveBeenCalledTimes(1);
      expect(props.onDeleted).toHaveBeenCalledWith(props.index);
    });
  });
});
