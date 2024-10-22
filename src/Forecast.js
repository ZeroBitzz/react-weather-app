import './Forecast.css'

function Forecast(){
    return (
        <div className='five-day-forecast'>
            <h3>5 Day Forecast</h3>
            <hr />
                <div className='day-forecast hide' id='forecast1'>
                    <span id='1-day-forecast-weather-condition'>weather</span>
                    <span id='1-day-forecast-temperature'>temp</span>
                    <img src={null} id='forecast1-icon' alt='sunny icon'/>
                </div>

                <div className='day-forecast hide' id='forecast2'>
                    <span id='2-day-forecast-weather-condition'>weather</span>
                    <span id='2-day-forecast-temperature'>temp</span>
                    <img src={null} id='forecast2-icon' alt='sunny icon'/>
                </div>

                <div className='day-forecast hide' id='forecast3'>
                    <span id='3-day-forecast-weather-condition'>weather</span>
                    <span id='3-day-forecast-temperature'>temp</span>
                    <img src={null} id='forecast3-icon' alt='sunny icon'/>
                </div>

                <div className='day-forecast hide' id='forecast4'>
                    <span id='4-day-forecast-weather-condition'>weather</span>
                    <span id='4-day-forecast-temperature'>temp</span>
                    <img src={null} id='forecast4-icon' alt='sunny icon'/>
                </div>

                <div className='day-forecast hide' id='forecast5'>
                    <span id='5-day-forecast-weather-condition'>weather</span>
                    <span id='5-day-forecast-temperature'>temp</span>
                    <img src={null} id='forecast5-icon' alt='sunny icon'/>
                </div>
        </div>
    )
}

export default Forecast