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
        <input 
          placeholder='Enter your city and state (ex: Denver, CO)'
          type='text'
          onChange={(event) => {
            this.setState({
              userLocationInput: event.target.value
            })
          }}
        />
        <button 
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