import React, { useState } from 'react';
import './weather.css';

const Weather = ({ data }) => {
  const [loadingImage, setLoadingImage] = useState(true); // Thêm state loadingImage

  // Log dữ liệu vào console
  console.log("Data:", data);

  if (!data) {
    return null;
  }

  const weatherIcons = {
    Clear: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    Rain: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    Snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    Clouds: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    Haze: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    Smoke: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
  };

  return (
    <div className='weather-board'>
      <h2>{data.name}, {data.sys.country}</h2>
      <img
        className="weather-icon"
        src={loadingImage ? 'loading.gif' : (weatherIcons[data.weather[0].main] || 'not-found.png')}
        alt={data.weather[0].main}
        onLoad={() => setLoadingImage(false)} // Khi hình ảnh đã được tải xong
        onError={() => setLoadingImage(false)} // Khi hình ảnh không thể tải được
      />
      <p> {data.weather[0].description}</p>
      <p><i className="fa-solid fa-temperature-three-quarters"></i>   {data.main.temp}°C</p>
      <p><i className="fa-solid fa-droplet"></i> {data.main.humidity}%</p>
      <p><i className="wi wi-barometer"></i> {Math.round(data.main.pressure)} hPa</p>
      <p><i className="fa-solid fa-wind"></i> {Math.round(data.wind.speed)} km/h</p>
    </div>
  );
};

export default Weather;
