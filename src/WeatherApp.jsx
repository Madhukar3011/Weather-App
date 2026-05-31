import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import ResponsiveAppBar from './ResponsiveAppBar'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Varanasi",
        feelsLike: 32.45,
        humidity:24,
        seaLavel:1004,
        temp:34.04,
        tempMax:34.05,
        tempMin:34.05,
        visibility:2800,
        weather: "haze",
        windSpeed: 3.09,
        
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
  return (
    <div style = {{textAlign: "center"}}>
        <ResponsiveAppBar/>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp