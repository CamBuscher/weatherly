import React, { Component } from 'react';
import InitialInput from './InitialInput.js'
import WelcomeText from './WelcomeText.js'
import WeatherPage from './WeatherPage.js'
import apiKey from './apiKey'
import { getCurrentWeather, getHourlyForecast, getTenDay } from './api.js'
import './Styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      now: null,
      sevenHour: null,
      dailyWeather: null
    }
  }

  getWeather = (location) => {
    const city = location.split(' ')[0]||location.split(', ')[0]
    const stateCode = location.split(' ')[1] || location.split(', ')[1]
    const root = `http://api.wunderground.com/api/${apiKey}//`;
    const url = `${root}conditions/geolookup/hourly/forecast10day/q/${stateCode}/${city}.json`;
    fetch(url).then(data => data.json()).then(parsedData => {
        this.setState({
          now: getCurrentWeather(parsedData),
          sevenHour: getHourlyForecast(parsedData),
          dailyWeather: getTenDay(parsedData)
      })
    })
  }

  landingPage() {
    
    return (
      <div>
        <WelcomeText />
        <InitialInput
          getWeather={this.getWeather} 
        />
      </div>
    )
  }

  weatherInfoPage(state) {
    return(
      <div>
        <WeatherPage 
          currentWeather={state.now}
          sevenHour={state.sevenHour}
          tenDay={state.dailyWeather}
          getWeather={this.getWeather}
        />
      </div>
    )
  }

  render() {
    const renderedComponent = this.state.now ? this.weatherInfoPage(this.state) 
                                             :this.landingPage()
    return (
      <div className="App">
        { renderedComponent }
      </div>
    );
  }
}

export default App;
