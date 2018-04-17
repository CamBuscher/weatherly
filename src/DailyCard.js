import React from 'react';
import './Styles/DailyCard.css'

const DailyCard = ({day}) => {
  return(
    <div className="DailyCard">
      <div>
        <h5>{day.day}, {day.date}</h5>
      </div>
      <img className="dailyWeatherIcon" src={day.icon} />
      <div>
        <h6 className="dailyHigh">{day.high}<span className="slash">&nbsp;/&nbsp;</span></h6>
        <h6 className="dailyLow">{day.low}</h6>
      </div>
    </div>
  )
}

export default DailyCard;