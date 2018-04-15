import React from 'react';
import './Styles/ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <div>
      <h5 className='error'> Please enter only a ZIP code or a city and state formatted like "Denver, CO" </h5>
    </div>
  )
}

export default ErrorMessage;