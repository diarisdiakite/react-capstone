import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectCompaniesByIndustry } from '../companiesSlice';

function Industry() {
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

export default Industry;
