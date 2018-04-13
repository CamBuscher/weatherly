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
          placeholder='Enter your location (ex: Denver, CO)'
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
            this.props.updateLocation(this.state.userLocationInput)
          }}>
          Find my weather
        </button>
      </div>
    )
  }

}