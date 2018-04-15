import React from 'react';
import './Styles/HourlyCard.css';

const HourlyCard = ({hour}) => {
  return (
    <div className="hourlyCard">
      <h3>{hour.time}</h3>
      <img src={hour.image} />
      <h3>{hour.temp} °f</h3>
      <div className="vl"></div>
    </div>
  )
}

export default HourlyCard;