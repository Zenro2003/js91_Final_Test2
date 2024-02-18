import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';
import pageNotFoundImage from './assets/404.2.png';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Thêm state loading

  const searchWeather = async (city) => {
    try {
      setLoading(true); // Bắt đầu loading
      const apiKey = '847a75d1e3ff583a0ab0f1f5d45e4b75';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError('Không tìm thấy thông tin thời tiết cho thành phố này.');
    } finally {
      setLoading(false); // Kết thúc loading, dù có lỗi hay không
    }
  };
  
  return (
    <div>
      <header className="App-header">
        <main className="App-content">
          <div className="search-container">
            <SearchBar onSearch={searchWeather} />
            {loading ? ( // Hiển thị loading nếu đang loading
              <div className="loading-spinner">  <i className="fa fa-spinner fa-spin"></i></div>
            ) : (
              <div className="weather-container">
                {error ? ( // Kiểm tra nếu có lỗi
                  <div className="error-container">
                    <img src={pageNotFoundImage} alt="Page Not Found" style={{ width: "350px", height: "365px" , border:"none" }} />
                    <p>{error}</p>
                  </div>
                ) : (
                  weatherData && <Weather data={weatherData} />
                )}
              </div>
            )}
          </div>
        </main>
      </header>
    </div>
  );
};

export default App;
