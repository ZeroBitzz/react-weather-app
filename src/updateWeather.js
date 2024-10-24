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


// function for getting the icons for each forecast element
function forecastIconPicker(index){
  // cloudy/partly cloudy icons
  if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('cloudy') || localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('overcast')){
    if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('partly')){
      document.getElementById(`forecast${index}-icon`).src = partlyCloudyIcon
    }else{
      document.getElementById(`forecast${index}-icon`).src = cloudyIcon
    }
  }
  // sunny/clear icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('sunny') || localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('clear')){
    document.getElementById(`forecast${index}-icon`).src = sunnyIcon
  }
  // snow icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('snow')){
    if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('thunder')){
      document.getElementById(`forecast${index}-icon`).src = snowThunderIcon
    }else{
      document.getElementById(`forecast${index}-icon`).src = snowIcon
    }
  }
  // rain/torrential rain/rain thunder icons
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('rain') || localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('drizzle')){
    if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('torrential')){
      document.getElementById(`forecast${index}-icon`).src = torrentialRainIcon
    }else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('thunder')){
      document.getElementById(`forecast${index}-icon`).src = rainThunderIcon
    }else{
      document.getElementById(`forecast${index}-icon`).src = rainIcon
    }
  }
  // mist icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('mist')){
    document.getElementById(`forecast${index}-icon`).src = mistIcon
  }
  // blizzard icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('blizzard')){
    document.getElementById(`forecast${index}-icon`).src = blizzardIcon
  }
  // thunder icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('thunder')){
    document.getElementById(`forecast${index}-icon`).src = thunderIcon
  }
  // fog icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('fog')){
    document.getElementById(`forecast${index}-icon`).src = fogIcon
  }
  // pellets icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('pellets')){
    document.getElementById(`forecast${index}-icon`).src = freezingPelletsIcon
  }
  // sleet icon
  else if(localStorage.getItem(`forecast${index}-weather-condition`).toLowerCase().includes('sleet')){
    document.getElementById(`forecast${index}-icon`).src = sleetIcon
  }
}

// function for setting the icons of the weather elements on the page based on fetched api data
function weatherIconPicker(){

  forecastIconPicker(1)
  forecastIconPicker(2)
  forecastIconPicker(3)
  forecastIconPicker(4)
  forecastIconPicker(5)
  // SETS MAIN WEATHER CONDITION ICON
  // cloudy/partly cloudy icons
  if(localStorage.getItem('weather-condition').toLowerCase().includes('cloudy') || localStorage.getItem('weather-condition').toLowerCase().includes('overcast')){
    if(localStorage.getItem('weather-condition').toLowerCase().includes('partly')){
      document.getElementById('weather-condition-icon').src = partlyCloudyIcon
    }else{
      document.getElementById('weather-condition-icon').src = cloudyIcon
    }
  }
  // sunny/clear icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('sunny') || localStorage.getItem('weather-condition').toLowerCase().includes('clear')){
    document.getElementById('weather-condition-icon').src = sunnyIcon
  }
  // snow icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('snow')){
    if(localStorage.getItem('weather-condition').toLowerCase().includes('thunder')){
      document.getElementById('weather-condition-icon').src = snowThunderIcon
    }else{
      document.getElementById('weather-condition-icon').src = snowIcon
    }
  }
  // rain/torrential rain/rain thunder icons
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('rain') || localStorage.getItem('weather-condition').toLowerCase().includes('drizzle')){
    if(localStorage.getItem('weather-condition').toLowerCase().includes('torrential')){
      document.getElementById('weather-condition-icon').src = torrentialRainIcon
    }else if(localStorage.getItem('weather-condition').toLowerCase().includes('thunder')){
      document.getElementById('weather-condition-icon').src = rainThunderIcon
    }else{
      document.getElementById('weather-condition-icon').src = rainIcon
    }
  }
  // mist icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('mist')){
    document.getElementById('weather-condition-icon').src = mistIcon
  }
  // blizzard icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('blizzard')){
    document.getElementById('weather-condition-icon').src = blizzardIcon
  }
  // thunder icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('thunder')){
    document.getElementById('weather-condition-icon').src = thunderIcon
  }
  // fog icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('fog')){
    document.getElementById('weather-condition-icon').src = fogIcon
  }
  // pellets icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('pellets')){
    document.getElementById('weather-condition-icon').src = freezingPelletsIcon
  }
  // sleet icon
  else if(localStorage.getItem('weather-condition').toLowerCase().includes('sleet')){
    document.getElementById('weather-condition-icon').src = sleetIcon
  }
}
 // changes the 5 day forecast and the main weather display
