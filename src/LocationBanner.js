import React, { Component } from 'react'
import './Styles/LocationBanner.css'

class LocationBanner extends Component { 
  constructor (props) {
    super ();

    this.state = {
      userLocationInput: null,
    }
  }

  render() {
    return (
      <div className="bannerContainer">
        <div className="locationHeader">
          <h1>{this.props.current.location}</h1>
          <ul>
            <li>{this.props.current.day}</li>
            <li>{this.props.current.date}</li>
            <li>{this.props.current.time}</li>
          </ul>
        </div>
        <div className="input-location">
          <input 
            placeholder="search location" 
            type="text"
            onChange={(event) => {
              this.setState({userLocationInput: event.target.value
              })
            }} 
          />
          <button 
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              this.props.getWeather(this.state.userLocationInput)
            }}>
            find my weather
            </button>
        </div>
      </div>
    )
  }
}

export default LocationBanner