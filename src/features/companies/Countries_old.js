import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { selectAllCountries } from './companiesSlice';
// import CountryStats from './GlobalStats/CountryStats';
// import Map from '../maps/Map';
import countries from '../maps/countries';
import countryMapPlaceholder from '../../assets/images/map.png';
import HomeStats from './GlobalStats/HomeStats';
import classes from '../../assets/css/companies.module.scss';

function Countries() {
  const storeCountries = useSelector(selectAllCountries);
  const selectedCountries = storeCountries
    .filter((country) => country && country !== '')
    .map((country) => country.trim());
  // const mapCountriesList = countries.map((country) => country !== '' && country.ISO !== '');
  console.log(selectedCountries);
  return (
    <Container fluid>
      <HomeStats />
      <div>
        <Row>
          {storeCountries.map((storeCountry) => {
          // Find the corresponding country object in the 'countries' array
            const country = countries.find((c) => c.ISO === storeCountry);

            if (!country) {
            // Handle the case where no matching country is found
              return null;
            }
            return (
              <Col
                key={`countries-${country.ISO}`}
                xs={6}
                sm={6}
                md={4}
                xl={3}
                className="text-center h-100 mx-auto"
              >
                <img id="image" src={countryMapPlaceholder} alt="" />
                {/* <Map /> */}
                <h3 className={classes.items__itemsList__text__h3}>
                  <Link to={`/countries/${country}`}>{country}</Link>
                </h3>
                {/* <p className={classes.items__itemsList__text__number}>{country}</p> */}
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
