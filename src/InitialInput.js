import React, { Component } from 'react';
import './Styles/InitialInput.css'

export default class InitialInput extends Component {
  constructor() {
    super();

    this.state = {
      userLocationInput: null,
    }
  }

  render(props) {
    return( 
      <div>
        <input 
          placeholder='Enter your location'
          type='text'
          onChange={(event) => {
            this.setState({
              userLocationInput: event.target.value
            })
          }}
        />
        <button>Find my weather</button>
      </div>
    )
  }

}