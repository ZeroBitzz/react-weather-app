import './History-And-Facts.css'
import { updateWeather } from './updateWeather'
import { weatherFacts } from './App'

// function for changing the temperature manually using the thermostat in the top right corner of the app 
const crankThermostat = (event) => {
    event.preventDefault() // preventDefault() is for preventing the page from refreshing 
    document.getElementById('temperature').innerHTML = document.getElementById('thermostat').value + '°F'
    if(document.getElementById('thermostat').value === ''){
        document.getElementById('temperature').innerHTML = `0°F`
    }
}

// function for populating location search and fetching api with previous searches
function historySearch1(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-1').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch2(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-2').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch3(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-3').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch4(event){
    event.preventDefault()
    console.log('searching from history')
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-4').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch5(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-5').innerHTML
        updateWeather()
        weatherFacts()
    }
}

function HistoryAndFacts(){
    // if history in local storage is null, it gives an empty value, otherwise populates with local storage data
    let history1, history2, history3, history4, history5
    if(localStorage.getItem('history0') === 'null'){history1 = ''}else{history1=localStorage.getItem('history0')}
    if(localStorage.getItem('history1') === 'null'){history2 = ''}else{history2=localStorage.getItem('history1')}
    if(localStorage.getItem('history2') === 'null'){history3 = ''}else{history3=localStorage.getItem('history2')}
    if(localStorage.getItem('history3') === 'null'){history4 = ''}else{history4=localStorage.getItem('history3')}
    if(localStorage.getItem('history4') === 'null'){history5 = ''}else{history5=localStorage.getItem('history4')}
    return (
        <div className='history-and-facts'>
            <div>
                <h2>Thermostat</h2>
                <form onSubmit={crankThermostat}>
                   <input id='thermostat' className='thermostat' type='number' placeholder='Custom Temp(F)?'/>
                </form>
            </div>

            <hr />

            <div className='history'>
                <h2 className='search-history-h2'>Search History</h2>
                <span id='history-span-1' onClick={historySearch1}>{history1}</span>
                <span id='history-span-2' onClick={historySearch2}>{history2}</span>
                <span id='history-span-3' onClick={historySearch3}>{history3}</span>
                <span id='history-span-4' onClick={historySearch4}>{history4}</span>
                <span id='history-span-5' onClick={historySearch5}>{history5}</span>
            </div>

            <hr />

            <div className='facts'>
                <h3>Fun Weather Fact</h3>
                <span id='weather-fact'>Hot weather sucks!</span>
            </div>
        </div>
    )
}

export default HistoryAndFacts