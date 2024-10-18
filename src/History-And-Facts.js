import './History-And-Facts.css'
import { updateWeather } from './updateWeather'

// function for changing the temperature manually using the thermostat in the top right corner of the app 
const crankThermostat = (event) => {
    event.preventDefault() // preventDefault() is for preventing the page from refreshing 
    console.log(`the temperature is ${document.getElementById('thermostat').value}`)
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
    }
}
function historySearch2(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-2').innerHTML
        updateWeather()
    }
}
function historySearch3(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-3').innerHTML
        updateWeather()
    }
}
function historySearch4(event){
    event.preventDefault()
    console.log('searching from history')
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-4').innerHTML
        updateWeather()
    }
}
function historySearch5(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-5').innerHTML
        updateWeather()
    }
}

function HistoryAndFacts(){
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
                <span id='history-span-1' onClick={historySearch1}>{localStorage.getItem('history0')}</span>
                <span id='history-span-2' onClick={historySearch2}>{localStorage.getItem('history1')}</span>
                <span id='history-span-3' onClick={historySearch3}>{localStorage.getItem('history2')}</span>
                <span id='history-span-4' onClick={historySearch4}>{localStorage.getItem('history3')}</span>
                <span id='history-span-5' onClick={historySearch5}>{localStorage.getItem('history4')}</span>
            </div>

            <hr />

            <div className='facts'>
                <h3>Fun Weather Fact</h3>
                <span>Hot weather sucks!</span>
            </div>
        </div>
    )
}

export default HistoryAndFacts