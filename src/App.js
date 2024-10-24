import './App.css'
import Forecast from './Forecast'
import HistoryAndFacts from './History-And-Facts'
import { updateWeather } from './updateWeather'
import weatherman from './weatherman/weatherman.riv'
import WeathermanComponent from './weatherman/WeathermanComponent'


// function that gives the user a random weather fact from the array
export function weatherFacts(){
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


function App () {


  // function that fetches the weather api and dynamically updates the page
  const fetchApi = (event) => {
    event.preventDefault() // prevents the page from refreshing when the form is submitted that this function is attached to
    updateWeather() // main api fetching function
    let temp = localStorage.getItem('temperature')
    console.log(`temp is ${temp}`)
    // let frozen = false
    // let melted = false
    // if(!melted){
    //   weatherFacts() // updates fun weather fact
    //   temp = localStorage.getItem('temperature')
    //   if(frozen){
    //     console.log('still frozen')
    //     if(temp > 80){
    //       weathermanStateSetter.value = 4
    //       console.log('unfrozen')
    //       frozen = false
    //       if(temp > 995){
    //         setTimeout(() => {
    //           weathermanStateSetter.value = 5
    //         }, 1000);
    //       }
    //     }
    //   }else{
    //     if(temp < 60){
    //       weathermanStateSetter.value = 1
    //       if(temp < 32){
    //         setTimeout(() => {
    //           weathermanStateSetter.value = 3
    //           console.log('frozen!')
    //           frozen = true
    //         }, 1000)
    //       }
    //     }else if(temp > 80){
    //       weathermanStateSetter.value = 2
    //       if(temp > 995){
    //         setTimeout(() => {
    //           weathermanStateSetter.value = 5
    //           melted = true
    //           document.getElementById('weather-fact').innerHTML = 'You killed the weather man! Its cool though just refresh the page and he should be fine.'
    //         }, 1000);
    //       }
    //     }
    //   }
    // }
  }


  return (
    <div className="App">
      <Forecast />
      <div>
        <div className='main-content'>
          <div>
            <h1>Brodericks Weather App</h1>
            <form onSubmit={fetchApi}>
              <input className='location-input' id='location-input' type='text' placeholder='Type City Here'/>
              <h2><span id='weather-condition'>weather condition</span> / <span id='temperature'>temp</span></h2>
              <img className='weather-icon hide' id='weather-condition-icon' src={null} alt='weather icon'/>
              <WeathermanComponent />
            </form>
          </div>
        </div>

      </div>
      <HistoryAndFacts />
    </div>
  )
}

export default App