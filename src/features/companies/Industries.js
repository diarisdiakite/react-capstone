import React from 'react';
import { useSelector } from 'react-redux';
// import { Table, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  selectAllIndustries,
} from './companiesSlice';
// import CompaniesListElements from './childComponents/CompaniesListElements';

function Industries() {
  const industries = useSelector(selectAllIndustries);
  const selectedIndustries = industries.filter((industry) => industry !== '');

  return (
    <Row className="item-card bg-blue">
      {selectedIndustries.map((industry) => {
        const countryIndustries = industriesByCountryFromSeclector[country];
        console.log(countryIndustries);
        /* const countryCompanies = companiesByCountryFromSeclector[country]; */
        /* const totalCompanies = selectedCountries ? selectedCountries.length : 0; */
        return (
          <Col
            key={`countries-${industry}`}
            xs={6}
            sm={6}
            md={4}
            xl={3}
            className="text-center h-100 mx-auto item-card"
          >
            {/* <img id="image" src={map} alt="" /> */}
            <h3 className="bold project-title-text">
              <Link to={`/indsutries/${industry}`} className="no-style bold">{industry}</Link>
            </h3>
            <p><Link to={`/industries/${industry}`} className="no-style bold project-title">View the companies</Link></p>
            <hr className="mx-auto my-bg-black text-center" />
          </Col>
        );
      })}
    </Row>
  );
}

export default Industries;
