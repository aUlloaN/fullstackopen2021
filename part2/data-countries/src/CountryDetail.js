import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryWeather from './CountryWeather';

const CountryDetail = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const endpointUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.name}`;
    let isMounted = true;

    axios
      .get(endpointUrl)
      .then(response => {
        if (isMounted) setCountryWeather(response.data);
      }, () => {
        if (isMounted) setCountryWeather(null)
      });
    
    return () => {
      isMounted = false;
    };
  }, [country]);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h3>Spoken languages:</h3>
      <ul>
        {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt={country.name} width="250" />
      {countryWeather && <CountryWeather weather={countryWeather} />}
    </div>
  );
};

export default CountryDetail;