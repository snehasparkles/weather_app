import humiicon from '../assets/weather.png'
import winds from '../assets/wind.png'

function Weather(props){
    
    return(
    <>

    <div className="imagediv">
        <img src={props.icon} alt="" className='img-icon'/>
        
        <div className="temp">
            {props.temp}C
        </div>
        <div className="stateelement">
            {props.states}
        </div>
        <div className="country">
            {props.country}
        </div>
        </div>
        {/* <div className="latlong">
        <div className="lat">
            <p className='laty'>latitude</p>
        <p className='val'>{props.lattitude}</p>
        </div>
        <div className="log">
            <p className='longy'>longitude</p>
        <p className='val'>{props.longitude}</p>
        </div>
        </div> */}
        <div className="humiwind">
        <div className="humiele">
            
            <div className="humidity">
            <img src={humiicon} className='humicon'/>
                <p className='val'>{props.humidity}%</p>
                <p className='hum'>Humidity</p>
            </div>
        </div>
        <div className="windele">
            
            <div className="wind">
            <img src={winds} className='windicon'/>
            <p className='val'>{props.wind}Km/h</p>
            <p className='win'>Wind Speed</p>
            </div>
        </div>
        </div>
    </>
    ) 
}
export default Weather