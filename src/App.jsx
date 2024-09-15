import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState(''); // Store the city name

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const geocodingResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      if (geocodingResponse.data.results.length === 0) {
        throw new Error('City not found. Please try again.');
      }

      const { latitude, longitude } = geocodingResponse.data.results[0];
      setCityName(geocodingResponse.data.results[0].name); 

      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
      );
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message || 'An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <WeatherDisplay weatherData={weatherData} cityName={cityName} /> 
    </div>
  );
}

export default App;