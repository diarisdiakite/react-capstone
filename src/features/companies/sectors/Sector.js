import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectCompaniesBySector } from '../companiesSlice';

function Sector() {
  const { sector } = useParams();
  const companiesBySector = useSelector(
    (state) => selectCompaniesBySector(state, sector),
  );
  return (
    <div key={sector} className="main-container">
      <h2>{sector}</h2>
      <ul>
        {companiesBySector.map((company) => (
          <li key={company.symbol}><Link to={`/companies/${company.symbol}`}>{company.companyName}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Sector;
