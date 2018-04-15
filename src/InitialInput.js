import React, { Component } from 'react';
import './Styles/InitialInput.css'

export default class InitialInput extends Component {
  constructor(props) {
    super();

    this.state = {
      userLocationInput: null,
    }
  }

  render() {
    return( 
      <div>
        <form id="locationInput">
          <input 
            placeholder='Enter city and state, or ZIP code'
            type='text'
            onChange={(event) => {
              this.setState({
                userLocationInput: event.target.value
              })
            }}
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