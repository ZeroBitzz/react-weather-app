import './History-And-Facts.css'

const crankThermostat = (event) => {
    event.preventDefault()
    console.log(`the temperature is ${document.getElementById('thermostat').value}`)
    document.getElementById('temperature').innerHTML = document.getElementById('thermostat').value + '°F'
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
                <span>History1</span>
                <span>History2</span>
                <span>History3</span>
                <span>History4</span>
                <span>History5</span>
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