import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WeatherIcon from './WeatherIcon';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [searchQuery, setSearchQuery] = useState('London'); 
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`/api/weather/${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [searchQuery]);

  const toggleTemperatureUnit = () => {
    setIsFahrenheit((prevIsFahrenheit) => !prevIsFahrenheit);
  };

  const getTemperature = (temperature) => {
    const roundedTemperature = temperature.toFixed(1);
    return isFahrenheit ? `${roundedTemperature}°F` : `${parseFloat(((temperature - 32) * 5) / 9).toFixed(1)}°C`;
  };

  return (
    <div className="container">
      <SearchBar onSearch={setSearchQuery} />

      <div className="temperature-toggle">
        <button onClick={toggleTemperatureUnit}>
          {isFahrenheit ? 'Switch to Celsius' : 'Switch to Fahrenheit'}
        </button>
      </div>

      {Object.keys(weatherData).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="city-name">{weatherData.location.name}</h2>

          <div>
            <h3 style={{ textAlign: 'center' }}>Forecast</h3>
            {weatherData.forecast && weatherData.forecast.forecastday ? (
              <div className="forecast">
                {weatherData.forecast.forecastday.map((day, index) => (
                  <div key={index} className="forecast-day">
                    <div className="date-container">
                      <h3>{day.date}</h3>
                      <p>Temperature: {getTemperature(day.day.avgtemp_f)}</p>
                      <WeatherIcon code={day.day.condition.code} isDay={day.is_day} />
                      <p>Wind: {day.day.maxwind_mph} mph</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No forecast data available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;