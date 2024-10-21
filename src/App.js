import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import weatherman from './weatherman/weatherman.svg'
import { updateWeather } from './updateWeather'

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
            <img className='weather-icon' id='weather-condition-icon' src={null} alt='weather icon'/>
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