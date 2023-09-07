import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  selectAllCountries, selectAllCompanies, selectAllSectors,
  selectAllIndustries,
  selectCompaniesByIndustry,
  selectCompaniesByCountry,
} from './companiesSlice';

function Sector() {
  const companies = useSelector(selectAllCompanies);
  console.log(companies); // Ok
  const countries = useSelector(selectAllCountries);
  console.log(countries); // OK
  const sectors = useSelector(selectAllSectors);
  console.log(sectors); // Okay
  const companiesByCountry = useSelector(selectCompaniesByCountry);
  console.log(companiesByCountry);
  const industries = useSelector(selectAllIndustries);
  console.log(industries);

  const { industry } = useParams();
  const companiesByIndustry = useSelector(
    (state) => selectCompaniesByIndustry(state, industry),
  );
  return (
    <div key={industry} className="main-container">
      <h2>{industry}</h2>
      <ul>
        {companiesByIndustry.map((company) => (
          <li key={company.symbol}><Link to={`/companies/${company.symbol}`}>{company.companyName}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Sector;
