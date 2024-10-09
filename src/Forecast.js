import './Forecast.css'
import sunnyIcon from './Icons/sunny-icon.svg'

function Forecast(){
    return (
        <div className='five-day-forecast'>
            <h3>5 Day Forecast</h3>
            <div className='day-forecast'>
                <span>weather</span>
                <span>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span>weather</span>
                <span>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span>weather</span>
                <span>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span>weather</span>
                <span>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>

            <div className='day-forecast'>
                <span>weather</span>
                <span>temp</span>
                <img src={sunnyIcon} alt='sunny icon'/>
            </div>
        </div>
    )
}

export default Forecast