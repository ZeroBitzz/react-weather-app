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

function historySearch(index, event){
    event.preventDefault()
    console.log('searching from history')
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById(`history-span-${index}`).innerHTML
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
                <span id='history-span-1' onClick={() => historySearch(1)}>{localStorage.getItem('history0')}</span>
                <span id='history-span-2'>{localStorage.getItem('history1')}</span>
                <span id='history-span-3'>{localStorage.getItem('history2')}</span>
                <span id='history-span-4'>{localStorage.getItem('history3')}</span>
                <span id='history-span-5'>{localStorage.getItem('history4')}</span>
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