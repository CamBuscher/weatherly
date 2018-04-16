import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import apiKey from '../apiKey'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
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


// })
