import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCompaniesAPI from './API/fetchCompaniesAPI';

const initialState = {
  loading: false,
  companies: [],
  countries: [],
  sectors: [],
  industries: [],
  error: '',
};

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => fetchCompaniesAPI());

const companiesSlice = createSlice({
  name: 'companies',
  initialState,

  reducers: {
    setFetchedCompanies: (state, action) => {
      state.companies = action.payload;
      state.loading = false;
      state.error = '';
    },
    followCompany: (state, action) => {
      const companyId = action.payload;
      state.companies = state.companies.map((company) => {
        if (company.company_id !== companyId) return company;
        return { ...company, followed: true };
      });
    },
    unfollowCompany: (state, action) => {
      const companyId = action.payload;
      state.companies = state.companies.map((company) => {
        if (company.company_id !== companyId) return company;
        return { ...company, followed: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload.companies;
      state.sectors = action.payload.sectors;
      state.countries = action.payload.countries;
      state.industries = action.payload.industries;
      state.error = '';
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.loading = false;
      state.companies = [];
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
  },
});

export const selectAllCompanies = (state) => state.companies.companies;

export const selectAllFollowedCompanies = (state) => state.companies.companies.filter(
  (company) => company.followed === true,
);

export const selectCompaniesBySymbol = (state, companySymbol) => state
  .companies.companies.find(
    (company) => company.symbol === companySymbol,
  );

export const selectAllCountries = (state) => state.companies.countries;

export const selectCompaniesByCountry = (state, country) => {
  const foundCountryCompanies = state.companies.companies.filter(
    (company) => company && company.country !== '' && company.country === country,
  );
  return foundCountryCompanies || null;
};

export const selectAllSectors = (state) => state.companies.sectors;

export const selectCompaniesBySector = (state, sector) => {
  const foundSectorCompanies = state.companies.companies.filter(
    (company) => company && company.sector !== '' && company.sector === sector,
  );
  return foundSectorCompanies || null;
};

export const selectAllIndustries = (state) => state.companies.industries;

export const selectCompaniesByIndustry = (state, industry) => {
  const foundIndustryCompanies = state.companies.companies.filter(
    (company) => company && company.industry !== '' && company.industry === industry,
  );
  return foundIndustryCompanies || null;
};

export const selectCompaniesByUser = createSelector(
  [selectAllCompanies, (_, userId) => userId],
  (companies, userId) => companies.filter((company) => company.userId === userId),
);

export const {
  setFetchedCompanies, followCompany,
  unfollowCompany, countriesTotalCompanies,
} = companiesSlice.actions;

export default companiesSlice.reducer;
