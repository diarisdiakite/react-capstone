import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import './index.css';
import App from './App';
import { fetchCompanies, setFetchedCompanies /* countriesTotalCompanies */ } from './features/companies/companiesSlice';
import { setFetchedHomes } from './features/homes/homesSlice';
import 'bootstrap/dist/css/bootstrap.css';

store.dispatch(fetchCompanies());
store.dispatch(setFetchedCompanies);
/* store.dispatch(countriesTotalCompanies()); */
store.dispatch(setFetchedHomes());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
