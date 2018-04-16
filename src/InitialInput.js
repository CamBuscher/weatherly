import React, { Component } from 'react';
import './Styles/InitialInput.css'
import Trie from 'autocomplete';
import data from './citiesList';

const citiesSuggestions = new Trie();
// citiesSuggestions.insert('M')
// debugger
citiesSuggestions.populate(data.data)
console.log(citiesSuggestions)

export default class InitialInput extends Component {
  constructor(props) {
    super();

    this.state = {
      userLocationInput: null,
    }
  }

  updateLocation = (event) => {
    this.setState({ 
      userLocationInput: event.target.value
     })
  }

  render() {
    return( 
      <div>
        <form id="locationInput">
          <input 
            placeholder='Enter city and state, or ZIP code'
            type='text'
            onChange={this.updateLocation}
          />
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