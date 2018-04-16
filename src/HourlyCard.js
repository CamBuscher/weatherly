import React from 'react';
import './Styles/HourlyCard.css';

const HourlyCard = ({hour}) => {
  return (
    <div className="hourlyCard">
      <h3>{hour.time}</h3>
      <img className="hourlyImage" src={hour.image} />
      <h3 className="hourlyTemp">{hour.temp} °f</h3>
      <div className="vl"></div>
    </div>
  )
}

export default HourlyCard;