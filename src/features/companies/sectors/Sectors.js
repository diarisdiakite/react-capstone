import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  selectAllSectors,
} from '../companiesSlice';
import HomeStats from '../GlobalStats/HomeStats';
import GlobalStats from '../GlobalStats/GlobalStats';

function Sectors() {
  const sectors = useSelector(selectAllSectors);
  const selectedSectors = sectors.filter((sector) => sector !== '');

  return (
    <>
      <div>
        <HomeStats />
      </div>
      <Container fluid className="">
        <div className="">
          <GlobalStats />
        </div>
        <Row className="bg-blue item-card">
          <div>
            <h2 className="bg-blue">List of the Sectors</h2>
          </div>
          {selectedSectors.map((sector) => (
            <Col
              key={`countries-${sector}`}
              xs={6}
              sm={6}
              md={4}
              xl={3}
              className="text-center h-100 mx-auto item-card"
            >
              {/* <img id="image" src={map} alt="" /> */}
              <h4 className="bold project-title-text">
                Sector
              </h4>
              <p className="small"><Link to={`/sectors/${sector}`} className="no-style bold">{sector}</Link></p>
              <hr className="mx-auto my-bg-black text-center" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Sectors;
