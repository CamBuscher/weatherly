import React from 'react';
import ReactDOM from 'react-dom';
import WeatherPage from '../WeatherPage';
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import SevenHour from '../SevenHour';
import CurrentWeather from '../CurrentWeather';
require('jest-localstorage-mock');

configure({ adapter: new Adapter() });

describe('Weather Page', () => {
  
  it('should render a current weather component', () => {
    const currentWeather = {};
    const sevenHour = [].fill({}, 0, 6);
    const tenDay = [].fill({}, 0, 9);
    const mockGetWeather = jest.fn();
    const props = { current: currentWeather, getWeather: mockGetWeather, sevenHour: SevenHour, tenDay: tenDay }
    const mockPropFunc = jest.fn();

    const weatherPage = shallow(<WeatherPage  {...props}
      getWeather={mockGetWeather} />)
      
    expect(weatherPage.find('CurrentWeather').length).toEqual(1)
  })

  it('should render a seven hour component', () => {
    const currentWeather = {};
    const sevenHour = [].fill({}, 0, 6);
    const tenDay = [].fill({}, 0, 9);
    const mockGetWeather = jest.fn();
    const props = { current: currentWeather, getWeather: mockGetWeather, sevenHour: SevenHour, tenDay: tenDay }
    const mockPropFunc = jest.fn();

    const weatherPage = shallow(<WeatherPage  {...props}
      getWeather={mockGetWeather} />)

    expect(weatherPage.find('SevenHour').length).toEqual(1) 
  })

  it('should render a seven hour component', () => {
    const currentWeather = {};
    const sevenHour = [].fill({}, 0, 6);
    const tenDay = [].fill({}, 0, 9);
    const mockGetWeather = jest.fn();
    const props = { current: currentWeather, getWeather: mockGetWeather, sevenHour: SevenHour, tenDay: tenDay }
    const mockPropFunc = jest.fn();

    const weatherPage = shallow(<WeatherPage  {...props}
      getWeather={mockGetWeather} />)

    expect(weatherPage.find('SevenHour').length).toEqual(1)
  })

  it('should render a ten day component', () => {
    const currentWeather = {};
    const sevenHour = [].fill({}, 0, 6);
    const tenDay = [].fill({}, 0, 9);
    const mockGetWeather = jest.fn();
    const props = { current: currentWeather, getWeather: mockGetWeather, sevenHour: SevenHour, tenDay: tenDay }
    const mockPropFunc = jest.fn();

    const weatherPage = shallow(<WeatherPage  {...props}
      getWeather={mockGetWeather} />)

    expect(weatherPage.find('TenDay').length).toEqual(1)
  })

})