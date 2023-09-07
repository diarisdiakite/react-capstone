import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllCompanies,
} from './companiesSlice';
import CompaniesListElements from './childComponents/CompaniesListElements';

function Companies() {
  const companies = useSelector(selectAllCompanies);
  const selectedCompanies = companies.map((company) => company.companyName !== null);

  return (
    <div className="main-container">
      <CompaniesListElements
        companies={selectedCompanies}
      />
    </div>
  );
}

export default Companies;
