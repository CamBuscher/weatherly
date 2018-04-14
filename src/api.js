const getTenDay = (data) => {
  let parsed = data.forecast.simpleforecast.forecastday.map(dayObj => {
    let dailyDetails = {
      day: dayObj.date.weekday_short,
      date: dayObj.date.monthname_short + ' ' + dayObj.date.day,
      high: dayObj.high.fahrenheit,
      low: dayObj.low.fahrenheit,
      icon: dayObj.icon_url,
      conditions: dayObj.conditions
    }
    return dailyDetails
  })
  return parsed
}

const getCurrentWeather = (data) => {
  let parsed = {
    location: data.current_observation.display_location.full,
    condition: data.forecast.simpleforecast.forecastday[0].conditions,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext,
    time: data.current_observation.local_time_rfc822.split(' ')[4],
    day: data.forecast.txt_forecast.forecastday[0].title,
    date: data.forecast.simpleforecast.forecastday[0].date.monthname + ' ' + data.forecast.simpleforecast.forecastday[0].date.day,
    temp: data.current_observation.temp_f,
    feelsLike: data.current_observation.feelslike_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    icon: data.forecast.txt_forecast.forecastday[0].icon_url
  }
  return parsed;
}

const getHourlyForecast = (data) => {
  let parsed = data.hourly_forecast.splice(0, 7).map(hour => {
    let hourlyDetails = {
      time: hour.FCTTIME.civil,
      image: hour.icon_url,
      temp: hour.temp.english,
      feelsLike: hour.feelslike.english,
      condition: hour.condition
    }
    return hourlyDetails;
  })
  return parsed;
}

const current = getCurrentWeather
const hourly = getHourlyForecast
const tenDay = getTenDay

export {
  getCurrentWeather, 
  getHourlyForecast,
  getTenDay,
  current, 
  hourly, 
  tenDay
}