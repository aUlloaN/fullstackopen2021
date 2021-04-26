import React from 'react';

const CountryDetail = ({ country }) => {
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
};

export default CountryDetail;