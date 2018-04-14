import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import InitialInput from '../InitialInput.js'
import WelcomeText from '../WelcomeText.js'
import WeatherPage from '../WeatherPage.js'
import apiKey from '../apiKey'
import { getCurrentWeather, getHourlyForecast, getTenDay } from '../api.js'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correct component when mounted', () => {
  const app = shallow(<App />)
  expect(app.find('WelcomeText').length).toEqual(1)
  expect(app.find('InitialInput').length).toEqual(1)
});
