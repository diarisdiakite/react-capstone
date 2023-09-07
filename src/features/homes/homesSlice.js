import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  homes: [
    {
      id: '1',
      name: 'Countries',
      length: '',
    },
    {
      id: '2',
      name: 'Companies',
      length: '',
    },
    {
      id: '3',
      name: 'Sectors',
      length: '',
    },
    {
      id: '3',
      name: 'Industries',
      length: '',
    },
  ],
  error: '',
};

// export const fetchHomes = createAsyncThunk('homes/fetchHomes', async () => fetchHomesAPI());

const homesSlice = createSlice({
  name: 'homes',
  initialState,

  reducers: {
    setFetchedHomes: (state, action) => {
      state.homes = action.payload;
      state.loading = false;
      state.error = '';
    },
  },
});

export const selectAllHomes = (state) => state.homes.homes;

export const selectHomesById = (state, homeId) => state
  .homes.homes.find(
    (home) => home.id === homeId,
  );

export const {
  setFetchedHomes, followHome,
  unfollowHome, countriesTotalHomes,
} = homesSlice.actions;

export default homesSlice.reducer;
