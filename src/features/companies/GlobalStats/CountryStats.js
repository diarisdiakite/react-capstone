import React from 'react';
import { useParams } from 'react-router';
import countries from '../../maps/countries';
import Map from '../../maps/Map';

function CountryStats() {
  const { country } = useParams();
  const selectedCountry = countries.find((countryData) => countryData.ISO === country);

  return (
    <div key={country.ISO} className="single-country-items-list map-container">
      <Map selectedISO={selectedCountry} />
    </div>
  );
}

export default CountryStats;
