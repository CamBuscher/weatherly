import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import apiKey from '../apiKey'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
require('jest-localstorage-mock');
configure({ adapter: new Adapter() });

// describe('App testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders correct component when mounted', () => {
    const app = shallow(<App />)
    expect(app.find('WelcomeText').length).toEqual(1)
    expect(app.find('InitialInput').length).toEqual(1)
  });

  it('should have a default state', () => {
    const app = shallow(<App />)
    const appState = app.state()

    expect(appState.now).toEqual(null)
  })

  it('should render a weather page app has state', () => {
    const app = shallow(<App />)
    const appState = app.state()
    app.setState({now: {}, sevenHour: {}, dailyWeather: {}})

    expect(app.find('WeatherPage').length).toEqual(1)
  })

  it('should get weather and render a weather page', () => {
    const app = shallow(<App />)
    app.getWeather = jest.fn();
    const appState = app.state()
    
    app.instance().getWeather('denver, co')
    
    app.setState({ now: {}, sevenHour: {}, dailyWeather: {} })

    expect(app.find('WeatherPage').length).toEqual(1)
  })

  it('should load a weather page if there is something in local storage', () => {
    const app = shallow(<App />)
    app.getWeather = jest.fn();
    const appState = app.state()
    const localStorage = {'location': 'Denver, CO'}

    expect(app.instance().checkLocalStorage()).toEqual('denver, co')
  })

  


// })
