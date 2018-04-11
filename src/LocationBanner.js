import React from 'react'
import './Styles/LocationBanner.css'

const LocationBanner = ({today}) => {
  console.log(today.day)
  return (
    <div className="bannerContainer">
      <h1>{today.location}</h1>
      <ul>
        <li>{today.day}</li>
        <li>{today.day}</li>
        <li>{today.day}</li>
      </ul>
    </div>
  )
}

export default LocationBanner