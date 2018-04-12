import React from 'react';
import './Styles/CurrentWeather.css'

const CurrentWeather = ({current}) => {
  return(
    <div className="currentWeather">
      <div className="leftColumn">
        <h3>Current temp:<p className="tempNumber"> {current.temp}°F</p></h3>
        <p className="summary">{current.summary}</p>
      </div>
      <img src={current.icon} />
      <div className="rightColumn"> 
        <h3>Today's high: <p className="tempNumber"> {current.high}</p></h3>
        <h3>Today's low: <p className="tempNumber">{current.low}</p></h3>
      </div>
    </div>
  )
}

export default CurrentWeather;