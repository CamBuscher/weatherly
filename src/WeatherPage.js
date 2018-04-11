import React, { Component } from 'react'
import LocationBanner from './LocationBanner.js'
import CurrentWeather from './CurrentWeather.js'
import { current, hourly, tenDay } from './api'
import './Styles/WeatherPage.css'

class WeatherPage extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return( 
      <div className="backdrop">
        <LocationBanner current={current} />
        <CurrentWeather current={current} />
      </div>
    )
  }
}

export default WeatherPage