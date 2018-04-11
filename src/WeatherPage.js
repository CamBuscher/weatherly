import React, { Component } from 'react'
import LocationBanner from './LocationBanner.js'
import { today, hourly, tenDay } from './api'
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
        <LocationBanner 
          today={today}
        />
      </div>
    )
  }
}

export default WeatherPage