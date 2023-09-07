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
    /* countriesTotalCompanies: (state) => {
      const companiesByCountry = {};

      state.companies.map((company) => {
        const { country } = company;
        if (country) {
          if (!companiesByCountry[country]) {
            companiesByCountry[country] = 0;
          }
          companiesByCountry[country] += 1;
        }
      });
      state.countries.forEach((country, index) => {
        const totalCompanies = companiesByCountry[country] || 0;
        state.countries[index] = {
          ...country,
          totalCompanies,
        };
      });
      state.countries = state.countries.map((country) => ({
        ...country,
        totalCompanies: companiesByCountry[country] || 0,
      }));
    }, */
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
  console.log('Country:', country);
  const foundCountryCompanies = state.companies.companies.filter(
    (company) => company && company.country !== '' && company.country === country,
  );
  console.log('Found Country Companies:', foundCountryCompanies);
  return foundCountryCompanies || null;
};

export const selectAllSectors = (state) => state.companies.sectors;

export const selectCompaniesBySector = (state, sector) => {
  console.log('Found Sector:', sector);
  const foundSectorCompanies = state.companies.companies.filter(
    (company) => company && company.sector !== '' && company.sector === sector,
  );
  console.log('Found Sector Companies:', foundSectorCompanies);
  return foundSectorCompanies || null;
};

export const selectAllIndustries = (state) => state.companies.industries;

export const selectCompaniesByIndustry = (state, industry) => {
  console.log('Found Industry', industry);
  const foundIndustryCompanies = state.companies.companies.filter(
    (company) => company && company.industry !== '' && company.industry === industry,
  );
  console.log('Found Sector Companies:', foundIndustryCompanies);
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