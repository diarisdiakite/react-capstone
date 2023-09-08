import React from 'react';
import { useSelector } from 'react-redux';
// import { Table, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  selectAllIndustries,
} from '../companiesSlice';
import HomeStats from '../GlobalStats/HomeStats';
import GlobalStats from '../GlobalStats/GlobalStats';
// import CompaniesListElements from './childComponents/CompaniesListElements';

function Industries() {
  const industries = useSelector(selectAllIndustries);
  const selectedIndustries = industries.filter((industry) => industry !== '');

  return (
    <>
      <div>
        <HomeStats />
      </div>
      <Container fluid className="">
        <div className="">
          <GlobalStats />
        </div>
        <Row className="item-card bg-blue">
          <div>
            <h2 className="bg-blue">List of the Industries</h2>
          </div>
          {selectedIndustries.map((industry) => (
            <Col
              key={`industries-${industry}`}
              xs={6}
              sm={6}
              md={4}
              xl={3}
              className="text-center h-100 mx-auto item-card"
            >
              {/* <img id="image" src={map} alt="" /> */}
              <h4 className="bold project-title-text">
                Industry
              </h4>
              <p className="small"><Link to={`/indsutries/${industry}`} className="no-style bold">{industry}</Link></p>
              <hr className="mx-auto my-bg-black text-center" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Industries;
