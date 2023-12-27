import React, { useState } from 'react';
import './App.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar-container">
      <input
        id="cityInput"
        className="search-bar-input"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-bar-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;