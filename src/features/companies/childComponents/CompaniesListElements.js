import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { followCompany, unfollowCompany } from '../companiesSlice';

function CompaniesListElements({ companies }) {
  const dispatch = useDispatch();

  const selectedCompanies = useMemo(() => {
    const returnedCompanies = companies.filter((company) => company.companyName !== '');
    return returnedCompanies;
  }, [companies]);
  console.log(selectedCompanies);

  if (!selectedCompanies) {
    return (
      <div>
        Companies not found
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Company</th>
          <th>Industry (Sector) </th>
          <th className="desktop-only">Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {selectedCompanies.map((company) => (
          <tr key={`${company.symbol}-${company.companyName}-${company.sector}`}>
            <td><Link to={`/companies/${company.symbol}`} className="no-style bolded">{company.companyName}</Link></td>
            <td>
              {company.industry}
              {' '}
              (
              {company.sector}
              )
            </td>
            <td className="fixed-width desktop-only">
              {!company.followed && (
              <Badge bg="secondary">
                Not Following
              </Badge>
              )}
              {company.followed && (
              <Badge bg="success">
                Following
              </Badge>
              )}
            </td>
            <td className="fixed-width">
              {!company.followed && (
              <Button
                type="button"
                variant="outline-secondary"
                aria-label="Join company"
                onClick={() => dispatch(followCompany(company.symbol))}
              >
                Follow
              </Button>
              )}
              {company.followed && (
              <Button
                type="button"
                variant="outline-danger"
                aria-label="cancel company participation"
                onClick={() => dispatch(unfollowCompany(company.symbol))}
              >
                Stop Following
              </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

CompaniesListElements.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string,
      companyName: PropTypes.string,
      marketCap: PropTypes.number,
      sector: PropTypes.string,
      industry: PropTypes.string,
      beta: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default CompaniesListElements;
