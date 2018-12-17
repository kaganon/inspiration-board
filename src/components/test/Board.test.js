import React from 'react';
import Board from '../Board';
import { mount, shallow } from 'enzyme';

const CARDS = [
  {
    text: 'cookie cookie nom nom',
    emoji: 'cookie'
  },
  {
    text: 'donut talk to me i am hungry',
    emoji: 'doughnut'
  }

];

describe('Board', () => {
  test('that it matches an existing snapshot', () => {

    // Arrange
    const cards = CARDS;
    const wrapper = shallow( <Board cards={cards} />);

    // Assert
    expect(wrapper).toMatchSnapshot();
  });

  test('renders without crashing even with no cards', () => {

    // Arrange
    const cards = [];
    const wrapper = shallow( <Board cards={cards} />);

    // Assert
    expect(wrapper).toMatchSnapshot();
  });

  test('successfully deep mounts', () => {

    // Arrange
    const wrapper = mount(<Board cards={CARDS} />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

});
