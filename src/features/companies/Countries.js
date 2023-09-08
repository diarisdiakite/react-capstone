import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {
  selectAllCountries,
  selectAllCompanies, selectAllSectors, selectAllIndustries,
} from './companiesSlice';
import HomeStats from './GlobalStats/HomeStats';
import mapImage from '../../assets/images/localisation1.png';

function Countries() {
  const countries = useSelector(selectAllCountries);
  const selectedCountries = countries.filter((country) => country !== null);
  const companies = useSelector(selectAllCompanies);
  const sectors = useSelector(selectAllSectors);
  const industries = useSelector(selectAllIndustries);

  return (
    <>
      <div>
        <HomeStats />
      </div>
      <Container fluid className="">
        <div className="">
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
          <Row className="bg-blue item-card">
            <div>
              <h2 className="bg-blue">List of countries</h2>
            </div>
            {selectedCountries.map((country) => (
              <Col
                key={`countries-${country}`}
                xs={6}
                sm={6}
                md={4}
                xl={3}
                className="text-center h-100 mx-auto bg-blue item-card"
              >
                <img id="image" src={mapImage} alt="" />
                <h3 className="bold project-title-text">
                  <Link to={`/countries/${country}`} className="no-style bold">{country}</Link>
                </h3>
                <p className="x-small"><Link to={`/countries/${country}`} className="no-style bold project-title">View the companies</Link></p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Countries;
