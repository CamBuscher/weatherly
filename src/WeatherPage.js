import React, { Component } from 'react'
import LocationBanner from './LocationBanner.js'
import CurrentWeather from './CurrentWeather.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import './Styles/WeatherPage.css'

class WeatherPage extends Component {
  constructor() {
    super();

    this.state = {
      tacos: true
    }
  }

  render() {
    return( 
      <div className="backdrop">
        <LocationBanner 
          current={this.props.currentWeather}
          getWeather={this.props.getWeather} />
        <CurrentWeather current={this.props.currentWeather} />
        <SevenHour hourly={this.props.sevenHour} />
        <TenDay tenDay={this.props.tenDay} />
      </div>
    )
  }
}

export default WeatherPage