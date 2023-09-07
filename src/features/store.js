import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import companiesReducer from './companies/companiesSlice';
import homesReducer from './homes/homesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    companies: companiesReducer,
    homes: homesReducer,
  },
});

export default store;
