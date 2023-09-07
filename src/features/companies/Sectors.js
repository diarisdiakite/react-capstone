import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  selectAllSectors,
} from './companiesSlice';
// import CompaniesListElements from './childComponents/CompaniesListElements';

function Sectors() {
  const sectors = useSelector(selectAllSectors);
  const selectedSectors = sectors.map((sector) => sector !== '');

  return (
    <div className="main-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sector</th>
            <th>Companies</th>
            <th className="desktop-only">Status</th>
            <th className="desktop-only">Action</th>
          </tr>
        </thead>
        <tbody>

          {selectedSectors.map((sector) => (
            <tr key={sector}>
              <td><Link to={`/sectors/${sector}`}>{sector}</Link></td>
              <td>Companies</td>
              <td className="fixed-width desktop-only">
                <Button
                  type="button"
                  variant="outline-secondary"
                  aria-label="Join company"
                >
                  Edit
                </Button>
              </td>
              <td className="fixed-width desktop-only">
                <Button
                  type="button"
                  variant="outline-danger"
                  aria-label="cancel company participation"
                >
                  Delete
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sectors;
