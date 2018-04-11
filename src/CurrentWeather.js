import React from 'react';
import './Styles/CurrentWeather.css'

const CurrentWeather = ({current}) => {
  return(
    <div className="currentWeather">
      <div className="leftColumn">
        <h3>Current temp: {current.temp}</h3>
        <p className="summary">{current.summary}</p>
      </div>
      <img src="http://icons-ak.wxug.com/i/c/k/clear.gif" />
      <div className="rightColumn"> 
        <p>Today's high: {current.high}</p>
        <p>Today's low: {current.low}</p>
      </div>
    </div>
  )
}

export default CurrentWeather;