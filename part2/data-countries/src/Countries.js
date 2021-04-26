import React from 'react';

const Countries = ({ countries, handleSelectCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
  
  return countries.map((country, i) =>
    <div key={i}>
      <span>{country.name}</span>,
      <button onClick={handleSelectCountry.bind(this, country)}>show</button>
    </div>
  );
};

export default Countries;