export const updateWeather = () => {
    let searchedLocation = document.getElementById('location-input').value // saves location user searched

    // checks for numbers in user search
    let containsNumbers = false
    for(let i=0; i<searchedLocation.length; i++){
        if(Number(searchedLocation[i])){
          searchedLocation = 'No numbers please'
          containsNumbers = true
        }
      }
      // if no numbers, program runs
      if(!containsNumbers){
        // if case for when the sun is searched
        if(searchedLocation.toLowerCase() === 'the sun' || searchedLocation.toLowerCase() === 'sun'){
          localStorage.setItem('temperature', 10000)
          document.getElementById('forecast-empty-h3').classList.add('hide') // hides text that says forecast is empty
          document.getElementById('forecast-hr').classList.remove('hide') // displays the hr in the forecast section
          document.getElementById('temperature').innerHTML = '10,000°F'
          document.getElementById('weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('weather-condition-icon').classList.remove('hide')
          document.getElementById('weather-condition-icon').src = sunnyIcon
          // 1 day forecast selectors
          document.getElementById('forecast1').classList.remove('hide')
          document.getElementById('1-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('1-day-forecast-temperature').innerHTML = `10,000°F`
          document.getElementById('forecast1-icon').src = sunnyIcon
        
          // 2 day forecast selectors
          document.getElementById('forecast2').classList.remove('hide')
          document.getElementById('2-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('2-day-forecast-temperature').innerHTML = `10,000°F`
          document.getElementById(`forecast2-icon`).src = sunnyIcon
        
          // 3 day forecast selectors
          document.getElementById('forecast3').classList.remove('hide')
          document.getElementById('3-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('3-day-forecast-temperature').innerHTML = `10,000°F`
          document.getElementById('forecast3-icon').src = sunnyIcon
        
          // 4 day forecast selectors
          document.getElementById('forecast4').classList.remove('hide')
          document.getElementById('4-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('4-day-forecast-temperature').innerHTML = `10,000°F`
          document.getElementById('forecast4-icon').src = sunnyIcon
        
          // 5 day forecast selectors
          document.getElementById('forecast5').classList.remove('hide')
          document.getElementById('5-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('5-day-forecast-temperature').innerHTML = `10,000°F`
          document.getElementById('forecast5-icon').src = sunnyIcon
          checkLocalStorageAndUpdate()
        }else{
          // gets api data and populates page based on what user inputs for the location
          let url = `https://api.weatherapi.com/v1/forecast.json?key=0a29a7e6a18c4c08ad3221540241510&q=${document.getElementById('location-input').value}&days=5&aqi=yes&alerts=no`
          const fetchData = async () => {
            await fetch(url)
            .then((resp) => resp.json())
            .then((responseData) => {
              try{
                document.getElementById('forecast-hr').classList.remove('hide') // displays the hr in the forecast section
                document.getElementById('forecast-empty-h3').classList.add('hide') // hides text that says forecast is empty
                localStorage.setItem('weather-condition', responseData.current.condition.text) // sets the weather condition for the icon to be updated on App.js 
                document.getElementById('temperature').innerHTML = `${responseData.current.temp_f}°F` // sets the temperature based off of the api fetch
                document.getElementById('weather-condition').innerHTML = responseData.current.condition.text // sets the weather condition based off the api fetch
                document.getElementById('weather-condition-icon').classList.remove('hide') // removes the class that hides the element initially
                
                // 1 day forecast selectors
                document.getElementById('forecast1').classList.remove('hide')
                document.getElementById('forecast1-date').innerHTML = responseData.forecast.forecastday[0].date
                document.getElementById('1-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[0].day.condition.text
                document.getElementById('1-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[0].day.maxtemp_f}°F`
                localStorage.setItem('forecast1-weather-condition', responseData.forecast.forecastday[0].day.condition.text)
              
                // 2 day forecast selectors
                document.getElementById('forecast2').classList.remove('hide')
                document.getElementById('forecast2-date').innerHTML = responseData.forecast.forecastday[1].date
                document.getElementById('2-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[1].day.condition.text
                document.getElementById('2-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[1].day.maxtemp_f}°F`
                localStorage.setItem(`forecast2-weather-condition`, responseData.forecast.forecastday[1].day.condition.text)
              
                // 3 day forecast selectors
                document.getElementById('forecast3').classList.remove('hide')
                document.getElementById('forecast3-date').innerHTML = responseData.forecast.forecastday[2].date
                document.getElementById('3-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[2].day.condition.text
                document.getElementById('3-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[2].day.maxtemp_f}°F`
                localStorage.setItem('forecast3-weather-condition', responseData.forecast.forecastday[2].day.condition.text)
              
                // 4 day forecast selectors
                document.getElementById('forecast4').classList.remove('hide')
                document.getElementById('forecast4-date').innerHTML = responseData.forecast.forecastday[3].date
                document.getElementById('4-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[3].day.condition.text
                document.getElementById('4-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[3].day.maxtemp_f}°F`
                localStorage.setItem('forecast4-weather-condition', responseData.forecast.forecastday[3].day.condition.text)
              
                // 5 day forecast selectors
                document.getElementById('forecast5').classList.remove('hide')
                document.getElementById('forecast5-date').innerHTML = responseData.forecast.forecastday[4].date
                document.getElementById('5-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[4].day.condition.text
                document.getElementById('5-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[4].day.maxtemp_f}°F`
                localStorage.setItem('forecast5-weather-condition', responseData.forecast.forecastday[4].day.condition.text)

                checkLocalStorageAndUpdate()
                weatherIconPicker()
                document.getElementById('weather-condition-icon').style.display = "center"
                localStorage.setItem('temperature', responseData.current.temp_f)
              }catch(err){
                console.log(err)
                document.getElementById('location-input').value = 'Invalid entry'
              }
            })
          }
          fetchData()
        }
    }else{
      document.getElementById('location-input').value = 'No numbers'
    }
}
  
// function for updating and logging the users search history using the local storage
function checkLocalStorageAndUpdate() {
  // update local storage
  // gets the local storage values and stores them for historyArrison in historyArr
  let historyArr = []
  let currentLocation = document.getElementById('location-input').value.toLowerCase()
  for(let i=0; i<5; i++){historyArr.push(localStorage.getItem(`history${i}`))}
  if(!historyArr.includes(currentLocation)){
    historyArr[4] = historyArr[3]
    historyArr[3] = historyArr[2]
    historyArr[2] = historyArr[1]
    historyArr[1] = historyArr[0]
    historyArr[0] = currentLocation
    localStorage.setItem('history0', currentLocation)
    localStorage.setItem('history1', historyArr[1])
    localStorage.setItem('history2', historyArr[2])
    localStorage.setItem('history3', historyArr[3])
    localStorage.setItem('history4', historyArr[4])
    document.getElementById('history-span-1').innerHTML = currentLocation
    let history2
    let history3
    let history4
    let history5
    if(localStorage.getItem('history1') === 'null'){history2 = ''}else{history2=localStorage.getItem('history1')}
    if(localStorage.getItem('history2') === 'null'){history3 = ''}else{history3=localStorage.getItem('history2')}
    if(localStorage.getItem('history3') === 'null'){history4 = ''}else{history4=localStorage.getItem('history3')}
    if(localStorage.getItem('history4') === 'null'){history5 = ''}else{history5=localStorage.getItem('history4')}
    document.getElementById('history-span-2').innerHTML = history2
    document.getElementById('history-span-3').innerHTML = history3
    document.getElementById('history-span-4').innerHTML = history4
    document.getElementById('history-span-5').innerHTML = history5
    for(let x=0; x<historyArr.length; x++){localStorage.setItem(`history${x}`, historyArr[x])}
  }
}