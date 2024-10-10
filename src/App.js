import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import weatherman from './weatherman/weatherman.svg'
import sunnyIcon from './Icons/sunny-icon.svg'
// import { useState, useEffect } from 'react'

// const locationData = 'https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=4a95e5cd2ec6b313c75d4a7c3b046b39'
// const weatherData = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=1062393e2af2bbfdd204aedcdda64ac0`

const updateWeather = (event) => {
  event.preventDefault()
  document.getElementById('weather-condition').innerHTML = 'sunny'
  document.getElementById('temperature').innerHTML = `40°F`

  // 1 day forecast selectors
  document.getElementById('1-day-forecast-weather-condition').innerHTML = 'sunny'
  document.getElementById('1-day-forecast-temperature').innerHTML = `45°F`

  // 2 day forecast selectors
  document.getElementById('2-day-forecast-weather-condition').innerHTML = 'cloudy'
  document.getElementById('2-day-forecast-temperature').innerHTML = `30°F`

  // 3 day forecast selectors
  document.getElementById('3-day-forecast-weather-condition').innerHTML = 'sunny'
  document.getElementById('3-day-forecast-temperature').innerHTML = `50°F`

  // 4 day forecast selectors
  document.getElementById('4-day-forecast-weather-condition').innerHTML = 'sunny'
  document.getElementById('4-day-forecast-temperature').innerHTML = `45°F`

  // 5 day forecast selectors
  document.getElementById('5-day-forecast-weather-condition').innerHTML = 'sunny'
  document.getElementById('5-day-forecast-temperature').innerHTML = `35°F`
}

function App() {

  // const [temp, setTemp] = useState(0)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(weatherData)
  //     console.log(result)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Forecast />
      <div>

        <div className='main-content'>
          <div>
            <h1>Brodericks Weather App</h1>
            <form onSubmit={updateWeather}>
              <input className='location-input' type='text' placeholder='Type Location Here'/>
            </form>
            <h2><span id='weather-condition'>weather condition</span> / <span id='temperature'>temp</span></h2>
            <img className='weather-icon' src={sunnyIcon} alt='weather icon'/>
          </div>

          <div>
            <img className='weatherman' src={weatherman} alt='weatherman'/>
          </div>
        </div>

      </div>
      <HistoryAndFacts />
    </div>
  )
}

export default App
