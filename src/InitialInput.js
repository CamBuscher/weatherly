import React, { Component } from 'react';
import './Styles/InitialInput.css'
import Trie from 'autocomplete';
import data from './citiesList';

const citiesSuggestions = new Trie();
citiesSuggestions.populate(data.data)

export default class InitialInput extends Component {
  constructor(props) {
    super();

    this.state = {
      userLocationInput: ''
    }
  }

  updateLocation = (event) => {
    this.setState({ 
      userLocationInput: event.target.value
     })
  }

  render() {
    citiesSuggestions.suggest(this.state.userLocationInput)
    const suggestions = citiesSuggestions.suggestions.splice(0, 5).map((suggestion, index) => (<option key={index}>{suggestion}</option>))

    return( 
      <div>
        <form id="locationInput">
          <input 
            list="city"
            placeholder='Enter city and state, or ZIP code'
            type='text'
            onChange={this.updateLocation}
          />
          <datalist id="city">
            {suggestions}
          </datalist>
        </form>
        <button 
          form="locationInput"
          onClick={(e) => {
            e.preventDefault();
            this.props.getWeather(this.state.userLocationInput)
          }}>
          Find my weather
        </button>
      </div>
    )
  }

}