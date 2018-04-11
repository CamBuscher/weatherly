import React from 'react'
import './Styles/LocationBanner.css'

const LocationBanner = ({current}) => {
  console.log(current.day)
  return (
    <div className="bannerContainer">
      <h1>{current.location}</h1>
      <ul>
        <li>{current.day}</li>
        <li>{current.day}</li>
        <li>{current.day}</li>
      </ul>
    </div>
  )
}

export default LocationBanner