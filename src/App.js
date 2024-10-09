import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
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
      <h1>Brodericks Weather App</h1>
      <HistoryAndFacts />
    </div>
  )
}

export default App
