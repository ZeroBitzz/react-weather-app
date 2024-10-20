export const updateWeather = () => { // changes the 5 day forecast and the main weather display
    // event.preventDefault() // prevents page from refreshing on submission of form
    let searchedLocation = document.getElementById('location-input').value
    let containsNumbers = false
    for(let i=0; i<searchedLocation.length; i++){
        // uncomment to check for numbers in console
        // console.log(`${searchedLocation[i]} is a number? ${!isNaN(Number(searchedLocation[i]))}`)
        if(Number(searchedLocation[i])){
          searchedLocation = 'No numbers please'
          containsNumbers = true
        }
      }
      if(!containsNumbers){
        if(searchedLocation.toLowerCase() === 'the sun' || searchedLocation.toLowerCase() === 'sun'){
          document.getElementById('temperature').innerHTML = '10,000°F'
          document.getElementById('weather-condition').innerHTML = 'Extremely Hot'
          // 1 day forecast selectors
          document.getElementById('1-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('1-day-forecast-temperature').innerHTML = `10,000°F`
        
          // 2 day forecast selectors
          document.getElementById('2-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('2-day-forecast-temperature').innerHTML = `10,000°F`
        
          // 3 day forecast selectors
          document.getElementById('3-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('3-day-forecast-temperature').innerHTML = `10,000°F`
        
          // 4 day forecast selectors
          document.getElementById('4-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('4-day-forecast-temperature').innerHTML = `10,000°F`
        
          // 5 day forecast selectors
          document.getElementById('5-day-forecast-weather-condition').innerHTML = 'Extremely Hot'
          document.getElementById('5-day-forecast-temperature').innerHTML = `10,000°F`
          checkLocalStorageAndUpdate()
        }else{
          // gets api data and populates page based on what user inputs for the location
          let url = `https://api.weatherapi.com/v1/forecast.json?key=0a29a7e6a18c4c08ad3221540241510&q=${document.getElementById('location-input').value}&days=5&aqi=yes&alerts=no`
          const fetchData = async () => {
            await fetch(url)
            .then((resp) => resp.json())
            .then((responseData) => {
              try{
                console.log(responseData.current.temp_f)
                console.log(responseData.current.condition.text)
                document.getElementById('temperature').innerHTML = `${responseData.current.temp_f}°F`
                document.getElementById('weather-condition').innerHTML = responseData.current.condition.text
                
                // 1 day forecast selectors
                document.getElementById('1-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[0].day.condition.text
                document.getElementById('1-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[0].day.maxtemp_f}°F`
              
                // 2 day forecast selectors
                document.getElementById('2-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[1].day.condition.text
                document.getElementById('2-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[1].day.maxtemp_f}°F`
              
                // 3 day forecast selectors
                document.getElementById('3-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[2].day.condition.text
                document.getElementById('3-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[2].day.maxtemp_f}°F`
              
                // 4 day forecast selectors
                document.getElementById('4-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[3].day.condition.text
                document.getElementById('4-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[3].day.maxtemp_f}°F`
              
                // 5 day forecast selectors
                document.getElementById('5-day-forecast-weather-condition').innerHTML = responseData.forecast.forecastday[4].day.condition.text
                document.getElementById('5-day-forecast-temperature').innerHTML = `${responseData.forecast.forecastday[4].day.maxtemp_f}°F`
                checkLocalStorageAndUpdate()
              }catch(err){
                console.log(err)
                document.getElementById('location-input').value = 'Invalid entry'
              }
            })
          }
          fetchData()
        }
    }else{
      document.getElementById('location-input').value = 'No numbers please'
    }
  
  }
  
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
      let history1
      let history2
      let history3
      let history4
      let history5
      if(localStorage.getItem('history0') === 'null'){history1 = ''}else{history1=localStorage.getItem('history0')}
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