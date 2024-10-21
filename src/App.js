import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import weatherman from './weatherman/weatherman.svg'
import { updateWeather } from './updateWeather'
//icons
import sunnyIcon from './Icons/sunny-icon.svg'
import blizzardIcon from './Icons/blizzard-icon.svg'
import cloudyIcon from './Icons/cloudy-icon.svg'
import fogIcon from './Icons/fog-icon.svg'
import freezingPelletsIcon from './Icons/freezing-pellets-icon.svg'
import mistIcon from './Icons/mist-icon.svg'
import partlyCloudyIcon from './Icons/partly-cloudy-icon.svg'
import rainIcon from './Icons/rain-icon.svg'
import rainThunderIcon from './Icons/rain-thunder-icon.svg'
import sleetIcon from './Icons/sleet-icon.svg'
import snowIcon from './Icons/snow-icon.svg'
import snowThunderIcon from './Icons/snow-thunder-icon.svg'
import thunderIcon from './Icons/thunder-icon.svg'
import torrentialRainIcon from './Icons/tor-rain-icon.svg'
let weatherCondition

function weatherFacts(){
  const factsArr = [
    'Dirt mixed with wind can make dust storms called black blizzards!',
    'Heatwaves can make train tracks bend! Talk about things going off the rails!',
    'Lightning often follows a volcanic eruption! Dang nature you scary!',
    'Worms wriggle up from underneath the ground when a flood is coming! Early bird gets the water!',
    'Wildfires sometimes create tornadoes made of fire called fire whirls! Someone find that wizard!',
    'Waterspouts(spinning columns of air over water), can make sea creatures rain from the sky! Did someone say sushi?',
    'One billion tons of water falls every minute on earth! Someone get the earth a towel!',
    'Jupiters everlasting hurricane is larger than earth! Your medals in the mail Jupiter!',
    'Earth gets colder than mars!',
    'Lightning strikes 8.6 million times per day! Now that is a no quit attitude!',
    'The coldest place on Earth is -135.8 degrees Fahrenheit at the East Antarctic Plateau in Antarctica! Count me in!'
  ]
  let weatherFact = document.getElementById('weather-fact')
  let weatherFactPicker = Math.floor(Math.random() * factsArr.length)
  weatherFact.innerHTML = factsArr[weatherFactPicker]
}

function fetchApi(event){
  event.preventDefault()
  updateWeather()
  weatherFacts()
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
            <img className='weather-icon' id='weather-condition-icon' src={weatherCondition} alt='weather icon'/>
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