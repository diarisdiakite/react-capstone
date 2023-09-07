import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { selectCompaniesByCountry } from './companiesSlice';
import CountryStats from './GlobalStats/CountryStats';
// import Map from '../maps/Map';

function Country() {
  const { country } = useParams();
  const companiesByCountry = useSelector((state) => selectCompaniesByCountry(state, country));
  const componentCompaniesByCountry = companiesByCountry.filter((company) => company.companyName !== '');
  const componentCompaniesByCountryLength = componentCompaniesByCountry.length;
  console.log(componentCompaniesByCountryLength);

  return (
    <Container className="single-country-items-list">
      <div className="map">
        <CountryStats />
      </div>
      <div key={country} className="text">
        <Table striped bordered>
          <thead>
            <tr>
              <th>{country}</th>
              <th>
                {componentCompaniesByCountryLength}
                {' '}
                companies
              </th>
            </tr>
          </thead>
          <tbody>
            {componentCompaniesByCountry.map((company) => (
              <tr key={`${country}-${company}-${company.marketCap}`}>
                <td><Link to={`/companies/${company.symbol}`}>{company.companyName}</Link></td>
                <td>{company.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Country;
