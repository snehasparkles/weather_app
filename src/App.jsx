import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Weather from './components/Weather.jsx';
import search_icon from './assets/search.png';
import demo from './assets/icons8-vote-100.png';

function App() {
  const apikey = "c8043a5f036277a1c999582b6ecb1d41";

  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(demo);
  const [temp, setTemp] = useState(0);
  const [states, setStates] = useState("Chennai");
  const [country, setCountry] = useState("IN");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async (e) => {
    if (e) e.preventDefault(); // Prevent form reload
    setLoading(true);
    setCityNotFound(false);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setTemp(data.main.temp);
        setStates(data.name);
        setCountry(data.sys.country);
        setLatitude(data.coord.lat);
        setLongitude(data.coord.lon);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      } else {
        setCityNotFound(true);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search(e);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form className="formelement" onSubmit={search}>
          <input
            type="text"
            id="search"
            placeholder="Search Location"
            className="searchtab"
            onChange={handleCity}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <button className="search-btn" type="submit">
            <img src={search_icon} className="search_logo" alt="Search" />
          </button>
        </form>

        {cityNotFound && <p className="error">City not found. Please try again.</p>}
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <Weather
            icon={icon}
            temp={temp}
            states={states}
            country={country}
            latitude={latitude}
            longitude={longitude}
            humidity={humidity}
            wind={wind}
          />
        )}

        <p className="copyright">
          Designed by <span className="developername">Sneha</span>
        </p>
      </div>
    </div>
  );
}

export default App;
