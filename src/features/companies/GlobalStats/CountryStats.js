import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import { Container } from 'react-bootstrap';
import { selectCompaniesByCountry } from '../companiesSlice';
// import CountryMap from '../../maps/CountryMap';
import countries from '../../maps/countries';
import Map from '../../maps/Map';

function CountryStats() {
  const { country } = useParams();
  const countryCompaniesData = useSelector(selectCompaniesByCountry);
  console.log(countryCompaniesData.length);
  const selectedCountry = countries.find((countryData) => countryData.ISO === country);
  console.log('country', selectedCountry, country);

  return (
    <div key={country.ISO} className="single-country-items-list">
      <Map selectedISO={selectedCountry} />
    </div>
  );
}

export default CountryStats;
