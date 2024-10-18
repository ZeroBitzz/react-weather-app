import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import weatherman from './weatherman/weatherman.svg'
import sunnyIcon from './Icons/sunny-icon.svg'
import { updateWeather } from './updateWeather'

function fetchApi(event){
  event.preventDefault()
  updateWeather()
}

function App () {
  return (
    <div className="App">
      <Forecast />
      <div>
        <div className='main-content'>
          <div>
            <h1>Brodericks Weather App</h1>
            <form onSubmit={fetchApi}>
              <input className='location-input' id='location-input' type='text' placeholder='Type Location Here'/>
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