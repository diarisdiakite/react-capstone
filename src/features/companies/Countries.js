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
// import map from '../../assets/images/map.png';
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
      <div className="flex-container">
        <div className="stats">
          <div className="item-card">
            <h4>{sectors.length}</h4>
            <p>Sectors</p>
          </div>
          <div className="stat-item">
            <h4>{industries.length}</h4>
            <p>Industries</p>
          </div>
          <div className="stat-item">
            <h4>{companies.length}</h4>
            <p>Companies</p>
          </div>
          <div className="stat-item">
            <h4>{countries.length}</h4>
            <p>Countries</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="bg-blue">List of countries</h2>
      </div>
      <div>
        <Row className="bg-blue item-card">
          <Container fluid className="bg-blue">
            <div className="stat-item">
              <h4>{companies.length}</h4>
              <p>Companies</p>
            </div>
            <div className="stat-item">
              <h4>{countries.length}</h4>
              <p>Countries</p>
            </div>
          </Container>
          {selectedCountries.map((country) => {
            const countryCompanies = companiesByCountryFromSeclector[country];
            console.log(countryCompanies);
            /* const countryCompanies = companiesByCountryFromSeclector[country]; */
            /* const totalCompanies = selectedCountries ? selectedCountries.length : 0; */
            return (
              <Col
                key={`countries-${country}`}
                xs={6}
                sm={6}
                md={4}
                xl={3}
                className="text-center h-100 mx-auto bg-blue item-card"
              >
                {/* <img id="image" src={map} alt="" /> */}
                <h3 className="bold project-title-text">
                  <Link to={`/countries/${country}`} className="no-style bold">{country}</Link>
                </h3>
                <p><Link to={`/countries/${country}`} className="no-style bold project-title">View the companies</Link></p>
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
