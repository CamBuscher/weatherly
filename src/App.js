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

  updateLocation = (location) => {
    this.setState({ enteredLocation: location })
  }

  landingPage() {
    return (
      <div>
        <WelcomeText />
        <InitialInput
          updateLocation={this.updateLocation} 
        />
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
          this.weatherInfoPage()
          // this.state.enteredLocation ?
          // this.weatherInfoPage() :
          // this.landingPage()
        }
      </div>
    );
  }
}

export default App;
