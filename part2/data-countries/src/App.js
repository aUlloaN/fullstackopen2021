import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Countries from './Countries';
import CountryDetail from './CountryDetail';

const App = () => {
  const [ textFilter, setTextFilter ] = useState('');
  const [ countries, setCountries ] = useState([]);
  const [ countrySelected, setCountrySelected ] = useState(null);

  useEffect(() => {
    const endpointUrl = `https://restcountries.eu/rest/v2/${textFilter ? `name/${textFilter}` : 'all'}?fields=name;capital;population;languages;flag`;
    
    axios
      .get(endpointUrl)
      .then(response => {
        setCountries(response.data);
      }, () => {
        setCountries([]);
      });
  }, [textFilter]);
  
  const handleTextFilterChange = (event) => {
    setCountrySelected(null);
    setTextFilter(event.target.value);
  };

  const handleSelectCountry = (country) => {
    setCountrySelected(country);
  }

  const countriesToShow = textFilter.trim().length > 0
    ? countries.filter(country => country.name.toLowerCase().indexOf(textFilter.trim().toLowerCase()) > -1)
    : countries;
  
  const sectionToShow = (countries, countrySelected) => {
    if (countries.length === 1) {
      return <CountryDetail country={countries[0]} />;
    }

    if (!countrySelected) {
      return <Countries countries={countries} handleSelectCountry={handleSelectCountry} />;
    }

    return <CountryDetail country={countrySelected} />;
  };

  return (
    <div>
      <Filter text={textFilter} handleChange={handleTextFilterChange} />
      {countriesToShow.length > 0 && sectionToShow(countriesToShow, countrySelected)}
    </div>
  );
};

export default App;
