import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import CountryStats from './CountryStats';
import map from '../../../assets/images/earth-space.gif';

function HomeStats() {
  return (
    <Container fluid className="home-stats">
      <Row>
        <Col
          key="country"
          xs={6}
          sm={6}
          md={4}
          xl={3}
          className="map-container"
        >
          <img className="" src={map} alt="" />
        </Col>
        <Col
          key="countries"
          xs={6}
          sm={6}
          md={4}
          xl={3}
          className="home-stats-title"
        >
          <h3
            className="bold project-title"
          >
            COMPANIES
          </h3>
          <p style={{ whiteSpace: 'pre-line', alignContent: 'left' }}>+1.000.000USD</p>
          <hr className="mx-auto my-bg-black text-center" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeStats;
