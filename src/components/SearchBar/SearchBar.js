import React, { useState } from 'react';
import './searchbar.css'
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <input 
        type="text" 
        placeholder="Nhập tên thành phố" 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleSearch}>
      <i class="fa-solid fa-magnifying-glass-location" style={{ color: "#74C0FC" }}></i>
      </button>
    </div>
  );
};

export default SearchBar;