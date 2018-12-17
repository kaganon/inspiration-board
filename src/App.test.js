import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

describe('<App />', () => {
  test('that it renders App with shallow rendering', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test('will match the last snapshot with deep rendering', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot;

    wrapper.unmount();
  });
  
});
