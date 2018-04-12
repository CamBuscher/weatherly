import React from 'react';
import './Styles/SevenHour.css';
import HourlyCard from './HourlyCard.js';

const SevenHour = ({hourly}) => {
  const hourlyDisplay = hourly.map((hour, index) =>{
    return (<HourlyCard hour={hour} key={index}/>)
  })
  
  return (
    <div className="hourlyContainer">
      {hourlyDisplay}
    </div>
  )
}

export default SevenHour;