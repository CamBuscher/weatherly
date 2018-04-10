import React, { Component } from 'react';
import InitialInput from './InitialInput.js'
import logo from './logo.svg';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InitialInput />
      </div>
    );
  }
}

export default App;
