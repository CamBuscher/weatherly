import React from 'react';
import ReactDOM from 'react-dom';
import InitialInput from '../InitialInput';
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('InitialInput', () => {

  
  it('should be able to fetch data and update state', () => {
    const wrapper = mount(<InitialInput />)
    
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Denver, CO' } });
    expect(wrapper.state('userLocationInput')).toEqual('Denver, CO')
  })

})