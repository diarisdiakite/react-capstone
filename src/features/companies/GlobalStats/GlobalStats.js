import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectAllCompanies,
  selectAllCountries,
  selectAllIndustries,
  selectAllSectors,
} from '../companiesSlice';

function GlobalStats() {
  const countries = useSelector(selectAllCountries);
  const companies = useSelector(selectAllCompanies);
  const sectors = useSelector(selectAllSectors);
  const industries = useSelector(selectAllIndustries);
  return (
    <div className="stats">
      <div className="item-card">
        <h4><Link className="no-style-black" to="/">{sectors.length}</Link></h4>
        <p>Sectors</p>
      </div>
      <div className="stat-item">
        <h4><Link className="no-style-black" to="/">{industries.length}</Link></h4>
        <p>Industries</p>
      </div>
      <div className="stat-item">
        <h4><Link className="no-style-black" to="/">{companies.length}</Link></h4>
        <p>Companies</p>
      </div>
      <div className="stat-item">
        <h4><Link className="no-style-black" to="/">{countries.length}</Link></h4>
        <p>Countries</p>
      </div>
    </div>
  );
}

export default GlobalStats;
