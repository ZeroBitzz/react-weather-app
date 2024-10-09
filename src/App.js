import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import weatherman from './weatherman/weatherman.svg'
import sunnyIcon from './Icons/sunny-icon.svg'
// import { useState, useEffect } from 'react'

// const locationData = 'https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=4a95e5cd2ec6b313c75d4a7c3b046b39'
// const weatherData = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=1062393e2af2bbfdd204aedcdda64ac0`

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
            <form>
              <input className='location-input' type='text' placeholder='Type Location Here'/>
            </form>
            <h2>Weather Condition / Temp</h2>
            <img className='weather-icon' src={sunnyIcon}/>
          </div>

          <div>
            <img className='weatherman' src={weatherman}/>
          </div>
        </div>

      </div>
      <HistoryAndFacts />
    </div>
  )
}

export default App
