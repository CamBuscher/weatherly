import React, { Component } from 'react';
import InitialInput from './InitialInput.js'
import WelcomeText from './WelcomeText.js'
import WeatherPage from './WeatherPage.js'
import './Styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      enteredLocation: null
    }
  }

  landingPage() {
    return (
      <div>
        <WelcomeText />
        <InitialInput />
      </div>
    )
  }

  weatherInfoPage() {
    return(
      <div>
        <WeatherPage />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {
          this.landingPage()
          // this.weatherInfoPage()
        }
      </div>
    );
  }
}

export default App;
