import React, { Component } from 'react';
import './Styles/InitialInput.css'

export default class InitialInput extends Component {
  constructor() {
    super();

    this.state = {
      userLocationInput: null,
    }
  }

  render() {
    return( 
      <div>
        <input 
          placeholder='Enter your location'
          onChange={(event) => {
            this.setState({
              userLocationInput: event.target.value
            })
          }}
        />
      </div>
    )
  }

}