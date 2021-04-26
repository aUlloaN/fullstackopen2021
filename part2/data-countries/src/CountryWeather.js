import React from 'react';

const CountryWeather = ({ weather }) => {
  return (
    <div>
      <h3>Weather in {weather.location.name}</h3>
      <p>temperature: {weather.current.temperature} Celcius</p>
      <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />
      <p>wind: {weather.current.wind_speed} kilometers/hour | direction: {weather.current.wind_dir}</p>
    </div>
  );
};

export default CountryWeather;
