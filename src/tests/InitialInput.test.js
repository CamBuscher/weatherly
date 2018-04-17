import React from 'react';
import ReactDOM from 'react-dom';
import InitialInput from '../InitialInput';
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
require('jest-localstorage-mock');

configure({ adapter: new Adapter() });

describe('InitialInput', () => {

  
  it('should be able to fetch data and update state', () => {
    const wrapper = mount(<InitialInput />)
    const input = wrapper.find('input')
    
    input.simulate('change', { target: { value: 'Denver, CO' } });
    expect(wrapper.state('userLocationInput')).toEqual('Denver, CO')
  })

  it('should be able to fetch data with a ZIP code', () => {
    const wrapper = mount(<InitialInput />)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: '80212' } });
    expect(wrapper.state('userLocationInput')).toEqual('80212')
  })

  it('should call getWeather with correct argument', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<InitialInput getWeather={ mockFunction } />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: '80212' } });

    const submitButton = wrapper.find('button')
    submitButton.simulate('click');

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith('80212');
  })

})