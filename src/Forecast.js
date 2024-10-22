import './Forecast.css'
import sunnyIcon from './Icons/sunny-icon.svg'

function Forecast(){
    return (
        <div className='five-day-forecast'>
            <h3>5 Day Forecast</h3>
            <hr />
            <div className='day-forecast'>
                <span id='1-day-forecast-weather-condition'>weather</span>
                <span id='1-day-forecast-temperature'>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span id='2-day-forecast-weather-condition'>weather</span>
                <span id='2-day-forecast-temperature'>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span id='3-day-forecast-weather-condition'>weather</span>
                <span id='3-day-forecast-temperature'>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span id='4-day-forecast-weather-condition'>weather</span>
                <span id='4-day-forecast-temperature'>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span id='5-day-forecast-weather-condition'>weather</span>
                <span id='5-day-forecast-temperature'>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>
        </div>
    )
}

export default Forecast