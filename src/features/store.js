import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    companies: companiesReducer,
  },
});

export default store;
