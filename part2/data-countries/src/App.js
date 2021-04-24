import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ textFilter, setTextFilter ] = useState('');
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag')
      .then(response => {
        const data = response.data;
        setCountries(data);
      });
  }, [textFilter]);
  
  const handleTextFilterChange = (event) => {
    setTextFilter(event.target.value);
  };

  const countriesToShow = textFilter.trim().length > 0
    ? countries.filter(country => country.name.toLowerCase().indexOf(textFilter.trim().toLowerCase()) > -1)
    : countries;
  
  const sectionToShow = (countries) => {
    if (countries.length === 1) {
      const country = countries[0];
      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <h3>languages:</h3>
          <ul>
            {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt={country.name} width="250" />
        </div>
      );
    }

    if (countries.length <= 10) {
      return countries.map((country, i) => <p key={i}>{country.name}</p>);
    }

    return <p>Too many matches, specify another filter.</p>;
  };

  return (
    <div>
      find countries: <input value={textFilter} onChange={handleTextFilterChange} />
      {sectionToShow(countriesToShow)}
    </div>
  );
};

export default App;
