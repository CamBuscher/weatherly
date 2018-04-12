import React from 'react';
import DailyCard from './DailyCard.js';
import './Styles/TenDay.css';

const TenDay = ({tenDay}) => {
  const tenDayDisplay = tenDay.map((day, index) => {
    return (<DailyCard day={day} key={index} />)
  })

  return(
    <div className="tenDayContainer">
      {tenDayDisplay}
    </div>
  )
}

export default TenDay;