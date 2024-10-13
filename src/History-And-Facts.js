import './History-And-Facts.css'

// function for changing the temperature manually using the thermostat in the top right corner of the app 
const crankThermostat = (event) => {
    event.preventDefault() // preventDefault() is for preventing the page from refreshing 
    console.log(`the temperature is ${document.getElementById('thermostat').value}`)
    document.getElementById('temperature').innerHTML = document.getElementById('thermostat').value + '°F'
    if(document.getElementById('thermostat').value === ''){
        document.getElementById('temperature').innerHTML = `0°F`
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
                <span id='history-span-1'>History1</span>
                <span id='history-span-2'>History2</span>
                <span id='history-span-3'>History3</span>
                <span id='history-span-4'>History4</span>
                <span id='history-span-5'>History5</span>
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