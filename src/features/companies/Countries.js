import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {
  selectAllCountries, selectCompaniesByCountry,
  selectAllCompanies, selectAllSectors, selectAllIndustries,
} from './companiesSlice';
import map from '../../assets/images/map.png';
import HomeStats from './GlobalStats/HomeStats';
// import Sectors from './Sectors';

function Countries() {
  const countries = useSelector(selectAllCountries);
  const selectedCountries = countries.filter((country) => country !== null);
  const companiesByCountryFromSeclector = useSelector(selectCompaniesByCountry);
  console.log(companiesByCountryFromSeclector);
  const companies = useSelector(selectAllCompanies);
  const companiesByCountry = (country) => companies.filter(
    (company) => company.country === country,
  );
  const sectors = useSelector(selectAllSectors);
  const industries = useSelector(selectAllIndustries);
  console.log('countries:', countries);
  console.log('companiesByCountry:', companiesByCountry);

  return (
    <Container fluid className="">
      <div>
        <HomeStats />
      </div>
      <div className="stats">
        <div className="item-card">
          <h4>Sectors</h4>
          <p>{sectors.length}</p>
        </div>
        <div className="item-card">
          <h4>Industries</h4>
          <p>{industries.length}</p>
        </div>
        <div className="stat-item">
          <h4>Companies</h4>
          <p>{companies.length}</p>
        </div>
        <div className="stat-item">
          <h4>Countries</h4>
          <p>{countries.length}</p>
        </div>
      </div>
      <div>
        <h2>List of countries</h2>
      </div>
      <div>
        <Row>
          {selectedCountries.map((country) => {
            // const countryCompanies = countriesTotalCompanies[country];
            /* const countryCompanies = companiesByCountryFromSeclector[country]; */
            const totalCompanies = selectedCountries ? selectedCountries.length : 0;
            return (
              <Col
                key={`countries-${country}`}
                xs={6}
                sm={6}
                md={4}
                xl={3}
                className="text-center h-100 mx-auto item-card"
              >
                <img id="image" src={map} alt="" />
                <h3 className="bold project-title">
                  <Link to={`/countries/${country}`}>{country}</Link>
                </h3>
                <p style={{ whiteSpace: 'pre-line', alignContent: 'left' }}>{totalCompanies}</p>
                <div>
                  <p>
                    Total Companies:
                    {totalCompanies}
                  </p>
                </div>
                <hr className="mx-auto my-bg-black text-center" />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default Countries;
