import React from 'react';
import axios from 'axios';

const WeatherDisplay = ({ weatherData, cityName }) => {
  if (!weatherData || !cityName) {
    return <span>Enter a city to get weather information.</span>;
  }

  const {
    // latitude,
    // longitude,
    current_weather: {
      temperature,
      windspeed,
      winddirection,
      weathercode
    },
    timezone,
    
  } = weatherData;

  // Map weathercode to a description (you'll need a more comprehensive mapping)
  const weatherDescription = weathercode === 0 ? 'Clear sky' : 'Cloudy';

  return (
    <div>
      <h2>{cityName}</h2> {/* Display city and country */}
      <div className='data-container'>
      <p>Temperature: <br /> {temperature}°C</p>
      <p>Windspeed: <br /> {windspeed} km/h</p>
      <p>Wind Direction: <br /> {winddirection}°</p>
      <p>Condition: <br /> {weatherDescription}</p>
      <p>Timezone: <br /> {timezone}</p>
      </div>
      
    </div>
  );
};

export default WeatherDisplay;