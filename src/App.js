import React, { Component } from 'react';
import InitialInput from './InitialInput.js'
import WelcomeText from './WelcomeText.js'
import ErrorMessage from './ErrorMessage.js'
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
      dailyWeather: null,
      invalidLocation: false
    }
  }

  saveLocation = (location) => {
    const stringifyLocation = JSON.stringify(location)
    localStorage.setItem('location', stringifyLocation);
  }

  checkLocalStorage = () => {
    if (localStorage.location){
      const retrievedLocation = localStorage.getItem('location')
      const parsedLocation = JSON.parse(retrievedLocation)
      return parsedLocation
    } else {
      return false
    }
  }

  getWeather = (location) => {
    this.saveLocation(location)
    const city = location.split(', ')[0]
    const stateCode = location.split(', ')[1]
    const root = `http://api.wunderground.com/api/${apiKey}//`;
    const url = `${root}conditions/geolookup/hourly/forecast10day/q/${stateCode}/${city}.json`;
    fetch(url).then(data => data.json()).then(parsedData => {
        this.setState({
          now: getCurrentWeather(parsedData),
          sevenHour: getHourlyForecast(parsedData),
          dailyWeather: getTenDay(parsedData),
          invalidLocation: false
      })
    }).catch(err => {
      this.setState({
        invalidLocation: true
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

  errorPage() {
    return (
      <div>
        <WelcomeText />
        <InitialInput
          getWeather={this.getWeather}
        />
        <ErrorMessage />
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

  componentDidMount() {
    if (this.checkLocalStorage()) {
      this.getWeather(this.checkLocalStorage())
    }
  }

  render() {
    const renderedComponent = this.state.now ? this.weatherInfoPage(this.state)
                                             : this.landingPage()
    
    const validSearch = this.state.invalidLocation ? this.errorPage() : renderedComponent
    
    return (
      <div className="App">
        { validSearch }
      </div>
    );
  }
}

export default App;
