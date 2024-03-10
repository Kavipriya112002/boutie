import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '016b49b5972a045df9ad39adc19abf82'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeather

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tamilnadu&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1><center>CHECK WEATHER DETAIL THROUGH OUT BOUTIQUE</center></h1>
      <h2><center>Weather in {weatherData.name}</center></h2>
      <p><center>Temperature: {weatherData.main.temp}°C</center></p>
      <p><center>Weather: {weatherData.weather[0].description}</center></p>
      <p><center>Wind speed: {weatherData.wind.speed} m/s</center></p>
    </div>
  );
};

export default Api;
