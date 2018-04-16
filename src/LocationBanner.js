import React, { Component } from 'react'
import './Styles/LocationBanner.css'
import Trie from 'autocomplete';
import data from './citiesList';

const citiesSuggestions = new Trie();
citiesSuggestions.populate(data.data)

class LocationBanner extends Component { 
  constructor (props) {
    super ();

    this.state = {
      userLocationInput: '',
    }
  }

  render() {
    citiesSuggestions.suggest(this.state.userLocationInput)
    const suggestions = citiesSuggestions.suggestions.splice(0, 5).map((suggestion, index) => (<option key={index}>{suggestion}</option>))

    return (
      <div className="bannerContainer">
        <div className="locationHeader">
          <h1>{this.props.current.location}</h1>
        </div>
          <div className="date">
            <ul>
              <li>{this.props.current.day}</li>
              <li>{this.props.current.date}</li>
              <li>{this.props.current.time}</li>
            </ul>
          </div>
        <div className="input-location">
          <form id="weatherInput">
            <input 
              list="city"
              className="weatherPageInput"
              placeholder="search location" 
              type="text"
              onChange={(event) => {
                this.setState({userLocationInput: event.target.value
                })
              }} 
            />
          <datalist id="city">
            {suggestions}
          </datalist>  
          </form>
          <button 
            className="weatherPageButton"
            type="submit"
            form="weatherInput"
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