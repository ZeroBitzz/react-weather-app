import './History-And-Facts.css'

function HistoryAndFacts(){
    return (
        <div className='history-and-facts'>
            <div>
                <h2>Thermostat</h2>
                <form className='thermostat-form'>
                    <input className='thermostat' type='text' placeholder='Custom Temp(F)?'/>
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