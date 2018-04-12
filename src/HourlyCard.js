import React from 'react';
import './Styles/HourlyCard.css';

const HourlyCard = ({hour}) => {
  console.log(hour)
  return (
    <div className="hourlyCard">
      <h3>{hour.time}</h3>
      <img src={hour.image} />
      <h3>{hour.temp}</h3>
    </div>
  )
}

export default HourlyCard;