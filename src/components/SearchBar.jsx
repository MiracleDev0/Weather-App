import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
        const fetchSuggestions = async () => {
          if (city.length < 2) {
            setSuggestions([]);
            return;
          }
    
          try {
            const response = await axios.get(
              `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=3` // Limit to 3 suggestions
            );
    
            // Filter out suggestions that exactly match the input
            const filteredSuggestions = response.data.results
              .filter(result => result.name.toLowerCase() !== city.toLowerCase())
              .map(result => result.name);
    
            setSuggestions(filteredSuggestions);
          } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
          }
        };
    
        fetchSuggestions();
      }, [city, onSearch]);
  
    const handleInputChange = (event) => {
      setCity(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(city);
        setCity(''); 
        setSuggestions([]);
    };
  
    const handleSuggestionClick = (suggestion) => {
      setCity(suggestion);
      setSuggestions([]); // Clear suggestions after clicking
      onSearch(suggestion); // Trigger search immediately
    };
  
    return (
      <div className='search-container'>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter city" 
        value={city} 
        onChange={handleInputChange} 
      />
      <button type="submit">Search</button>
        </form>
  
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>   
  
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>   
  
    );
  };

export default SearchBar;