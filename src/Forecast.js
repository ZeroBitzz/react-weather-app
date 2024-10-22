import './Forecast.css'

function Forecast(){
    return (
        <div className='five-day-forecast'>
            <h3>5 Day Forecast</h3>
            <hr />
            <div className='day-forecast'>
                <span id='1-day-forecast-weather-condition' className='hide'>weather</span>
                <span id='1-day-forecast-temperature' className='hide'>temp</span>
                <img src={null} alt='sunny icon' className='hide'/>
            </div>

            <div className='day-forecast'>
                <span id='2-day-forecast-weather-condition' className='hide'>weather</span>
                <span id='2-day-forecast-temperature' className='hide'>temp</span>
                <img src={null} alt='sunny icon' className='hide'/>
            </div>

            <div className='day-forecast'>
                <span id='3-day-forecast-weather-condition' className='hide'>weather</span>
                <span id='3-day-forecast-temperature' className='hide'>temp</span>
                <img src={null} alt='sunny icon' className='hide'/>
            </div>

            <div className='day-forecast'>
                <span id='4-day-forecast-weather-condition' className='hide'>weather</span>
                <span id='4-day-forecast-temperature' className='hide'>temp</span>
                <img src={null} alt='sunny icon' className='hide'/>
            </div>

            <div className='day-forecast'>
                <span id='5-day-forecast-weather-condition' className='hide'>weather</span>
                <span id='5-day-forecast-temperature' className='hide'>temp</span>
                <img src={null} alt='sunny icon' className='hide'/>
            </div>
        </div>
    )
}

export default Forecast