const FEATURE_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000&apikey=573cf22c82d515b3605410299bccc61e';
// const FEATURE_URL1 = 'https://financialmodelingprep.com/api/v3/historical-sectors-performance?limit=50&apikey=573cf22c82d515b3605410299bccc61e';
// const FEATURE_URL2 = 'https://financialmodelingprep.com/api/v3/sector-performance?apikey=573cf22c82d515b3605410299bccc61e';

const fetchCompaniesAPI = async () => {
  try {
    const response = await fetch(FEATURE_URL, {
      apiKey: '573cf22c82d515b3605410299bccc61e',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    const data = await response.json();
    const companies = data.map((company) => ({
      ...company,
      followed: false,
    }));
    const countries = [...new Set(data.map((company) => company.country))];
    console.log(countries);
    const sectors = [...new Set(data.map((company) => company.sector))];
    console.log(sectors);
    const industries = [...new Set(data.map((company) => company.industry))];
    console.log(industries);
    console.log(data);
    return {
      companies,
      countries,
      sectors,
      industries,
    };
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
};

export default fetchCompaniesAPI;