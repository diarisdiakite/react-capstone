import React from 'react';
import { useSelector } from 'react-redux';
// import { Table, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  selectAllSectors,
} from './companiesSlice';
// import CompaniesListElements from './childComponents/CompaniesListElements';

function Sectors() {
  const sectors = useSelector(selectAllSectors);
  const selectedSectors = sectors.filter((sector) => sector !== '');

  return (
    <Row className="bg-blue item-card">
      {selectedSectors.map((sector) => {
        // const countryCompanies = companiesByCountryFromSeclector[country];
        console.log(selectedSectors);
        /* const countryCompanies = companiesByCountryFromSeclector[country]; */
        /* const totalCompanies = selectedCountries ? selectedCountries.length : 0; */
        return (
          <Col
            key={`countries-${sector}`}
            xs={6}
            sm={6}
            md={4}
            xl={3}
            className="text-center h-100 mx-auto item-card"
          >
            {/* <img id="image" src={map} alt="" /> */}
            <h3 className="bold project-title-text">
              <Link to={`/sectors/${sector}`} className="no-style bold">{sector}</Link>
            </h3>
            <p><Link to={`/sectors/${sector}`} className="no-style bold project-title">View the companies</Link></p>
            <hr className="mx-auto my-bg-black text-center" />
          </Col>
        );
      })}
    </Row>
  );
}

export default Sectors;
