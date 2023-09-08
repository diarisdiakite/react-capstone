import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectCompaniesBySymbol, followCompany, unfollowCompany } from '../companiesSlice';

function Company() {
  const dispatch = useDispatch();
  const { companySymbol } = useParams();
  const company = useSelector((state) => selectCompaniesBySymbol(state, companySymbol));

  return (
    <div className="main-container">
      <div className="no-style-black">
        <div className="company" key={`company-${companySymbol}`}>
          <h3>{company?.companyName}</h3>
          <p><Link to={company?.sector}>{company?.sector}</Link></p>
          <p>
            Industry:
            {company?.industry}
          </p>
          <p>
            Beta:
            {company?.beta}
          </p>
          <p>
            Price:
            {company?.price}
          </p>
          <p>
            Last Annual Dividend:
            {company?.lastAnnualDividend}
          </p>
          <p>
            Volume:
            {company?.volume}
          </p>
          <p>
            Exchange:
            {company?.exchange}
          </p>
          <p>
            Exchange Short Name:
            {company?.exchangeShortName}
          </p>
          <p>
            Is Etf:
            {company?.isEtf}
          </p>
          <p>
            Is Actively Trading:
            {company?.isActivelyTrading}
          </p>
          <Button
            type="button"
            aria-label="Update company"
            variant="outline-success"
            onClick={() => dispatch(followCompany(companySymbol))}
          >
            Follow Company
          </Button>
          <Button
            type="button"
            aria-label="Remove company"
            variant="outline-danger"
            onClick={() => dispatch(unfollowCompany(companySymbol))}
          >
            Unfollow Company
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Company;
